/// <reference path='helper.ts' />
console.log('animal.ts');

class Animals {

    private _animals = ['Karu', 'Kass', 'Hunt'];
    private _microTemplate: string;
    private _animalsModule: Element;
    private _button: HTMLButtonElement;
    private _input: HTMLInputElement;
     private _list: HTMLUListElement;

    constructor() {
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._microTemplate = Helper.getHTMLTemplate('templates/animal-template.html');
        this._animalsModule = document.getElementById('animalsModule');
        this._button = this._animalsModule.getElementsByClassName('button').item(0) as HTMLButtonElement;
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);

    }
    protected _bindEvents() {
        this._button.addEventListener('click', this.addAnimal.bind(this));
        this._list.addEventListener('click', this._removeAnimal.bind(this));
    }
    protected _render() {
        let animals = '';
        this._animals.forEach(
            (value: string) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value);
               animals += parsePass1;
            }
        );
        this._list.innerHTML = animals;
    }
    public showAnimals() {
        console.log(this._animals);
    }
    public addAnimal(name: string | Event) {
        const animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName);
        this._render();
    }
    private _removeAnimal(e: Event) {
        if (e.target && (e.target as Element).nodeName === 'BUTTON') {
            const element = (e.target as Element).parentElement;
            const parent = element.parentElement;
            const index = Array.prototype.indexOf.call(parent.children, element);
            this._animals.splice(index, 1); // see kustutab visuaalselt HTML-is
            this._render();
        }
    }
}
