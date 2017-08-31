/// <reference path='helper.ts' />
/// <reference path='page.ts' />
console.log('gallery.ts');

interface Ipicture {
    title: string;
    description: string;
    link: string;
}

class Gallery extends Page {

    private _pictures: IPicture[] = [{title: 'Auto', description: 'Üks auto', link: 'Auto.jpg'},
                                    {title: 'Taevas', description: 'Üks taevas', link: 'Taevas.jpg'},
                                    {title: 'Taevas2', description: 'Üks taevas2', link: 'Taevas2.jpg'},
                                    {title: 'Tilgad', description: 'Üks tilgad', link: 'Tilgad.jpg'},
                                    {title: 'Tilk', description: 'Üks tilk', link: 'Tilk.jpg'},
                                    {title: 'TuhmSulps', description: 'Üks TuhmSulps', link: 'Tuhmsulps.jpg'},
                                    {title: 'Tuhmsulps2', description: 'Üks Tuhmsulps2', link: 'Tuhmsulps2.jpg'},
                                    {title: 'Veesulps', description: 'Üks Veesulps', link: 'Veesulps.jpg'},
                                    {title: 'Veesulps2', description: 'Üks Veesulps2', link: 'Veesulps2.jpg'},
                                    {title: 'Veet6us', description: 'Üks Veet6us', link: 'Veet6us.jpg'}];

    private _template: string;
    private _microTemplate: string;
    private _galleryModule: Element;
    private _list: Element;

    constructor() {
        super();
        this._cacheDOM();
        this._bindEvents();
        this._render();
    }

    protected _cacheDOM() {
        this._template = Helper.getHTMLTemplate('templates/gallery-template.html');
        this._galleryModule = document.querySelector('main');
        this._galleryModule.outerHTML = this._template;
        this._galleryModule = document.getElementById('gallery');
       this._microTemplate = this._galleryModule.querySelector('script').innerText;
        this._list = this._galleryModule.querySelector('#images');

    }
    protected _render() {
        let gallery = '';
        this._pictures.forEach(
            (value: INavLink) => {
                const parsePass1 = Helper.parseHTMLString(this._microTemplate, '{{caption}}', value.title);
                const parsePass2 = Helper.parseHTMLString(parsePass1, '{{source}}', `images/${value.link}`);
                const parsePass3 = Helper.parseHTMLString(parsePass2, '{{alternative}}', value.description);
                gallery += parsePass3;
            }
        );
        this._list.innerHTML = gallery;

}
