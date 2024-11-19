class Navigation {
    constructor() {}

    navigate(page) {
        const iframe = document.getElementById("intern-navigation");
        iframe.src = page;
    }
}

const navigation = new Navigation();
export default navigation;