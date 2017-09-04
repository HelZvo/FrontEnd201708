/// <reference path='helper.ts' />
/// <reference path='page.ts' />
/// <reference path='animals.ts' />
console.log('home.ts');

interface IGreeting {
    id: number;
    content: string;
}

class Home extends Page {

    private _template: string;
    private _restJSON: IGreeting;
    private _homeModule : Element;
    private _button :HTMLButtonElement;
    private _text: Element;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/home-template.html');
        this._homeModule = document.querySelector('main');
        this._homeModule.outerHTML = this._template;
        this._homeModule = document.getElementById('home');
        this._button = this._homeModule.querySelector('#refresh') as HTMLButtonElement;
        this._text = this._homeModule.querySelector('#restOutput');
        const animals = new Animals();
        this._refresh();
    }
    protected _bindEvents() {
        this._button.addEventListener('click', this._refresh.bind(this));
    }
    protected _render() {
        this._text.innerHTML = `Id: ${this._restJSON.id} Sisu: ${this._restJSON.content}`;
    }
    private _refresh() {
        const restAnswer = Helper.getHTMLTemplate('http://rest-service.guides.spring.io/greeting');
        this._restJSON = JSON.parse(restAnswer) as IGreeting;
        this._render();
    }

}
