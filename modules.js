//Script to import modules
function importScriptInHead(url, type = 'module') {
    var script = document.createElement('script');
    script.type = type;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}

const source = 'https://raw.githubusercontent.com/luan-grabher/RunrunItPlus/main/';

//modules to import
urls = [
    {
        url: source + 'App.js',
        type: 'text/javascript'
    },
    {
        url: source + 'Helpers/Elements.js'
    }
];


//import modules
urls.forEach(url => {
    importScriptInHead(url.url, url.type);
    }
);