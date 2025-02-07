const headers = document.querySelectorAll(".accordion-header");

headers.forEach(element => {
    element.addEventListener("click", () => {
        const content = element.nextElementSibling;
        const padding = 15;

        if(content.style.maxHeight) {
            content.style.maxHeight = null;
            rotateChevron(false, element.querySelector("i"));
            content.classList.remove("openned");
        } else {
            content.style.maxHeight = `${content.scrollHeight + padding * 2}px`;
            content.classList.add("openned");
            rotateChevron(true, element.querySelector("i"));
        } 
    });
});

function rotateChevron(isOpened, element) {
    element.style.transform = `rotate(${isOpened ? 180 : 0}deg)`;
}