document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    bars.addEventListener("click", function() {
        const navList = document.querySelector(".nav-list");
        navList.classList.toggle("active");
    });
});

const nav = document.querySelector(".bar-top")
var imgLogo = document.getElementsByClassName("logo")[0]
var iconShoppingCart = document.getElementsByClassName("shopping_cart_img")[0]
var iconUser = document.getElementsByClassName("user_img")[0]

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        imgLogo.src = "./assets/icons/LOGO-NEGRO.png";
        iconShoppingCart.src = "./assets/icons/shopping_cart_black.png"
        iconUser.src = "./assets/icons/account_circle_black.png"
        nav.classList.add("active2");
    } else {
        imgLogo.src = "./assets/icons/LOGOBLANCO.png";
        iconShoppingCart.src = "./assets/icons/shopping_cart_white.png"
        iconUser.src = "./assets/icons/account_circle_white.png"
        nav.classList.remove("active2");
    }
})