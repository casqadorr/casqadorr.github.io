const fileName = document.getElementById("fileName");
const originalUrl = document.getElementById("originalUrl");

const generateBtn = document.getElementById("generateBtn");

const finalLink = document.getElementById("finalLink");
const bloggerButton = document.getElementById("bloggerButton");

const copyLinkBtn = document.getElementById("copyLinkBtn");
const copyButtonBtn = document.getElementById("copyButtonBtn");

const historyContainer = document.getElementById("historyContainer");

const searchBox = document.getElementById("searchBox");

const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const clearBtn = document.getElementById("clearBtn");

function generateLink() {

    const name = fileName.value.trim();
    const url = originalUrl.value.trim();

    if (!name || !url) {

        alert("أكمل جميع الحقول");

        return;

    }

    const encoded = btoa(url);

    const link =
        "https://casqadorr.github.io/step1.html?to=" + encoded;

    finalLink.value = link;

    bloggerButton.value =
`<a href="${link}" target="_blank">تحميل ${name}</a>`;

    addHistory({

        name,

        url,

        link,

        date: new Date().toLocaleString()

    });

    renderHistory();

}

function renderHistory() {

    const history = getHistory();

    const keyword = searchBox.value.toLowerCase();

    historyContainer.innerHTML = "";

    history.forEach((item, index) => {

        if (
            !item.name.toLowerCase().includes(keyword) &&
            !item.url.toLowerCase().includes(keyword)
        ) return;

        historyContainer.innerHTML += `

        <div class="historyItem">

            <h3>${item.name}</h3>

            <p>${item.date}</p>

            <p>${item.link}</p>

            <button onclick="deleteItem(${index})">

                حذف

            </button>

        </div>

        `;

    });

}

function deleteItem(index) {

    deleteHistory(index);

    renderHistory();

}

generateBtn.onclick = generateLink;

copyLinkBtn.onclick = () => {

    navigator.clipboard.writeText(finalLink.value);

    alert("تم نسخ الرابط");

};

copyButtonBtn.onclick = () => {

    navigator.clipboard.writeText(bloggerButton.value);

    alert("تم نسخ كود بلوجر");

};

searchBox.oninput = renderHistory;

exportBtn.onclick = exportHistory;

importBtn.onclick = () => {

    const input = document.createElement("input");

    input.type = "file";

    input.accept = ".json";

    input.onchange = e => {

        importHistory(e.target.files[0]);

    };

    input.click();

};

clearBtn.onclick = () => {

    if (confirm("حذف جميع السجل؟")) {

        clearHistory();

        renderHistory();

    }

};

renderHistory();