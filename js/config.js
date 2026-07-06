/*
 * ============================================
 * CSQ4S Configuration
 * Version: 1.0
 * ============================================
 */

const CSQ4S = {

    // اسم المشروع
    PROJECT_NAME: "CSQ4S",

    // عدد صفحات التخطي
    TOTAL_STEPS: 4,

    // مدة العداد بالثواني
    TIMER_SECONDS: 10,

    // عدد الإعلانات
    ADS_COUNT: 25,

    // مجلد الإعلانات
    ADS_PATH: "ads",

    // استدعاء الملف الخارجي
    POP_URL: "/pop",

    // نص حقوق النشر
    COPYRIGHT: "© 2026 CSQ4S. All Rights Reserved.",

    // ملف الروابط
    LINKS_DATABASE: "data/links.json",

    // ملف الإعدادات
    SETTINGS_DATABASE: "data/settings.json",

    // انتقال بين الصفحات
    NEXT_PAGE(currentStep) {

        if (currentStep >= this.TOTAL_STEPS) {
            return null;
        }

        return `${currentStep + 1}.html`;

    }

};