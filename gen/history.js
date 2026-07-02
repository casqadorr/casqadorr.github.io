/* ===========================
   CSQ4S Generator History
=========================== */

const History = {

    render(filter = "") {

        const table = document.getElementById("historyTable");

        table.innerHTML = "";

        const links = DB.getLinks();

        const keyword = filter.toLowerCase();

        const results = links.filter(link =>

            link.fileName.toLowerCase().includes(keyword)

        );

        if (results.length === 0) {

            table.innerHTML = `
                <tr>
                    <td colspan="4">
                        لا توجد بيانات.
                    </td>
                </tr>
            `;

            return;

        }

        results.forEach((link, index) => {

            table.innerHTML += `
                <tr>

                    <td>${link.fileName}</td>

                    <td>${link.date}</td>

                    <td>

                        <button
                            class="button"
                            onclick="History.copy('${link.finalLink}')">

                            نسخ

                        </button>

                    </td>

                    <td>

                        <button
                            class="button"
                            onclick="History.remove(${index})">

                            حذف

                        </button>

                    </td>

                </tr>
            `;

        });

    },

    /* ========================= */

    search() {

        const value = document

            .getElementById("historySearch")

            .value;

        this.render(value);

    },

    /* ========================= */

    remove(index) {

        if (!confirm("حذف الرابط؟")) {

            return;

        }

        DB.deleteLink(index);

        this.render();

    },

    /* ========================= */

    copy(text) {

        navigator.clipboard.writeText(text);

        alert("تم النسخ.");

    },

    /* ========================= */

    init() {

        this.render();

        document

            .getElementById("historySearch")

            .addEventListener(

                "input",

                () => this.search()

            );

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => History.init()

);