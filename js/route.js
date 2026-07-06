/*
=========================================
CSQ4S Route
Version 1.0
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const button = document.getElementById("continueButton");

    if (!button) return;

    button.addEventListener("click", nextStep);

});

/*------------------------------------*/
/* الانتقال للخطوة التالية */
/*------------------------------------*/

function nextStep() {

    const current = window.CSQ4S_CURRENT_STEP;

    if (current < CSQ4S.TOTAL_STEPS) {

        window.location.href = current + 1 + ".html";

        return;

    }

    // الصفحة الرابعة
    openFinalLink();

}