/**
 * Main Application Orchestrator Framework Interface Core Logic Controller Execution
 */
document.addEventListener('DOMContentLoaded', () => {
    // Primary Module Subsystems Setup Initializer Boot Routine
    CSQ_AppCore.initialize();
});

const CSQ_AppCore = {
    /**
     * Application boot operations execution loop
     */
    initialize: function() {
        this.registerLayoutNavigation();
        this.registerGeneratorExecutionPipeline();
        this.registerDynamicClipboardUtilities();
        this.registerStructuralDataMigrationTriggers();
        
        // Warmup persistent storage data tracking contexts and render components lists
        CSQ_Settings.hydrateForm();
        CSQ_History.renderTable();
    },

    /**
     * Multi-View tab navigation interface layout toggles register matrix
     */
    registerLayoutNavigation: function() {
        const interfaceNavButtons = document.querySelectorAll('.nav-btn');
        const structuralLayoutSections = document.querySelectorAll('.content-section');

        interfaceNavButtons.forEach(buttonElement => {
            buttonElement.addEventListener('click', () => {
                const requestedTargetSectionId = buttonElement.getAttribute('data-target');

                interfaceNavButtons.forEach(btn => btn.classList.remove('active'));
                structuralLayoutSections.forEach(sec => sec.classList.remove('active'));

                buttonElement.classList.add('active');
                const targetViewDomElement = document.getElementById(requestedTargetSectionId);
                if (targetViewDomElement) {
                    targetViewDomElement.classList.add('active');
                }

                // If navigating to tracking logs viewport ledger execution re-render context list state dynamically
                if (requestedTargetSectionId === 'history-sec') {
                    CSQ_History.renderTable();
                }
            });
        });
    },

    /**
     * Processing pipeline monitoring operations tracking link creation matrix
     */
    registerGeneratorExecutionPipeline: function() {
        const interactiveGenerationForm = document.getElementById('generator-form');
        const outputResultPanelContainer = document.getElementById('output-panel');

        if (!interactiveGenerationForm) return;

        interactiveGenerationForm.addEventListener('submit', (formEvent) => {
            formEvent.preventDefault();

            // Intercept operational arguments parameters mapping input node fields elements
            const packetTitleValue = document.getElementById('gen-title').value.trim();
            const targetRedirectUrl = document.getElementById('gen-url').value.trim();
            const cryptoStrategyMechanism = document.getElementById('gen-type').value;
            const operationalPriorityRank = document.getElementById('gen-priority').value;
            const compressionStreamChecked = document.getElementById('gen-compress').checked;

            // Generate structured mathematical properties elements identifiers
            const syntheticGeneratedUuid = this.generateDeterministicUuid();
            const activeConfigurationProfile = CSQ_Settings.load();

            // Run payload string encoder mechanics simulation cycle mapping real values parameters
            const obfuscatedPayloadToken = btoa(encodeURIComponent(`url=${targetRedirectUrl}&enc=${cryptoStrategyMechanism}&priority=${operationalPriorityRank}&gzip=${compressionStreamChecked}&nonce=${Date.now()}`)).replace(/=/g, '');
            const optimizedResultantUrl = `${activeConfigurationProfile.baseDomain}skip.html?token=${obfuscatedPayloadToken}&id=${syntheticGeneratedUuid}`;

            // Build atomic storage entity structure item
            const structuralHistoryLogInstance = {
                id: syntheticGeneratedUuid,
                timestamp: new Date().toLocaleString('ar-EG'),
                title: packetTitleValue,
                targetUrl: targetRedirectUrl,
                encryptionType: cryptoStrategyMechanism,
                generatedUrl: optimizedResultantUrl,
                payloadBlobString: obfuscatedPayloadToken
            };

            // Commit transaction data logs records parameters elements entries
            CSQ_History.append(structuralHistoryLogInstance);

            // Hydrate generation interface output layout fields blocks data nodes
            document.getElementById('out-key').value = syntheticGeneratedUuid;
            document.getElementById('out-result').value = optimizedResultantUrl;
            document.getElementById('out-payload').value = JSON.stringify(structuralHistoryLogInstance, null, 2);

            // Display resulting output block panels interface container space layout
            if (outputResultPanelContainer) {
                outputResultPanelContainer.classList.remove('hidden-element');
                outputResultPanelContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            this.triggerToastFeedback("تمت معالجة البيانات وتوليد الحزمة بنجاح تام وتم الحفظ.", "success");
            
            // Sync status data counters numbers instantly inside panel
            CSQ_History.renderTable();
        });
    },

    /**
     * High Performance Clipboard Data Serialization Handlers Mapping UI Triggers
     */
    registerDynamicClipboardUtilities: function() {
        document.body.addEventListener('click', (clickContextEvent) => {
            const explicitClipboardCopyTriggerTarget = clickContextEvent.target.closest('.btn-copy');
            if (!explicitClipboardCopyTriggerTarget) return;

            const targetSourceNodeId = explicitClipboardCopyTriggerTarget.getAttribute('data-clipboard');
            const dataInputSourceFieldElement = document.getElementById(targetSourceNodeId);

            if (dataInputSourceFieldElement) {
                dataInputSourceFieldElement.select();
                dataInputSourceFieldElement.setSelectionRange(0, 99999); // Compatibility check wrapper layer setup mobile tracking vectors

                try {
                    navigator.clipboard.writeText(dataInputSourceFieldElement.value);
                    this.triggerToastFeedback("تم نسخ المحتوى بنجاح إلى الحافظة الجهاز.", "success");
                } catch (clipboardExceptionError) {
                    // Fallback tracking context mechanism parameters execution implementation legacy modes
                    document.execCommand('copy');
                    this.triggerToastFeedback("تم نسخ المحتوى بنجاح إلى الحافظة الجهاز.", "success");
                }
            }
        });

        // Interface event handlers tracking programmatic row level elimination actions
        document.body.addEventListener('click', (tableClickEvent) => {
            const trackingButtonTarget = tableClickEvent.target.closest('.btn-table-delete');
            if (!trackingButtonTarget) return;

            const entryRecordUidReference = trackingButtonTarget.getAttribute('data-id');
            if (entryRecordUidReference) {
                CSQ_History.deleteRecord(entryRecordUidReference);
                CSQ_History.renderTable();
                this.triggerToastFeedback("تم إقصاء وحذف السجل المستهدف بنجاح.", "danger");
            }
        });

        // Direct database clearing sequence operation interface linkage setup action
        const configurationPurgeTriggerButton = document.getElementById('btn-clear-history');
        if (configurationPurgeTriggerButton) {
            configurationPurgeTriggerButton.addEventListener('click', () => {
                if (confirm("هل أنت متأكد تماماً من رغبتك في تصفية ومسح سجل الحزم بالكامل؟ لا يمكن التراجع عن هذا الإجراء.")) {
                    CSQ_History.clearAll();
                    CSQ_History.renderTable();
                    this.triggerToastFeedback("تمت تصفية ومسح قاعدة السجلات بالكامل.", "danger");
                }
            });
        }

        // Direct System Environment Variable Mutations Saving Application Form Pipeline
        const configurationFormInterfaceElement = document.getElementById('settings-form');
        if (configurationFormInterfaceElement) {
            configurationFormInterfaceElement.addEventListener('submit', (settingsSubmitEvent) => {
                settingsSubmitEvent.preventDefault();
                
                const updatedParametersPayload = {
                    baseDomain: document.getElementById('set-domain').value.trim(),
                    expirationHours: document.getElementById('set-expiration').value,
                    autoSaveEnabled: document.getElementById('set-autosave').checked
                };

                CSQ_Settings.save(updatedParametersPayload);
                this.triggerToastFeedback("تم تحديث وحفظ تفضيلات وإعدادات النظام الحالية.", "success");
            });
        }
    },

    /**
     * Interconnect systems file IO events and stream structural profiles parsing updates operations triggers
     */
    registerStructuralDataMigrationTriggers: function() {
        const activeSystemExportExecutionButton = document.getElementById('btn-export-trigger');
        const processingFileInputDomField = document.getElementById('import-file-input');
        const customUploadLabelTextElement = document.getElementById('file-label-text');
        const contextImportExecutionTriggerButton = document.getElementById('btn-import-trigger');

        if (activeSystemExportExecutionButton) {
            activeSystemExportExecutionButton.addEventListener('click', () => {
                const operationalExportStatusResult = CSQ_Export.executeBackupDownload();
                if (operationalExportStatusResult) {
                    this.triggerToastFeedback("تم إنتاج وتصدير ملف التكوين والسجلات بنجاح.", "success");
                } else {
                    this.triggerToastFeedback("فشلت عملية معالجة تصدير حزمة البيانات.", "danger");
                }
            });
        }

        if (processingFileInputDomField && customUploadLabelTextElement) {
            processingFileInputDomField.addEventListener('change', () => {
                if (processingFileInputDomField.files.length > 0) {
                    const trackingFileObjectInstance = processingFileInputDomField.files[0];
                    customUploadLabelTextElement.innerHTML = `<span class="upload-icon" style="color: var(--industrial-green);">📄</span> تم اختيار ملف البيانات: <br><strong style="color: #ffffff;">${trackingFileObjectInstance.name}</strong>`;
                    this.triggerToastFeedback("تم تحميل ملف الدمج المختار إلى الذاكرة المؤقتة جاهز للمعالجة.", "success");
                }
            });
        }

        if (contextImportExecutionTriggerButton) {
            contextImportExecutionTriggerButton.addEventListener('click', () => {
                if (!processingFileInputDomField || processingFileInputDomField.files.length === 0) {
                    this.triggerToastFeedback("يرجى اختيار ملف امتداد JSON الصالح للاستيراد أولاً.", "danger");
                    return;
                }

                const transactionReaderStream = new FileReader();
                transactionReaderStream.onload = (fileBufferReadEvent) => {
                    try {
                        const parsedDataBlockResult = JSON.parse(fileBufferReadEvent.target.result);
                        const operationsIngestionCommitOutcome = CSQ_Import.processIncomingJsonPayload(parsedDataBlockResult);
                        
                        if (operationsIngestionCommitOutcome) {
                            this.triggerToastFeedback("تم استيراد ودمج البيانات والتفضيلات بنجاح وتحديث النظام.", "success");
                            // Synchronize current local client UI components variables matching state updates properties data values
                            CSQ_Settings.hydrateForm();
                            CSQ_History.renderTable();
                        } else {
                            this.triggerToastFeedback("فشل دمج الملف، بنية المعطيات أو رمز التوقيع غير متطابق تماماً.", "danger");
                        }
                    } catch (parsingExceptionError) {
                        this.triggerToastFeedback("فشل قراءة الملف المرفوع، تأكد من كونه ملف مخرجات JSON سليم وصحيح هندسياً.", "danger");
                    }
                };
                transactionReaderStream.readAsText(processingFileInputDomField.files[0]);
            });
        }
    },

    /**
     * Micro system helper framework displaying temporary feedback alerts to user interaction points
     * @param {string} dynamicDisplayMessageText 
     * @param {string} visualStatusVariantType 
     */
    triggerToastFeedback: function(dynamicDisplayMessageText, visualStatusVariantType = 'success') {
        const toastNotificationsPanelContainerNode = document.getElementById('toast-container');
        if (!toastNotificationsPanelContainerNode) return;

        const liveFeedbackToastNode = document.createElement('div');
        liveFeedbackToastNode.className = `toast ${visualStatusVariantType}`;
        
        let visualDecorationStatusIcon = '⚙️';
        if (visualStatusVariantType === 'success') visualDecorationStatusIcon = '✓';
        if (visualStatusVariantType === 'danger') visualDecorationStatusIcon = '⚠';

        liveFeedbackToastNode.innerHTML = `<span>${visualDecorationStatusIcon}</span> <div>${dynamicDisplayMessageText}</div>`;
        toastNotificationsPanelContainerNode.appendChild(liveFeedbackToastNode);

        // Immediate automation disposal lifecycle cycle loop trigger execution context management elements rules
        setTimeout(() => {
            liveFeedbackToastNode.style.opacity = '0';
            liveFeedbackToastNode.style.transform = 'translateY(10px)';
            liveFeedbackToastNode.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                if (liveFeedbackToastNode.parentNode === toastNotificationsPanelContainerNode) {
                    toastNotificationsPanelContainerNode.removeChild(liveFeedbackToastNode);
                }
            }, 300);
        }, 4000);
    },

    /**
     * Programmatic hardware high-performance pseudorandom character sequence generator mechanism matching unique pattern models
     * @returns {string} Fully valid distinct string identification tag sequence
     */
    generateDeterministicUuid: function() {
        const alphabetCharsetTemplate = 'CSQ4S9876543210ABCDEFGHIJKLMOPQRSTUVWXYZ';
        let resultantBlockSequence = 'C';
        for (let characterIndexPosition = 0; characterIndexPosition < 7; characterIndexPosition++) {
            const randomDerivationPointerIndex = Math.floor(Math.random() * alphabetCharsetTemplate.length);
            resultantBlockSequence += alphabetCharsetTemplate.charAt(randomDerivationPointerIndex);
        }
        return resultantBlockSequence;
    }
};
