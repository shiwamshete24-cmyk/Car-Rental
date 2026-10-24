window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".bg-color");

    if (window.scrollY > 50) {
        navbar.classList.add("bg-color-scrolled");
    } else {
        navbar.classList.remove("bg-color-scrolled");
    }
}); 