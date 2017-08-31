/// <reference path='helper.ts' />

console.log('navigation.ts');

interface INavLink {
    name: string;
    link: string;
}

class Navigation {

    private _navs: INavLink[];
    private _template: string;
    private _microTemplate: string;
    private _navModule: HTMLElement;
    private _list: HTMLUListElement;

    constructor(navs: INavLink[]) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    private _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/nav-template.html');
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    }
    private _bindEvents() {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    }

    private _render() {
        let navLinks = '';
        this._navs.forEach(
            (value: INavLink) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
                const setActive = (window.location.hash === value.link) ? 'active' : '';
                const parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
                navLinks += parsePass3;
            }
        );
        this._list.innerHTML = navLinks;
    }

    private _urlChanged(e) {
        this._render();
    }

}
