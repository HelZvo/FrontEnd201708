"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Helper;
(function (Helper) {
    console.log('helper.ts');
    Helper.getHTMLTemplate = function (file) {
        var templateHTML = 'fail';
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    };
    Helper.parseHTMLString = function (target, moustache, content) {
        return target.replace(moustache, content);
    };
})(Helper || (Helper = {}));
console.log('page.ts');
/**
 * Page
 */
var Page = (function () {
    function Page() {
        // tyhi
    }
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._cacheDOM = function () {
        // tyhi
    };
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._bindEvents = function () {
        // tyhi
    };
    // tslint:disable-next-line:prefer-function-over-method
    Page.prototype._render = function () {
        // tyhi
    };
    return Page;
}());
/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('gallery.ts');
var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        var _this = _super.call(this) || this;
        _this._pictures = [
            { title: 'Auto', description: 'Üks auto', link: 'Auto.jpg' },
            { title: 'Taevas', description: 'Üks taevas', link: 'Taevas.jpg' },
            { title: 'Taevas2', description: 'Üks Taevas2', link: 'Taevas2.jpg' },
            { title: 'Tilgad', description: 'Palju tilkasid', link: 'Tilgad.jpg' },
            { title: 'Tilk', description: 'Üks tilk', link: 'Tilk.jpg' },
            { title: 'TuhmSulps', description: 'Üks TuhmSulps', link: 'TuhmSulps.jpg' },
            { title: 'TuhmSulps2', description: 'Üks TuhmSulps2', link: 'TuhmSulps2.jpg' },
            { title: 'VeeSulps', description: 'Üks VeeSulps', link: 'VeeSulps.jpg' },
            { title: 'VeeSulps2', description: 'Üks VeeSulps2', link: 'VeeSulps2.jpg' },
            { title: 'VeeT6us', description: 'Üks VeeT6us', link: 'VeeT6us.jpg' }
        ];
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Gallery.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/gallery-template.html');
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._list = this._picsModule.querySelector('#images');
    };
    Gallery.prototype._bindEvents = function () {
        // tyhi
    };
    Gallery.prototype._render = function () {
        var _this = this;
        var pics = '';
        this._pictures.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{caption}}', value.title);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{source}}', "images/" + value.link);
            var parsePass3 = Helper.parseHTMLString(parsePass2, '{{alternative}}', value.description);
            pics += parsePass3;
        });
        this._list.innerHTML = pics;
    };
    return Gallery;
}(Page));
/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('home.ts');
var Home = (function (_super) {
    __extends(Home, _super);
    function Home() {
        var _this = _super.call(this) || this;
        _this._cacheDOM();
        _this._bindEvents();
        _this._render();
        return _this;
    }
    Home.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/home-template.html');
        this._homeModule = document.querySelector('main');
        this._homeModule.outerHTML = this._template;
        this._homeModule = document.getElementById('home');
        this._button = this._homeModule.querySelector('#refresh');
        this._text = this._homeModule.querySelector('#restOutput');
        this._refresh();
    };
    Home.prototype._bindEvents = function () {
        this._button.addEventListener('click', this._refresh.bind(this));
    };
    Home.prototype._render = function () {
        this._text.innerHTML = "Id: " + this._restJSON.id + " Sisu: " + this._restJSON.content;
    };
    Home.prototype._refresh = function () {
        var restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting');
        this._restJSON = JSON.parse(restAnswer);
        this._render();
    };
    return Home;
}(Page));
/// <reference path='helper.ts' />
console.log('navigation.ts');
var Navigation = (function () {
    function Navigation(navs) {
        this._navs = navs;
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }
    Navigation.prototype._cacheDOM = function () {
        this._template = Helper.getHTMLTemplate('templates/nav-template.html');
        this._navModule = document.getElementById('mainMenu');
        this._navModule.outerHTML = this._template;
        this._navModule = document.getElementById('mainMenu');
        this._microTemplate = this._navModule.querySelector('script').innerText;
        this._list = this._navModule.getElementsByTagName('ul').item(0);
    };
    Navigation.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    Navigation.prototype._render = function () {
        var _this = this;
        var navLinks = '';
        this._navs.forEach(function (value) {
            var parsePass1 = Helper.parseHTMLString(_this._microTemplate, '{{name}}', value.name);
            var parsePass2 = Helper.parseHTMLString(parsePass1, '{{link}}', value.link);
            var setActive = (window.location.hash === value.link) ? 'active' : '';
            var parsePass3 = Helper.parseHTMLString(parsePass2, '{{active}}', setActive);
            navLinks += parsePass3;
        });
        this._list.innerHTML = navLinks;
    };
    Navigation.prototype._urlChanged = function (e) {
        this._render();
    };
    return Navigation;
}());
/// <reference path='helper.ts' />
/// <reference path='navigation.ts' />
/// <reference path='home.ts' />
/// <reference path='gallery.ts' />
console.log('main.ts');
var App = (function () {
    function App() {
        this._navLinks = [
            { name: 'Pealeht', link: '#home' },
            { name: 'Galerii', link: '#gallery' }
        ];
        this._bindEvents();
        this._setup();
        this._urlChanged();
    }
    // tslint:disable-next-line:prefer-function-over-method
    App.prototype._bindEvents = function () {
        window.addEventListener('hashchange', this._urlChanged.bind(this));
    };
    // tslint:disable-next-line:prefer-function-over-method
    App.prototype._setup = function () {
        if (window.location.hash === '') {
            window.location.hash = this._navLinks[0].link;
        }
        var nav = new Navigation(this._navLinks);
    };
    App.prototype._urlChanged = function () {
        var _this = this;
        this._navLinks.forEach(function (value) {
            if (window.location.hash === value.link) {
                if (value.link === _this._navLinks[0].link) {
                    _this.page = new Home();
                }
                else if (value.link === _this._navLinks[1].link) {
                    _this.page = new Gallery();
                }
            }
        });
    };
    return App;
}());
var app = new App();
//# sourceMappingURL=app.js.map