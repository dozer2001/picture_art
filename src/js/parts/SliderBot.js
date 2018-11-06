function bottomSlider() {
    let slides = document.querySelectorAll('.feedback-slider-item'),
        slideIndex = 1,
        prev = document.querySelector('.main-prev-btn'),
        next = document.querySelector('.main-next-btn');

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = 3;
        }

        for(let i = 0; i < slides.length; i++){
            slides[i].classList.add('hide')
        }
        slides[slideIndex - 1].classList.remove('hide');
    }
    let idInterval = setInterval(zup, 14000);
    let forSlide2 = () => {
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.add('hide')
        }
        slides[1].classList.remove('hide');
    };
    let forSlide1 = () => {
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.add('hide')
        }
        slides[0].classList.remove('hide');
    };
    let forSlide3 = () => {
        for(let i = 0; i < slides.length; i++){
            slides[i].classList.add('hide')
        }
        slides[2].classList.remove('hide');
    };

    function zup() {
        setTimeout(forSlide1, 0);
        setTimeout(forSlide2, 4000);
        setTimeout(forSlide3, 9000);
    }

    function toSlides(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', () => {
        toSlides(slideIndex - 1);
        clearInterval(idInterval);
    });
    next.addEventListener('click', () => {
        toSlides(slideIndex + 1);
        clearInterval(idInterval);
    });
}

export default bottomSlider;