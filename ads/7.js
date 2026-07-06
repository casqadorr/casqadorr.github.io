atOptions = {
    'key' : 'a5b4e81144b7f1b6eb351630841aab53',
    'format' : 'iframe',
    'height' : 90,
    'width' : 728,
    'params' : {}
};

// إنشاء عنصر السكربت وإضافته في مكان استدعاء الملف
var script = document.createElement('script');
script.src = 'https://www.highperformanceformat.com/a5b4e81144b7f1b6eb351630841aab53/invoke.js';
document.currentScript.parentNode.insertBefore(script, document.currentScript.nextSibling);
