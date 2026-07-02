/* ===========================
   CSQ4S Generator Export
=========================== */

const Export = {

    download() {

        const data = {

            version: "1.0",

            exportDate: new Date().toISOString(),

            settings: DB.getSettings(),

            links: DB.getLinks()

        };

        const json = JSON.stringify(

            data,

            null,

            4

        );

        const blob = new Blob(

            [json],

            {

                type: "application/json"

            }

        );

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "csq4s-backup.json";

        a.click();

        URL.revokeObjectURL(url);

    },

    init() {

        document

            .getElementById("exportData")

            .addEventListener(

                "click",

                () => this.download()

            );

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => Export.init()

);