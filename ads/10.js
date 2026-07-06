var atOptions = {
    'key': '6dadbd1c0664a5adfb47016d73be958e',
    'format': 'iframe',
    'height': 50,
    'width': 320,
    'params': {}
};

// إنشاء عنصر السكربت الخاص بالاستدعاء
var script = document.createElement('script');
script.src = 'https://www.highperformanceformat.com/6dadbd1c0664a5adfb47016d73be958e/invoke.js';
script.async = true;

// إضافة السكربت إلى مكان استدعاء الملف في صفحة الـ HTML
document.currentScript.parentNode.appendChild(script);
