//back navigation
document.querySelector(".back-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");

    setTimeout(() => {
        window.history.back();
    }, 300);
});

//open github
document.getElementById("github-profile").addEventListener("click", function() {
    window.open("https://github.com/arthurRR02?tab=repositories", "_blank");
});

let portfolioItems = document.querySelectorAll(".portfolio-item");

for(let i = 0; i < portfolioItems.length; i++) {
    if(i !== 2) {
        portfolioItems[i].addEventListener("click", function() {
            parent.document.body.classList.add("fade-out");
            setTimeout(() => {
                parent.window.location.href = "portfolio-item-detail.html";
                sessionStorage.setItem("elementIndex", i);
            }, 300);
        });
    }
}