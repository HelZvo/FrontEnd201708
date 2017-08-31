namespace Helper {
    console.log('helper.ts');

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
