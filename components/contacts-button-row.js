class ContactsButtonRow extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="contacts-button-row">
            <a href="https://github.com/arthurriosprogramador?tab=repositories" target="_blank">
                <i class="fab fa-github"></i>
            </a>
            <a href="https://wa.me/5575983589427" target="_blank">
                <i class="fab fa-whatsapp"></i>
            </a>
            <a href="https://www.linkedin.com/in/arthur-rios-ribeiro-5462931b5/" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
        `
    }
}

customElements.define("contacts-button-row", ContactsButtonRow);