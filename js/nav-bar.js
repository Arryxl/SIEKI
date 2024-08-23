document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    bars.addEventListener("click", function() {
        const navList = document.querySelector(".nav-list");
        navList.classList.toggle("active");
    });
});

const nav = document.querySelector(".bar-top")
var img = document.getElementsByClassName("logo")[0]

window.addEventListener("scroll", function() {
    img.src = "./assets/icons/LOGO-NEGRO.png"
    nav.classList.toggle("active2", window.scrollY > 0)
})