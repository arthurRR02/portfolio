class LanguageSwitcher extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <form id="language-switcher">
            <p>
                <input type="radio" id="en" name="options" value="en" class="language-button">
                <label for="en">EN</label>/<input type="radio" id="pt" name="options" value="pt" class="language-button">
                <label for="pt">PT</label>/<input type="radio" id="es" name="options" value="es" class="language-button">
                <label for="es">ES</label>
            </p>
        </form>
        `;
    }
}

customElements.define("language-switcher", LanguageSwitcher);