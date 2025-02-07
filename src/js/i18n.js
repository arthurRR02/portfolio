class I18n {
    constructor(defaultLang = "pt") {
        this.lang = defaultLang;
        this.translations = {}
    }

    async loadLanguage(lang) {
        try {
            const response = await fetch(`/src/i18n/${lang}.json`);
            this.translations = await response.json();
            this.lang = lang;
            this.translatePage();
        } catch (error) {
            console.error(`Error loading language file: ${error}`);
        }
    }

    translatePage() {
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            element.innerHTML = this.translations[key] || key;
        });
    }
}

const i18n = new I18n();
export default i18n;