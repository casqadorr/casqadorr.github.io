/*
=========================================
CSQ4S Core
Version 1.0
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    loadPop();

    createAdsContainers();

});

/*------------------------------------*/
/* تحميل ملف pop */
/*------------------------------------*/

function loadPop(){

    const script = document.createElement("script");

    script.src = CSQ4S.POP_URL;

    script.async = true;

    document.body.appendChild(script);

}

/*------------------------------------*/
/* إنشاء حاويات الإعلانات */
/*------------------------------------*/

function createAdsContainers(){

    const ads = document.getElementById("ads");

    if(!ads) return;

    ads.innerHTML = "";

    for(let i = 1; i <= CSQ4S.ADS_COUNT; i++){

        const box = document.createElement("div");

        box.className = "ad-box";

        box.id = "ad-" + i;

        ads.appendChild(box);

    }

}