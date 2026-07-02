/* ===========================
   CSQ4S Generator Import
=========================== */

const Import = {

    selectFile() {

        const input = document.createElement("input");

        input.type = "file";

        input.accept = ".json";

        input.addEventListener(

            "change",

            (event) => this.readFile(event)

        );

        input.click();

    },

    readFile(event) {

        const file = event.target.files[0];

        if (!file) {

            return;

        }

        const reader = new FileReader();

        reader.onload = (e) => {

            try {

                const data = JSON.parse(e.target.result);

                if (!Array.isArray(data.links)) {

                    throw new Error();

                }

                DB.saveLinks(data.links);

                if (data.settings) {

                    DB.saveSettings(data.settings);

                }

                if (typeof History !== "undefined") {

                    History.render();

                }

                if (typeof Settings !== "undefined") {

                    Settings.load();

                }

                alert("تم استيراد البيانات بنجاح.");

            }

            catch {

                alert("ملف غير صالح.");

            }

        };

        reader.readAsText(file);

    },

    init() {

        document

            .getElementById("importData")

            .addEventListener(

                "click",

                () => this.selectFile()

            );

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => Import.init()

);