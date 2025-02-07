import navigation from './navigation.js';

//navigate to about-me page
const buttonGrid = document.querySelector("#button-grid");
if(buttonGrid) {
    const aboutMeButton = buttonGrid.shadowRoot.querySelector("#about-me-button");

    if(aboutMeButton) {
        aboutMeButton.addEventListener("click", function() {
            navigation.navigate("/src/about-me.html")
        });
    }
}

