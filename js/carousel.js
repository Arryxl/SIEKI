const slides = document.querySelector('.caruosel-slides')
const slideSections = document.querySelectorAll('.slider-section')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')

let currentIndex = 0
const totalSlides = slideSections.length

function showSlide(index) {
    const offset = -index * 100
    slides.style.transform =  `translateX(${offset}%)`
}

function prevSlide(){
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    showSlide(currentIndex)
}

function nextSlide(){
    currentIndex = (currentIndex + 1) % totalSlides
    showSlide(currentIndex)
}

btnLeft.addEventListener('click', prevSlide)
btnRight.addEventListener('click', nextSlide)
