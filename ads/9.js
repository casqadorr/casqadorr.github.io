var atOptions = {
    'key': '65dbabb611908f80a96ae9a18e5912d9',
    'format': 'iframe',
    'height': 250,
    'width': 300,
    'params': {}
};

// إنشاء وسم السكربت الخاص بالاستدعاء
var script = document.createElement('script');
script.src = 'https://www.highperformanceformat.com/65dbabb611908f80a96ae9a18e5912d9/invoke.js';
script.async = true;

// إلحاق السكربت بالحاوية التي يتم استدعاء الملف فيها
document.currentScript.parentNode.appendChild(script);
