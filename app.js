const selectElement = (element) => document.querySelector(element);

const slider = selectElement('.slider');
const nextBtn = selectElement('.next-btn');
const prevBtn = selectElement('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slidesIcons = document.querySelectorAll('.slide-icon');
const numberOfSLides = slides.length;
let slideNumber = 0;

//move slide to the right whe nexBtn clicked
nextBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slidesIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
    })

    slideNumber++;

    if (slideNumber > numberOfSLides - 1){
        slideNumber = 0;
    }
    slides[slideNumber].classList.add('active');
    slidesIcons[slideNumber].classList.add('active');
})
//move slide to left when prevBtn clicked
prevBtn.addEventListener('click', () => {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
    slidesIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active')
    })

    slideNumber--;

    if (slideNumber < 0){
        slideNumber = numberOfSLides - 1;
    }
    slides[slideNumber].classList.add('active');
    slidesIcons[slideNumber].classList.add('active');
})
//autoplay slides 
let playSlides;

let repeater = () => {
    playSlides = setInterval(function() {
        slides.forEach((slide) => {
            slide.classList.remove('active')
        })
        slidesIcons.forEach((slideIcon) => {
            slideIcon.classList.remove('active')
        })
    
        slideNumber++;
    
        if (slideNumber > numberOfSLides - 1){
            slideNumber = 0;
        }
        slides[slideNumber].classList.add('active');
        slidesIcons[slideNumber].classList.add('active');
    }, 5000)
};
repeater()
//stop autoplay when mouseover 
slider.addEventListener('mouseover', () => {
    clearInterval(playSlides);
})
//reanude autplay when mouseout 
slider.addEventListener('mouseout', () => {
    repeater();
})