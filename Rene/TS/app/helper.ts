namespace Helper {
    console.log('helper.ts');
    export const getParameterByName(name: string) => {
        const url = window.location.href;
        name = name.replace(/[\[\]]]/g, '\\$&');
        const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
        const result = regex.exec(url);
        if(!result) {
            return undefined;
        }
        if(!result[2]) {
            return '';
        }
        console.log(result[0]);

        return decodeURIComponent(result[2].replace(/\+/g,''));

    }

    export const removeParams = () => {
        window.location.href = window.location.origin + window.location.hash;
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
