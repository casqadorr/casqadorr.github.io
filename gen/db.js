/* ===========================
   CSQ4S Generator Database
=========================== */

const DB = {

    storageKey: "csq4s_links",

    settingsKey: "csq4s_settings",

    /* ========================= */

    init() {

        if (!localStorage.getItem(this.storageKey)) {

            localStorage.setItem(this.storageKey, JSON.stringify([]));

        }

        if (!localStorage.getItem(this.settingsKey)) {

            localStorage.setItem(this.settingsKey, JSON.stringify({

                siteUrl: "",

                steps: 3,

                timer: 10

            }));

        }

    },

    /* ========================= */

    getLinks() {

        return JSON.parse(

            localStorage.getItem(this.storageKey)

        ) || [];

    },

    /* ========================= */

    saveLinks(data) {

        localStorage.setItem(

            this.storageKey,

            JSON.stringify(data)

        );

    },

    /* ========================= */

    addLink(link) {

        const links = this.getLinks();

        links.unshift(link);

        this.saveLinks(links);

    },

    /* ========================= */

    updateLink(index, newData) {

        const links = this.getLinks();

        links[index] = newData;

        this.saveLinks(links);

    },

    /* ========================= */

    deleteLink(index) {

        const links = this.getLinks();

        links.splice(index, 1);

        this.saveLinks(links);

    },

    /* ========================= */

    clearLinks() {

        this.saveLinks([]);

    },

    /* ========================= */

    getSettings() {

        return JSON.parse(

            localStorage.getItem(this.settingsKey)

        );

    },

    /* ========================= */

    saveSettings(settings) {

        localStorage.setItem(

            this.settingsKey,

            JSON.stringify(settings)

        );

    }

};

/* ========================= */

DB.init();