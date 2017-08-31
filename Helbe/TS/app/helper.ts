namespace Helper {
    console.log('helper.ts');

    export const getParameterByName = (name: string) => {
        const url = window.location.href; // tagastab täieliku aadressi http jne
        name = name.replace(/[\[\]]/g, '\\$&'); // otsib spetsiaalseid märke ja eemaldab need, keerukate nimetuste korral
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`); // otsib küsimärki või &
        const result = regex.exec(url);
        if(!result) {
            return undefined;
        }
        if(!result[2]) {
            return '';
        }
        return decodeURIComponent(result[2].replace(/\+/g, ' '));
       // confirm.log(name);
    };
    export const removeParams = () => {
        window.location.href = window.location.origin + window.location.hash;
    };

    export const formatEmails = (className: string, splitter: string) => { // emaili (ät)-i vahetamine märgiks
            const emails = document.getElementsByClassName(className);
            for (let index = 0; index < emails.length; ++index) {
                const emailParts = emails.item(index).innerHTML.split(splitter)
                const email = `${emailParts[0]}@${emailParts[1]}`; // votab elemendi loikab pooleks
                const link = `<a href="mailto:${email}">${email}</a>`
                emails.item(index).outerHTML = link; // asendab spani lingiga
            }
    };
    export const getHTMLTemplate = (file: string) => { //ajaxi funktsionaalsus
        let templateHTML = 'fail';
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            // tslint:disable-next-line:no-invalid-this
            if (this.readyState === 4 && this.status === 200) {
                // tslint:disable-next-line:no-invalid-this
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();

        return templateHTML;
    };

    export const parseHTMLString = (target: string, mustache: string, content: string) => { // mustasche funktsionaalsus
        return target.replace(mustache, content);
    };
    
    }
}
