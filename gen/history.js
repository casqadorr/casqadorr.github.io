/**
 * History Engine Data Logger & Datagrid Structural Render Modality
 */
const CSQ_History = {
    /**
     * Pull records array ledger allocation from local cluster storage allocation
     * @returns {Array} All stored logs array
     */
    list: function() {
        const collection = CSQ_DB.get(CSQ_DB.KEYS.HISTORY);
        return Array.isArray(collection) ? collection : [];
    },

    /**
     * Inject generated artifact signature bundle into structural storage tracks
     * @param {Object} individualRecordItem 
     */
    append: function(individualRecordItem) {
        const environmentConfiguration = CSQ_Settings.load();
        if (!environmentConfiguration.autoSaveEnabled) return;

        const ledger = this.list();
        ledger.unshift(individualRecordItem); // Track sorting at visual timeline base top
        CSQ_DB.set(CSQ_DB.KEYS.HISTORY, ledger);
    },

    /**
     * Eliminate unique contextual record tracking signature by identity reference identifier
     * @param {string} recordsIdReference 
     */
    deleteRecord: function(recordsIdReference) {
        let entries = this.list();
        entries = entries.filter(item => item.id !== recordsIdReference);
        CSQ_DB.set(CSQ_DB.KEYS.HISTORY, entries);
    },

    /**
     * Total flush purge execution of trace records logs pipeline
     */
    clearAll: function() {
        CSQ_DB.remove(CSQ_DB.KEYS.HISTORY);
    },

    /**
     * Complete operational structural render implementation tracking matrix rows directly matching layout parameters
     */
    renderTable: function() {
        const tableBodyElement = document.getElementById('history-table-body');
        const globalStatCounter = document.getElementById('top-stat-count');
        if (!tableBodyElement) return;

        const dynamicRecordsSet = this.list();
        
        // Synchronize interface status counters
        if (globalStatCounter) {
            globalStatCounter.textContent = dynamicRecordsSet.length;
        }

        if (dynamicRecordsSet.length === 0) {
            tableBodyElement.innerHTML = `
                <tr>
                    <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 40px 0;">
                        لا يوجد أي سجلات مخزنة حالياً في ذاكرة المولد الرقمي.
                    </td>
                </tr>
            `;
            return;
        }

        tableBodyElement.innerHTML = '';
        dynamicRecordsSet.forEach(record => {
            const rowInstance = document.createElement('tr');
            rowInstance.innerHTML = `
                <td>
                    <div style="font-weight: 600;">${record.id}</div>
                    <div style="font-size: 0.75rem; color: var(--text-muted); margin-top: 4px;">${record.timestamp}</div>
                </td>
                <td style="font-weight: 600; color: #ffffff;">${this.escapeHTML(record.title)}</td>
                <td><code style="font-size: 0.8rem; color: var(--industrial-orange);">${this.escapeHTML(record.targetUrl)}</code></td>
                <td><span class="table-badge">${record.encryptionType}</span></td>
                <td>
                    <button class="btn btn-danger btn-table-delete" data-id="${record.id}" style="padding: 6px 12px; font-size: 0.8rem;">حذف</button>
                </td>
            `;
            tableBodyElement.appendChild(rowInstance);
        });
    },

    /**
     * Escape security text structures prevent parsing mutations injection vulnerability vectors
     */
    escapeHTML: function(rawString) {
        return rawString.replace(/&/g, '&amp;')
                         .replace(/</g, '&lt;')
                         .replace(/>/g, '&gt;')
                         .replace(/"/g, '&quot;')
                         .replace(/'/g, '&#039;');
    }
};
