import i18n from './i18n.js';

export function translate() {
    const languageForm = document.getElementById("language-switcher");

    const savedLanguage = sessionStorage.getItem("checkboxState");
    if(savedLanguage != null) {
        document.getElementById(`${savedLanguage}`).click()
    } else {
        document.getElementById("pt").click();
    }
    i18n.loadLanguage(savedLanguage || "pt")

    languageForm.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        sessionStorage.setItem("checkboxState", selectedLanguage);
        i18n.loadLanguage(selectedLanguage);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    translate()
});