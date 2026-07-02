const STORAGE_KEY = "csq4s_history";

function getHistory() {

    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

}

function saveHistory(history) {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(history)
    );

}

function addHistory(item) {

    const history = getHistory();

    history.unshift(item);

    saveHistory(history);

}

function deleteHistory(index) {

    const history = getHistory();

    history.splice(index, 1);

    saveHistory(history);

}

function clearHistory() {

    localStorage.removeItem(STORAGE_KEY);

}

function exportHistory() {

    const history = JSON.stringify(getHistory(), null, 2);

    const blob = new Blob([history], {
        type: "application/json"
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;

    a.download = "csq4s-history.json";

    a.click();

    URL.revokeObjectURL(url);

}

function importHistory(file) {

    const reader = new FileReader();

    reader.onload = function (e) {

        try {

            const history = JSON.parse(e.target.result);

            saveHistory(history);

            location.reload();

        }

        catch {

            alert("ملف JSON غير صالح");

        }

    };

    reader.readAsText(file);

}