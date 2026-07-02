/**
 * Configuration & Environment State Subsystem Manager
 */
const CSQ_Settings = {
    // Default structural schema options
    defaults: {
        baseDomain: 'https://csq4s.skip.io/gen/',
        expirationHours: 24,
        autoSaveEnabled: true
    },

    /**
     * Fetch active environment variable setup configuration context
     * @returns {Object}
     */
    load: function() {
        let activeConfig = CSQ_DB.get(CSQ_DB.KEYS.SETTINGS);
        if (!activeConfig) {
            activeConfig = { ...this.defaults };
            CSQ_DB.set(CSQ_DB.KEYS.SETTINGS, activeConfig);
        }
        return activeConfig;
    },

    /**
     * Replace, modify, and commit custom environment profiles
     * @param {Object} updatedValues 
     * @returns {Object} Fresh updated parameters
     */
    save: function(updatedValues) {
        const structuralPackage = {
            baseDomain: updatedValues.baseDomain || this.defaults.baseDomain,
            expirationHours: parseInt(updatedValues.expirationHours, 10) || this.defaults.expirationHours,
            autoSaveEnabled: updatedValues.autoSaveEnabled !== undefined ? updatedValues.autoSaveEnabled : this.defaults.autoSaveEnabled
        };
        CSQ_DB.set(CSQ_DB.KEYS.SETTINGS, structuralPackage);
        return structuralPackage;
    },

    /**
     * Synchronize and parse current configuration profiles to operational DOM fields
     */
    hydrateForm: function() {
        const values = this.load();
        const domainField = document.getElementById('set-domain');
        const expiryField = document.getElementById('set-expiration');
        const autoSaveField = document.getElementById('set-autosave');

        if (domainField) domainField.value = values.baseDomain;
        if (expiryField) expiryField.value = values.expirationHours;
        if (autoSaveField) autoSaveField.checked = values.autoSaveEnabled;
    }
};
