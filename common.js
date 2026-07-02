// =============================
// CSQ4S Common Functions
// =============================

const params = new URLSearchParams(window.location.search);

const encoded = params.get("to");

function isValidLink() {

    return encoded !== null && encoded !== "";

}

function next(page) {

    window.location.href = page + "?to=" + encodeURIComponent(encoded);

}

function decodeLink() {

    try {

        return atob(encoded);

    }

    catch {

        return null;

    }

}

function startTimer(seconds, callback) {

    const timer = document.getElementById("timer");

    let time = seconds;

    timer.innerText = time;

    const interval = setInterval(() => {

        time--;

        timer.innerText = time;

        if (time <= 0) {

            clearInterval(interval);

            callback();

        }

    }, 1000);

}