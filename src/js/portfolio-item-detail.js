import PortfolioItem from "./models/portfolio-item.js";

const portfolioItems = PortfolioItem.getPortfolioItems();

function updateInformation() {
    const elementIndex = parseInt(sessionStorage.getItem("elementIndex"));

    let imageList = ``;

for(let i = 0; i < portfolioItems.length; i++) {
    if(elementIndex === i) {
        imageList += `
        <picture class="wide-image image-grid-item">
            <source media="(min-width: 1600px)" srcset="../assets/${portfolioItems[i].imageName}.png">
            <source media="(min-width: 1300px)" srcset="../assets/${portfolioItems[i].imageName}_md.png">
            <source media="(min-width: 800px)" srcset="../assets/${portfolioItems[i].imageName}_sm.png">
            <img src="../assets/${portfolioItems[i].imageName}_sm.png" alt="${portfolioItems[i].imageName}" />
        </picture>
    `;
    } else {
        imageList += `
        <picture class="image-grid-item">
            <source media="(min-width: 1600px)" srcset="../assets/${portfolioItems[i].imageName}.png">
            <source media="(min-width: 1300px)" srcset="../assets/${portfolioItems[i].imageName}_md.png">
            <source media="(min-width: 800px)" srcset="../assets/${portfolioItems[i].imageName}_sm.png">
            <img src="../assets/${portfolioItems[i].imageName}_sm.png" alt="${portfolioItems[i].imageName}" />
        </picture>
    `;
    }
}

document.querySelector(".portfolio-grid-image").innerHTML = imageList;

let featuresHtml = ``;

for (let i = 0; i < portfolioItems[elementIndex].featureTitles.length; i++) {
    featuresHtml += `
        <div class="feature-container">
            <p><span data-i18n="${portfolioItems[elementIndex].featureTitles[i]}" class="feature-title"></span>
                <span data-i18n="${portfolioItems[elementIndex].featureDescriptions[i]}" class="feture-description"></span></p>
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

}

updateInformation()


//back navigation
document.querySelector(".back-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
    }, 300);
});