namespace Helper {
    console.log('helper.ts');

    export const getHTMLTemplate = (file: string) => {
        let templateHTML = 'fail';
        const xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if(this.readyState === 4 && this.status === 200){
                templateHTML = this.responseText;
            }
        };
        xmlHttp.open('GET', file, false);
        xmlHttp.send();
        return templateHTML;
    };

    export const parseHTMLString = (target: string, moustache: string, content: string) => {
        return target.replace(moustache, content);
    };
}