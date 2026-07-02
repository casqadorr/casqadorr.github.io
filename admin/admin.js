// ==============================
// Casqadorr Link Manager
// Part 1
// ==============================

const STORAGE_KEY = "CASQADORR_LINKS";

const BASE_URL = "https://casqadorr.github.io/skip/step1.html?id=";

let links = [];

const downloadUrl = document.getElementById("downloadUrl");
const generatedLink = document.getElementById("generatedLink");

const generateBtn = document.getElementById("generateBtn");
const copyBtn = document.getElementById("copyBtn");

const exportBtn = document.getElementById("exportBtn");
const importBtn = document.getElementById("importBtn");
const clearBtn = document.getElementById("clearBtn");

const jsonFile = document.getElementById("jsonFile");

const tableBody = document.getElementById("tableBody");

const searchInput = document.getElementById("searchInput");

loadLinks();

renderTable();

generateBtn.addEventListener("click", generateLink);

copyBtn.addEventListener("click", () => {

    if (!generatedLink.value) return;

    navigator.clipboard.writeText(generatedLink.value);

    copyBtn.innerText = "Copied";

    setTimeout(() => {

        copyBtn.innerText = "Copy Link";

    },1500);

});

function loadLinks(){

    const data = localStorage.getItem(STORAGE_KEY);

    if(data){

        links = JSON.parse(data);

    }else{

        links=[];

    }

}

function saveLinks(){

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(links)

    );

}

function randomID(length=8){

    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let id="";

    do{

        id="";

        for(let i=0;i<length;i++){

            id+=chars.charAt(

                Math.floor(

                    Math.random()*chars.length

                )

            );

        }

    }while(

        links.some(

            item=>item.id===id

        )

    );

    return id;

}

function generateLink(){

    const url=downloadUrl.value.trim();

    if(url===""){

        alert("Enter Download URL");

        return;

    }

    const id=randomID(8);

    const shortLink=BASE_URL+id;

    const obj={

        id:id,

        url:url,

        short:shortLink,

        date:new Date().toLocaleString()

    };

    links.unshift(obj);

    saveLinks();

    generatedLink.value=shortLink;

    downloadUrl.value="";

    renderTable();

}
// ==============================
// Part 2
// ==============================

function renderTable(filter = "") {

    tableBody.innerHTML = "";

    let data = links;

    if (filter !== "") {

        const q = filter.toLowerCase();

        data = links.filter(item =>
            item.id.toLowerCase().includes(q) ||
            item.url.toLowerCase().includes(q) ||
            item.short.toLowerCase().includes(q)
        );

    }

    if (data.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="5" style="text-align:center;padding:25px;">
                    No Links Found
                </td>
            </tr>
        `;

        return;

    }

    data.forEach(item => {

        const tr = document.createElement("tr");

        tr.innerHTML = `

            <td>${item.id}</td>

            <td>${item.url}</td>

            <td>${item.short}</td>

            <td>${item.date}</td>

            <td>

                <button
                    class="actionBtn copy"
                    onclick="copyRow('${item.short}')">

                    Copy

                </button>

                <button
                    class="actionBtn delete"
                    onclick="deleteRow('${item.id}')">

                    Delete

                </button>

            </td>

        `;

        tableBody.appendChild(tr);

    });

}

searchInput.addEventListener("input", function () {

    renderTable(this.value);

});

function copyRow(link) {

    navigator.clipboard.writeText(link);

    alert("Copied");

}

function deleteRow(id) {

    if (!confirm("Delete this link?")) return;

    links = links.filter(item => item.id !== id);

    saveLinks();

    renderTable(searchInput.value);

}