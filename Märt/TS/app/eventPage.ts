/// <reference path='helper.ts' />
/// <reference path='page.ts' />

type Joined = 'Yes' | 'Maybe' | 'No';

interface IParticipant {
    name: string;
    joined: Joined;
}

class EventPage extends Page {

    private _participant: IParticipant;
    private _template: string;
    private _microTemplate: string;
    private _peopleModule: Element;
    private _list: Element;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/event-template.html');
        this._peopleModule = document.querySelector('main');
        this._peopleModule.outerHTML = this._template;
        this._peopleModule = document.getElementById('event');
       this._microTemplate = this._peopleModule.querySelector('script').innerText;
        this._list = this._peopleModule.querySelector('ul');

    }
    protected _bindEvents() {
        this._list.addEventListener('click',this._deletePerson.bind(this));
    }
    protected _render() {
        this._participant = JSON.parse(localStorage.getItem('people'));
        let people = '';
        this._participant.forEach(
            (value: IParticipant) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value.name);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{joined}}', value.joined);
               people += parsePass2;
            }
        );
        this._list.innerHTML = people;
    }
    private _deletePerson(e: Event) {
        if (e.target && (e.target as Element).nodeName === 'BUTTON') {
            const element = (e.target as Element).parentElement;
            const parent = element.parentElement;
            const index = Array.prototype.indexOf.call(parent.children, element);
            this._participant.splice(index, 1); // see kustutab visuaalselt HTML-is
            localStorage.setItem('people', JSON.stringify(this._participant)); // see kustutab andmebaasist
            this._render();
        }
    }
}
