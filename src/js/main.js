import i18n from './i18n.js';
import navigation from './navigation.js'

document.addEventListener("DOMContentLoaded", () => {
    const languageForm = document.getElementById("language-switcher");

    i18n.loadLanguage('pt');

    languageForm.addEventListener("change", (event) => {
        const selectedLanguage = event.target.value;
        i18n.loadLanguage(selectedLanguage);
    });
});

//navigate by clicking the contacts button
document.getElementById("contacts-button").addEventListener("click", function () {
    navigation.navigate("contacts.html")
});