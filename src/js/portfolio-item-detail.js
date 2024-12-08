import PortfolioItem from "./models/portfolio-item.js";
import { translate } from "./translation.js";

const portfolioItems = PortfolioItem.getPortfolioItems();
const carouselTrack = document.querySelector(".carousel-track");
const carouselControllerBack = document.querySelector(".carousel-controller-back");
const carouselControllerForward = document.querySelector(".carousel-controller-forward");

let imageList = ``;
let dotController = ``;
let currentIndex = 0;

//Add images to the carousel
for (let i = 0; i < portfolioItems.length; i++) {
    if(portfolioItems[i].imageName === "pokedex") {
        imageList += `
        <div class="carousel-slide">
            <picture>
                <source media="(min-width: 1600px)" srcset="../assets/images/${portfolioItems[i].imageName}_lg.gif">
                <source media="(min-width: 1300px)" srcset="../assets/images/${portfolioItems[i].imageName}_md.gif">
                <source media="(min-width: 800px)" srcset="../assets/images/${portfolioItems[i].imageName}_sm.gif">
                <img src="../assets/images/${portfolioItems[i].imageName}_sm.gif" alt="${portfolioItems[i].imageName}" />
            </picture>
        </div>
    `;
    } else {
        imageList += `
        <div class="carousel-slide">
            <picture>
                <source media="(min-width: 1800px)" srcset="../assets/images/${portfolioItems[i].imageName}_xlg.png">
                <source media="(min-width: 1600px)" srcset="../assets/images/${portfolioItems[i].imageName}_lg.png">
                <source media="(min-width: 1300px)" srcset="../assets/images/${portfolioItems[i].imageName}_md.png">
                <source media="(min-width: 800px)" srcset="../assets/images/${portfolioItems[i].imageName}_sm.png">
                <img src="../assets/images/${portfolioItems[i].imageName}_sm.png" alt="${portfolioItems[i].imageName}" />
            </picture>
        </div>
    `;
    }
    dotController += `
    <div class="dot-indicator" carousel-index="${i}"></div>
    `;
}

carouselTrack.innerHTML = imageList;

//Sets carousel controller actions
document.querySelector(".carousel-controller").innerHTML = dotController;

const dots = document.querySelectorAll(".dot-indicator");

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("carousel-index"));
        currentIndex = index;
        updateCarousel(index);
    });
});

carouselControllerBack.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel(currentIndex);
    }
});

carouselControllerForward.addEventListener("click", function () {
    if (currentIndex < dots.length - 1) {
        currentIndex++;
        updateCarousel(currentIndex);
    }
});

//back navigation
document.querySelector(".back-button").addEventListener("click", function () {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
    }, 300);
});

function updateCarousel(index) {
    const slideWidth = carouselTrack.children[0].getBoundingClientRect().width;

    if (index === 0) {
        carouselControllerBack.classList.add("carousel-controller-disabled");
        carouselControllerForward.classList.remove("carousel-controller-disabled");
    } else if (index === dots.length - 1) {
        carouselControllerBack.classList.remove("carousel-controller-disabled");
        carouselControllerForward.classList.add("carousel-controller-disabled");
    } else {
        carouselControllerBack.classList.remove("carousel-controller-disabled");
        carouselControllerForward.classList.remove("carousel-controller-disabled");
    }

    carouselTrack.style.transform = `translateX(-${index * slideWidth}px)`;
    dots.forEach(dot => { dot.classList.remove("selected-indicator") });
    dots[index].classList.add("selected-indicator");

    updateInformations(index)
}

function updateInformations(index) {
    //Sets informations related with the image
    document.getElementById("portfolio-info-title").innerHTML = `
    <h2 data-i18n="${portfolioItems[index].madeWithLabel}"></h2>
    <hr>
    `;

    let featuresHtml = ``;

    for (let i = 0; i < portfolioItems[index].featureTitles.length; i++) {
        featuresHtml += `
    <div class="feature-container">
        <p><span data-i18n="${portfolioItems[index].featureTitles[i]}" class="feature-title"></span>
            <span data-i18n="${portfolioItems[index].featureDescriptions[i]}" class="feture-description"></span></p>
    </div>
    `;
        }

    document.getElementById("portfolio-info").innerHTML = `
    <p data-i18n="${portfolioItems[index].description}" id="item-description"></p>
    <h3 data-i18n="portfolioMainFunctionalities"></h3>
    <div class="grid-features">
        ${featuresHtml}
    </div>
    `;
    
    translate()
}

updateCarousel(0);