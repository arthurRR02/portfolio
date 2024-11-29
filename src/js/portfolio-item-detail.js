import PortfolioItem from "./models/portfolio-item.js";

const portfolioItems = PortfolioItem.getPortfolioItems();

let imageList = ``;
let dotController = ``;

for(let i = 0; i < portfolioItems.length; i++) {
        imageList += `
        <div class="carousel-slide">
            <picture class="image-grid-item">
                <source media="(min-width: 1600px)" srcset="../assets/${portfolioItems[i].imageName}.png">
                <source media="(min-width: 1300px)" srcset="../assets/${portfolioItems[i].imageName}_md.png">
                <source media="(min-width: 800px)" srcset="../assets/${portfolioItems[i].imageName}_sm.png">
                <img src="../assets/${portfolioItems[i].imageName}_sm.png" alt="${portfolioItems[i].imageName}" />
            </picture>
        </div>
    `;

    if(i === 0) {
        dotController += `
    <div class="dot-indicator selected-indicator"></div>
    `;
    } else {
        dotController += `
    <div class="dot-indicator"></div>
    `;
    }

    
}

document.querySelector(".carousel-track").innerHTML = imageList;

document.querySelector(".carousel-controller").innerHTML = dotController;

document.getElementById("portfolio-info-title").innerHTML = `
    <h2 data-i18n="${portfolioItems[1].madeWithLabel}"></h2>
    <hr>
`;

let featuresHtml = ``;

for (let i = 0; i < portfolioItems[1].featureTitles.length; i++) {
    featuresHtml += `
        <div class="feature-container">
            <p><span data-i18n="${portfolioItems[1].featureTitles[i]}" class="feature-title"></span>
                <span data-i18n="${portfolioItems[1].featureDescriptions[i]}" class="feture-description"></span></p>
        </div>
    `;
}

document.getElementById("portfolio-info").innerHTML = `
    <p data-i18n="${portfolioItems[1].description}" id="feature-description"></p>
    <h3 data-i18n="portfolioMainFunctionalities"></h3>
    <div class="grid-features">
        ${featuresHtml}
    </div>
`;

document.querySelectorAll(".image-grid-item").forEach((element, index) => {
   if(element.classList.contains("wide-image")) {
    element.classList.add("not-clickable");
   } else {
    element.addEventListener("click", function() {
        document.querySelectorAll(".image-grid-item").forEach(el => el.classList.remove("wide-image"));
        element.classList.toggle('animate'); 
        element.classList.add("wide-image");
        sessionStorage.setItem("elementIndex", index);
        updateInformation();
    });
   } 
});

//back navigation
document.querySelector(".back-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
    }, 300);
});