import navigation from '../js/navigation.js'

class MainButtonGrid extends HTMLElement {

    connectedCallback() {
        const typeValue = this.getAttribute("type");

        const style = `
        <style>
                    .button-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 24px;
                    }
                        .main-button {
                            margin-top: 10px;
                            padding: 10px;
                            background-color: var(--dark-blue);
                            color: white;
                            border: none;
                        }

                    .main-button:hover {
                        background-color: var(--button-hovered);
                        cursor: pointer;
                    }


                    .light {
                        background-color: var(--medium-blue);
                        border: 1px solid white;
                        margin-top: 24px;
                    }
                </style>
        `;

        switch (typeValue) {
            case "about-me":
                this.innerHTML = `
                ${style}    
            <div class="button-grid">
                <button class="main-button light" id="home-button">Home</button>
                <button class="main-button light" data-i18n="services" id="services-button"></button>
                <button class="main-button light" data-i18n="portfolio" id="portfolio-button"></button>
            </div>
            `
                break;
            case "services":
                this.innerHTML = `
                ${style}
            <div class="button-grid">
            <button class="main-button light" id="home-button">Home</button>
                <button class="main-button light" data-i18n="aboutMeButton" id="about-me-button"></button>
                <button class="main-button light" data-i18n="portfolio" id="portfolio-button"></button>
            </div>
            `
                break;
            case "portfolio":
                this.innerHTML = `
                ${style}
            <div class="button-grid">
            <button class="main-button light" id="home-button">Home</button>
                <button class="main-button light" data-i18n="aboutMeButton" id="about-me-button"></button>
                <button class="main-button light" data-i18n="services" id="services-button"></button>
            </div>
            `
                break;
            default:
                this.innerHTML = `
                ${style}
            <div class="button-grid">
                <button class="main-button light" data-i18n="aboutMeButton" id="about-me-button"></button>
                <button class="main-button light" data-i18n="services" id="services-button"></button>
                <button class="main-button light" data-i18n="portfolio" id="portfolio-button"></button>
            </div>
            `
        }
        this.addEventByType(typeValue);
        
    }

    navigateTo(page) {
        navigation.navigate(page);
    }

    addEventByType(type) {
        switch(type) {
            case "about-me":
                this.querySelector("#home-button").addEventListener("click", () => this.navigateTo('/src/home.html'));
                this.querySelector("#services-button").addEventListener("click", () => this.navigateTo('/src/services.html'));
                this.querySelector("#portfolio-button").addEventListener("click", () => this.navigateTo('/src/portfolio.html'));
            break;
            case "services":
                this.querySelector("#home-button").addEventListener("click", () => this.navigateTo('/src/home.html'));
                this.querySelector("#about-me-button").addEventListener("click", () => this.navigateTo('/src/about-me.html'));
                this.querySelector("#portfolio-button").addEventListener("click", () => this.navigateTo('/src/portfolio.html'));
            break;
            case "portfolio":
                this.querySelector("#home-button").addEventListener("click", () => this.navigateTo('/src/home.html'));
                this.querySelector("#about-me-button").addEventListener("click", () => this.navigateTo('/src/about-me.html'));
                this.querySelector("#services-button").addEventListener("click", () => this.navigateTo('/src/services.html'));
            default: 
                this.querySelector("#about-me-button").addEventListener("click", () => this.navigateTo('/src/about-me.html'));
                this.querySelector("#services-button").addEventListener("click", () => this.navigateTo('/src/services.html'));
                this.querySelector("#portfolio-button").addEventListener("click", () => this.navigateTo('/src/portfolio.html'));
        }
    }
}

customElements.define("main-button-grid", MainButtonGrid);