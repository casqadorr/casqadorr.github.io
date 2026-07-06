(function() {
    // إنشاء العناصر
    var overlay = document.createElement('div');
    var popup = document.createElement('div');
    var iframe = document.createElement('iframe');

    // إعدادات الـ Overlay
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = '9999';

    // إعدادات الـ Popup
    popup.style.width = '90%';
    popup.style.height = '90%';
    popup.style.backgroundColor = 'white';
    popup.style.borderRadius = '10px';
    popup.style.overflow = 'hidden';

    // إعدادات الـ Iframe
    iframe.src = 'https://www.effectivecpmnetwork.com/yikqud60?key=5eb19de74fc2424b1bb5308e8244ffdc';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';

    // التجميع
    popup.appendChild(iframe);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
})();
