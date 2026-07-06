var atOptions = {
    'key': '88f1ce91331d314d9ef54baeff209e91',
    'format': 'iframe',
    'height': 60,
    'width': 468,
    'params': {}
};

// إنشاء وسم السكربت الخاص بالاستدعاء
var script = document.createElement('script');
script.src = 'https://www.highperformanceformat.com/88f1ce91331d314d9ef54baeff209e91/invoke.js';
script.async = true;

// إلحاق السكربت بالصفحة ليتم تنفيذه
document.currentScript.parentNode.appendChild(script);
