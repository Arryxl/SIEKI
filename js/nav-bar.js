const nav = document.querySelector(".bar-top")
var imgLogo = document.getElementsByClassName("logo")[0]
var iconShoppingCart = document.getElementsByClassName("shopping_cart_img")[0]
var iconUser = document.getElementsByClassName("user_img")[0]
var iconShoppingCartBar = document.getElementsByClassName("shopping_cart_bar")[0]
var iconUserBar = document.getElementsByClassName("user_bar")[0]
var iconMenuBar = document.getElementsByClassName("menu_bar")[0]

document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".menu");
    bars.addEventListener("click", function() {
        const navList = document.querySelector(".nav-list");
        navList.classList.toggle("active");
    });
});

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        imgLogo.src = "./assets/icons/LOGO-NEGRO.png";
        iconShoppingCart.src = "./assets/icons/shopping_cart_black.png"
        iconUser.src = "./assets/icons/account_circle_black.png"
        iconShoppingCartBar.src = "./assets/icons/shopping_cart_black.png"
        iconUserBar.src = "./assets/icons/account_circle_black.png"
        iconMenuBar.src = "./assets/icons/menu_black.png"
        nav.classList.add("active2");
    } else {
        imgLogo.src = "./assets/icons/LOGOBLANCO.png";
        iconShoppingCart.src = "./assets/icons/shopping_cart_white.png"
        iconUser.src = "./assets/icons/account_circle_white.png"
        iconShoppingCartBar.src = "./assets/icons/shopping_cart_white.png"
        iconUserBar.src = "./assets/icons/account_circle_white.png"
        iconMenuBar.src = "./assets/icons/menu_white.png"
        nav.classList.remove("active2");
    }
})

function deleteIcons() {
    const anchoPag = 1020;
    if (window.innerWidth <= anchoPag) {
        iconShoppingCart.src = ""
        iconUser.src = ""
    } else {
        iconShoppingCart.src = "./assets/icons/shopping_cart_white.png"
        iconUser.src = "./assets/icons/account_circle_white.png"
    }
}

deleteIcons();

window.addEventListener('resize', deleteIcons);