/// <reference path='helper.ts' />
/// <reference path='navigation.ts' />
/// <reference path='home.ts' />
/// <reference path='gallery.ts' />
/// <reference path='eventPage.ts' />
console.log('main.ts');

class App {
    private _navLinks: INavLink[] = [
        {name: 'Pealeht', link: '#home'}, 
        {name : 'Galerii', link: '#gallery'},
        {name: 'Üritus', link: '#event'}
    ];
    private page: Page;

    constructor() {
        this._bindEvents();
        this._setup();
        this._urlChanged();
    }

    // tslint:disable-next-line:prefer-function-over-method
    private _bindEvents() {
       window.addEventListener('hashchange', this._urlChanged.bind(this));
    }

    // tslint:disable-next-line:prefer-function-over-method
    private _setup() {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        const nav = new Navigation(this._navLinks);
        this._checkParams();
        this._urlChanged();

    }

    private _urlChanged() {
        Helper.formatEmails('at-mail', '(ät)');
        this._navLinks.forEach(
            (value: INavLink) => {
                if (window.location.hash === value.link) {
                    if (value.link === this._navLinks[0].link) {
                        this.page = new Home();
                    } else if(value.link === this._navLinks[1].link) {
                        this.page = new Gallery();
                    } else if(value.link === this._navLinks[2].link) {
                        this.page = new EventPage();
                    }
                }
            }
        );
    }
    private _checkParams() {
        const name = Helper.getParameterByName('name');
        const joined = Helper.getParameterByName('joined') as Joined;
        if(name && joined) {
            Helper.removeParams();
            let people: IPartisipant[] = JSON.parse(localStorage.getItem('people'));
            if(!people) {
                people = [];
            }
            const person: IPartisipant = {name, joined}; // {name: name, joined: joined};
            people.push(person);
            console.log(people);
            localStorage.setItem('people', JSON.stringify(people));
        }

    }
}
let app = new App();
