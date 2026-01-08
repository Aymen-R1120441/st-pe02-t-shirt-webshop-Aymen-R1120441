let accElements, btnMenu;

window.addEventListener("load", init);

function init() {
    btnMenu = document.querySelector(".navbar-toggler");
    btnMenu.addEventListener("click", toggleMenu);

    accElements = document.querySelectorAll(".accordion");
    accElements.forEach(element => {
        element.addEventListener("click", togglePanel);
    });
}

function toggleMenu() {
    var myLinks = document.querySelector(".collapse");
    myLinks.classList.toggle("open");
}

function togglePanel() {
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}