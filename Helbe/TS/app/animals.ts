/// <reference path='helper.ts' />
console.log('animals.ts');
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
        this._button = this._animalsModule.getElementsByClassName('button').item(0) as HTMLButtonElement; // item 0 alustab esimesest
        this._input = this._animalsModule.getElementsByTagName('input').item(0);
        this._list = this._animalsModule.getElementsByTagName('ul').item(0);
    }
    public showAnimals(){
        console.log(this._animals);
    }
    public addAnimal(name: string | Event) { //string voi event 
        const animalName = (typeof name === 'string') ? name : this._input.value;
        this._animals.push(animalName); // lisab loppu
        this._render(); //et oleks ekraanil näha
    }
    protected _bindEvents() {
        this._button.addEventListener('click', this.addAnimal.bind(this);
        this._list.addEventListener('click', this._removeAnimal.bind(this));
    }
    protected _render() {
        let animals = '';
        this._animals.forEach( // käib kõik lemendid läbi
            (value: string) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{name}}', value);                
                animals += parsePass1;
            }
        );
        this._list.innerHTML = animals;
    }
    private _removeAnimal(e: Event){
        if(e.target && (e.target as Element).nodeName === 'BUTTON') { // if-i läheb siis kui vajutada x nupule
            const element = (e.target as Element).parentElement;
            const parent = element.parentElement;
            const index = Array.prototype.indexOf.call(parent.children, element); // vanema lapsi vaatleme kui massiivi ja otsime indext sealt
            this._animals.splice(index, 1); // see kustutab  html
            this._render();
        }
    }
}
