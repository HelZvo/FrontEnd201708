namespace Helper {
    console.log('helper.ts');
    export const getParameterByName = (name: string) => {
        const url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&'); // keerukamate nimetuste korral
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const result = regex.exec(url);
        if (!result) {
            return undefined;
        }
        if (!result[2]) {
            return '';
        }
        console.log(result[0]);

        return decodeURIComponent(result[2].replace(/\+/g, ' '));
    };
    export const removeParams = () => {
        window.location.href = window.location.origin + window.location.hash;
    };

    export const formatEmails = (className: string, splitter: string) => {
        const emails = document.getElementsByClassName(className);
        for (let index = 0; index < emails.length; ++index) {
            const emailParts = emails.item(index).innerHTML.split(splitter);
            const email = `${emailParts[0]}@${emailParts[1]}`;
            const link = `<a href="mailto:${email}">${email}</a>`;
            emails.item(index).outerHTML = link;
        }
    };

    export const getHTMLTemplate = (file: string) => {
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

    export const parseHTMLString = (target: string, mustache: string, content: string) => {
        return target.replace(mustache, content);
    };
}
