/// <reference path='helper.ts' />
/// <reference path='navigation.ts' />
/// <reference path='home.ts' />
/// <reference path='gallery.ts' />
console.log('main.ts');

class App {
    private _navLinks: INavLink[] = [
        {name: 'Pealeht', link: '#home'}, 
        {name : 'Galerii', link: '#gallery'}
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

    }

    private _urlChanged() {
        this._navLinks.forEach(
            (value: INavLink) => {
                if (window.location.hash === value.link) {
                    if (value.link === this._navLinks[0].link) {
                        this.page = new Home();
                    } else if(value.link === this._navLinks[1].link) {
                        this.page = new Gallery();
                    }
                }
            }
        );
    }
}
let app = new App();
