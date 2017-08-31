/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('gallery.ts');

interface IPicture {
    title: string;
    description: string;
    link: string;
}

class Gallery extends Page {

    private _pictures: IPicture[] = [{title: 'Auto', description: 'Üks auto', link: 'Auto.jpg'},
                                    {title: 'Taevas', description: 'Üks auto', link: 'Taevas.jpg'},
                                    {title: 'Taevas2', description: 'Üks auto', link: 'Taevas2.jpg'},
                                    {title: 'Tilgad', description: 'Üks auto', link: 'Tilgad.jpg'},
                                    {title: 'Tilk', description: 'Üks auto', link: 'Tilk.jpg'},
                                    {title: 'TuhmSulps', description: 'Üks auto', link: 'TuhmSulps.jpg'},
                                    {title: 'TuhmSulps2', description: 'Üks auto', link: 'TuhmSulps2.jpg'},
                                    {title: 'VeeSulps', description: 'Üks auto', link: 'VeeSulps.jpg'},
                                    {title: 'VeeSulps2', description: 'Üks auto', link: 'VeeSulps2.jpg'},
                                    {title: 'VeeT6us', description: 'Üks auto', link: 'VeeT6us.jpg'}];

    private _restJSON: IGreeting;
    private _homeModule : Element;
    private _button :HTMLButtonElement;
    private _list: Element;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/gallery-template.html');
        this._picsModule = document.querySelector('main');
        this._picsModule.outerHTML = this._template;
        this._picsModule = document.getElementById('gallery');
        this._microTemplate = this._picsModule.querySelector('script').innerText;
        this._list = this._picsModule.querySelector('#image');


        this._refresh();
    }
    protected _bindEvents() {
        this._button.addEventListener('click', this._refresh.bind(this));
    }
    protected _render() {
        let pics = '';
        this._pictures.forEach(
            (value: INavLink) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}', value.name);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{source}}', `images/${value.link}`);
                const parsePass3 = Helper.parseHTMLString(parsePass2, '{{alternative}}', value.description);
                pics += parsePass3;
            }
        );
        this._list.innerHTML = pics;
    }
    }
}
