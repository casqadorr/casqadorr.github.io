/*
=========================================
CSQ4S Timer
Version 1.0
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    const timer = document.getElementById("timer");
    const button = document.getElementById("continueButton");

    if (!timer || !button) return;

    let seconds = CSQ4S.TIMER_SECONDS;

    button.style.display = "none";

    timer.textContent = seconds;

    const interval = setInterval(() => {

        seconds--;

        if (seconds > 0) {

            timer.textContent = seconds;

            return;

        }

        clearInterval(interval);

        timer.style.display = "none";

        button.style.display = "block";

        button.classList.add("fade-in");

    }, 1000);

});