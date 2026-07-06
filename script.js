/*
====================================
Casqadorr Link Bypass
script.js
Final Version
====================================
*/

'use strict';

/* ===========================
   Read Base64 URL
=========================== */

const params = new URLSearchParams(window.location.search);
const encodedUrl = params.get('url');

/* ===========================
   Check URL
=========================== */

if (!encodedUrl) {
    document.body.innerHTML = '<h2 style="text-align:center;padding:40px;">Invalid Link</h2>';
    throw new Error('Missing url parameter');
}

/* ===========================
   Current Page
=========================== */

const page = window.location.pathname.split('/').pop();

/* ===========================
   Next Step
=========================== */

const nextPages = {
    "step1.html": "step2.html",
    "step2.html": "step3.html",
    "step3.html": "step4.html"
};

/* ===========================
   Countdown
=========================== */

window.addEventListener("DOMContentLoaded", () => {

    const timer = document.getElementById("timer");
    const button = document.getElementById("continueBtn");

    if (!timer || !button) return;

    let seconds = 10;

    timer.textContent = seconds;

    const countdown = setInterval(() => {

        seconds--;

        timer.textContent = seconds;

        if (seconds <= 0) {

            clearInterval(countdown);

            timer.classList.add("hidden");

            button.classList.remove("hidden");

            if (page === "step4.html") {

                try {

                    const finalUrl = atob(encodedUrl);

                    button.href = finalUrl;

                } catch {

                    button.removeAttribute("href");
                    button.textContent = "Invalid Link";

                }

            } else {

                button.href = `${nextPages[page]}?url=${encodeURIComponent(encodedUrl)}`;

            }

        }

    }, 1000);

});