import i18n from './i18n.js';
import navigation from './navigation.js';

document.addEventListener("DOMContentLoaded", () => {
    const iframeDocument = document.getElementById("intern-navigation");

    

    iframeDocument.addEventListener('load', () => {
        const iframe = document.querySelector('iframe');
        const iframeWidth = iframe.offsetWidth;

        if (iframeWidth >= 1000) {
            iframe.contentDocument.body.style.fontSize = "1.5em";
        }
        const languageForm = iframeDocument.contentWindow.document.getElementById("language-switcher");
        const savedLanguage = sessionStorage.getItem("checkboxState") || "pt";

        i18n.loadLanguage(savedLanguage);
        i18n.translatePage();

        languageForm.addEventListener("change", (event) => {
            const selectedLanguage = event.target.value;
            sessionStorage.setItem("checkboxState", selectedLanguage);
            i18n.loadLanguage(selectedLanguage);
        });
    });

    //Download resume
    document.getElementById("resume-button").addEventListener("click", function() {
        const savedLanguage = sessionStorage.getItem("checkboxState") || "pt";
        let resumeUrl = "../assets/documents/resume_pt.pdf"
        switch(savedLanguage) {
            case "pt":
                resumeUrl = "../assets/documents/resume_pt.pdf";
                break;
            case "en":
                resumeUrl = "../assets/documents/resume_en.pdf";
                break;
            case "es":
                resumeUrl = "../assets/documents/resume_es.pdf"
                break; 
        }
        const a = document.createElement("a");
        a.href = resumeUrl;
        a.download = "Arthur_Rios_Ribeiro_Resume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });

    //navigate to contacts page
    document.getElementById("contacts-button").addEventListener("click", function () {
        navigation.navigate("src/contacts.html")
    });
});




