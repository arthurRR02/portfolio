import PortfolioItem from "./models/portfolio-item.js";

const elementIndex = parseInt(sessionStorage.getItem("elementIndex"));
const portfolioItems = PortfolioItem.getPortfolioItems();

document.getElementById("portfolio-items-images").innerHTML = `
    <div class="portfolio-grid-image">
        <picture class="wide-image">
            <source media="(min-width: 1600px)" srcset="../assets/individuar_site.png">
            <source media="(min-width: 1300px)" srcset="../assets/individuar_site_md.png">
            <source media="(min-width: 800px)" srcset="../assets/individuar_site_sm.png">
            <img src="../assets/individuar_site_sm.png" alt="individuar-site" />
        </picture>
        <picture>
            <source media="(min-width: 1600px)" srcset="../assets/elso_site.png">
            <source media="(min-width: 1300px)" srcset="../assets/elso_site_md.png">
            <source media="(min-width: 800px)" srcset="../assets/elso_site_sm.png">
            <img src="../assets/elso_site_sm.png" alt="elso-site" />
        </picture>
    </div>
`;

let featuresHtml = ``;

for (let i = 0; i < portfolioItems[elementIndex].featureTitles.length; i++) {
    featuresHtml += `
        <div class="feature-container">
            <p><span data-i18n="${portfolioItems[elementIndex].featureTitles[i]}" class="feature-title"></span>
                <span data-i18n="${portfolioItems[elementIndex].featureDescriptions[i]}"></span></p>
        </div>
    `;
}

document.getElementById("portfolio-info").innerHTML = `
    <p data-i18n="${portfolioItems[elementIndex].description}" id="feature-description"></p>
    <h3 data-i18n="portfolioMainFunctionalities"></h3>
    <div class="grid-features">
        ${featuresHtml}
    </div>
`;

//back navigation
document.querySelector(".back-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
    }, 300);
});