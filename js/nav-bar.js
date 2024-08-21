document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    bars.addEventListener("click", function() {
        const navList = document.querySelector(".nav-list");
        navList.classList.toggle("active");
    });
});