/**
 * Local Data Storage Access Layer (Database Abstract Model)
 * Pure production-ready encapsulation layer utilizing LocalStorage standard.
 */
const CSQ_DB = {
    // Standard keys mapping configurations
    KEYS: {
        HISTORY: 'csq4s_history_records',
        SETTINGS: 'csq4s_system_configuration'
    },

    /**
     * Read parsed structured data from client storage context
     * @param {string} key 
     * @returns {Array|Object|null}
     */
    get: function(key) {
        try {
            const compiledData = localStorage.getItem(key);
            return compiledData ? JSON.parse(compiledData) : null;
        } catch (error) {
            console.error("Database Extraction Core Error Exception:", error);
            return null;
        }
    },

    /**
     * Commit arbitrary stringified data into targeted storage namespace
     * @param {string} key 
     * @param {Object|Array} objectData 
     * @returns {boolean}
     */
    set: function(key, objectData) {
        try {
            localStorage.setItem(key, JSON.stringify(objectData));
            return true;
        } catch (error) {
            console.error("Database Preservation Mutation Error Exception:", error);
            return false;
        }
    },

    /**
     * Complete purging pipeline tracking records
     * @param {string} key 
     */
    remove: function(key) {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error("Database Key Deletion Process Failure Exception:", error);
            return false;
        }
    }
};
