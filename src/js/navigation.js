class Navigation {
    constructor() {}

    navigate(page) {
        const portfolioPage = "portfolio.html";
        const iframe = parent.document.getElementById("intern-navigation");

        iframe.classList.add("iframe-hidden");
        

        if(page === portfolioPage) {
            parent.document.body.classList.add("fade-out");
            setTimeout(() => {
                parent.window.location.href = portfolioPage;
            }, 300);
        } else {
            iframe.addEventListener("transitionend", function onFadeOut() {
                iframe.src = page;
                iframe.classList.remove("iframe-hidden");
                iframe.removeEventListener("transitionend", onFadeOut);
            }, {once: true});
        }
    }
}

const navigation = new Navigation();
export default navigation;