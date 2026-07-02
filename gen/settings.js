/* ===========================
   CSQ4S Generator Settings
=========================== */

const Settings = {

    load() {

        const settings = DB.getSettings();

        document.getElementById("siteUrl").value = settings.siteUrl;

        document.getElementById("steps").value = settings.steps;

        document.getElementById("timer").value = settings.timer;

    },

    save() {

        const settings = {

            siteUrl: document.getElementById("siteUrl").value.trim(),

            steps: parseInt(

                document.getElementById("steps").value

            ) || 3,

            timer: parseInt(

                document.getElementById("timer").value

            ) || 10

        };

        DB.saveSettings(settings);

        alert("تم حفظ الإعدادات.");

    },

    init() {

        this.load();

        document

            .getElementById("saveSettings")

            .addEventListener(

                "click",

                () => this.save()

            );

    }

};

document.addEventListener(

    "DOMContentLoaded",

    () => Settings.init()

);