//back navigation
document.querySelector(".back-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
        const iframe = parent.document.getElementById("intern-navigation");
        if (iframe) {
            iframe.src = iframe.src;
        }
    }, 300);
});

//open github
document.getElementById("github-profile").addEventListener("click", function() {
    window.open("https://github.com/arthurriosprogramador?tab=repositories", "_blank");
});

let portfolioItem = document.querySelector(".portfolio-item");

portfolioItem.addEventListener("click", function() {
            parent.document.body.classList.add("fade-out");
            setTimeout(() => {
                parent.window.location.href = "portfolio-item-detail.html";
            }, 300);
        });