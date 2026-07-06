var atOptions = {
    'key': 'a5b4e81144b7f1b6eb351630841aab53',
    'format': 'iframe',
    'height': 90,
    'width': 728,
    'params': {}
};

// إنشاء وسم السكربت الخاص بالاستدعاء
var script = document.createElement('script');
script.src = 'https://www.highperformanceformat.com/a5b4e81144b7f1b6eb351630841aab53/invoke.js';
script.async = true;

// إضافة السكربت إلى مكان استدعاء الملف
document.currentScript.parentNode.appendChild(script);
