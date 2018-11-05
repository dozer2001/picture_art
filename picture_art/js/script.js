'use strict';


// SliderTop Start
let imgMan = document.querySelector('.main-slider-item'),
    imgWoman = document.querySelectorAll('.main-slider-item')[1];
setInterval(up, 8000);

function up() {
    imgMan.classList.add('hide');
    imgWoman.classList.remove('hide');
    setTimeout(down, 4000);

    function down() {
        imgMan.classList.remove('hide');
        imgWoman.classList.add('hide')
    }
}

//SliderTop end

//Modal Start
let modal = document.querySelector('.popup-design'),
    modalTwo = document.querySelector('.popup-consultation'),
    button = document.getElementsByClassName('button-order'),
    closeOne = document.querySelector('.popup-design'),
    closeTwo = document.querySelector('.popup-consultation');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function (event) {
        if (event.target.classList[2] === 'button-design') {
            modal.style.display = 'block';
            document.querySelector('body').style.overflowY = 'hidden';
        } else if (event.target.classList[2] === 'button-consultation') {
            modalTwo.style.display = 'block';
            document.querySelector('body').style.overflowY = 'hidden';
        }
    });
}
closeOne.addEventListener('click', function (event) {
    if (event.target.className == 'popup-design' || event.target.className == 'popup-close') {
        modal.style.display = 'none';
        document.querySelector('body').style.overflowY = 'auto';
    }
});
closeTwo.addEventListener('click', function (event) {
    if (event.target.className == 'popup-consultation' || event.target.className == 'popup-close') {
        modalTwo.style.display = 'none';
        document.querySelector('body').style.overflowY = 'auto';
    }
});

//Modal End

//SendForm Start
let statusMessage = document.createElement('div'),
    img = document.createElement('img'),
    phone = document.getElementsByName('phone'),
    msg = {
        loading: 'loading..',
        ready: 'loading ready',
        error: 'error'
    };

function SendForm(elem) {
    let form = document.querySelector(`${ elem}`),
        input = form.getElementsByTagName('input');

    phone.forEach(function (item) {
        item.addEventListener('keypress', function (event) {
            if (event.which != 43 && ( event.which < 48 || event.which > 57)) {

                event.preventDefault();
            }
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                form.appendChild(statusMessage);

                let formData = new FormData(form);

                function postData() {
                    return new Promise(function (resolve, reject) {
                        let request = new XMLHttpRequest();
                        request.open('POST', 'server.php');
                        request.setRequestHeader('Content-Type', 'application/x-ww-form-urlencoded');

                        request.onreadystatechange = function () {
                            if (request.readyState < 4) {
                                resolve();

                            } else if (request.readyState === 4 && request.status === 200) {
                                resolve();
                            } else {
                                reject();
                            }
                        };
                        request.send(formData);
                    });
                }// End PostData
                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                    setTimeout(() => img.src = '', 5000)
                }

                postData(FormData)
                    .then(() => {
                        statusMessage.innerHTML = msg.loading
                    })
                    .then(() => {
                        statusMessage.innerHTML = msg.ready
                    })
                    .catch(() => {
                        statusMessage.innerHTML = msg.error
                    })
                    .then(clearInput);
            });

        });
    });


}

SendForm('.formOne');

//SendForm End

//GiftModal Start
let giftImg = document.querySelector('.fixed-gift'),
    gift = document.querySelector('.popup-gift');

giftImg.addEventListener('click', () => {
    gift.style.display = ' block';
    giftImg.style.display = 'none';
    gift.addEventListener('click', (event) => {
        if (event.target.className == 'popup-gift' || event.target.className == 'popup-close') {
            gift.style.display = 'none';
        }
    });

});
//GiftModal End

//MoreStyles Modal Start

let moreButton = document.querySelector('.button-transparent');


moreButton.addEventListener('click', () => {
    let st = document.getElementsByClassName('styles-2');

    for (let i = 0; i < st.length; i++) {
        st[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
        i -= 1;
    }
    moreButton.style.display = 'none'
});


//MoreStyles Modal End

//Calc Start

let form = document.querySelector('.form'),
    size = document.getElementById('size'),
    material = document.getElementById('material'),
    options = document.getElementById('options'),
    calcPrice = form.querySelector('.calc-price'),
    input = form.querySelector('.promocode'),
    total = 0;
let sizeCost = 0,
    materialCost = 0,
    optionsCost = 0;

form.addEventListener('change', (event) => {

    if (size == event.target) {
        sizeCost = event.target.selectedIndex * 100;

    }
    if (material == event.target) {
        materialCost = event.target.selectedIndex * 500;
    }
    if (options == event.target) {
        optionsCost = event.target.selectedIndex * 2000;
    }
    total = (optionsCost + sizeCost + materialCost);
    if (sizeCost > 0 && materialCost > 0) {
        if (input.value == 'IWANTPOPART') {
            calcPrice.innerHTML = total - (total * 0.3) + 'рублей'
        } else {
            calcPrice.innerHTML = total + 'рублей';
        }
    } else {
        calcPrice.innerHTML = 'Для расчета нужно выбрать размер картины и материал картины'
    }


});
//Calc End

// mouseover Start

let size1 = document.querySelector('.size-1'),
    size2 = document.querySelector('.size-2'),
    size3 = document.querySelector('.size-3'),
    size4 = document.querySelector('.size-4'),
    wrapper = document.querySelector('.sizes-wrapper'),
    sizesBlock = document.getElementsByClassName('.sizes-block');
for (let i = 0; i < sizesBlock.length; i++) {

}


wrapper.addEventListener('mouseover', function (event) {
    if (event.target.className === 'size-1') {
        size1.src = 'img/sizes-1-1.png';
        size1.style.position = 'relative';
        size1.style.zIndex = '300';
    } else if (event.target.className === 'size-2') {
        size2.src = 'img/sizes-2-1.png';
        size2.style.position = 'relative';
        size2.style.zIndex = '300';
    } else if (event.target.className === 'size-3') {
        size3.src = 'img/sizes-3-1.png';
        size3.style.position = 'relative';
        size3.style.zIndex = '300';
    } else if (event.target.className === 'size-4') {
        size4.src = 'img/sizes-4-1.png';
        size4.style.position = 'relative';
        size4.style.zIndex = '300';
    }
});
wrapper.addEventListener('mouseout', function (event) {
    if (event.target.className === 'size-1') {
        size1.src = 'img/sizes-1.png';
        size1.style.position = '';
        size1.style.zIndex = '';
    } else if (event.target.className === 'size-2') {
        size2.src = 'img/sizes-2.png';
        size2.style.position = '';
        size2.style.zIndex = '';
    } else if (event.target.className === 'size-3') {
        size3.src = 'img/sizes-3.png';
        size3.style.position = '';
        size3.style.zIndex = '';
    } else if (event.target.className === 'size-4') {
        size4.src = 'img/sizes-4.png';
        size4.style.position = '';
        size4.style.zIndex = '';
    }
});
// mouseover End

//ModalWithInterval start

let popupConsultation = document.querySelector('.popup-consultation');
setTimeout(modalTimeOut, 60000);

function modalTimeOut() {
    let pup1 = document.querySelector('.popup-gift'),
        pup2 = document.querySelector('.popup-design'),
        pup3 = document.querySelector('.popup-consultation');

    if (pup1.style.display !== 'block' && pup2.style.display !== 'block' && pup3.style.display !== 'block') {
        popupConsultation.style.display = 'block';
    }
    clearTimeout(modalTimeOut);
}

//ModalWithInterval end


//blockFilter Start

let menu = document.querySelector('.portfolio-menu'),
    allLi = menu.getElementsByTagName('li'),
    portfolio = document.getElementsByClassName('portfolio-block'),
    lovers = document.getElementsByClassName('lovers'),
    girl = document.getElementsByClassName('girl'),
    chef = document.getElementsByClassName('chef'),
    guy = document.getElementsByClassName('guy'),
    portfolioNo = document.querySelector('.portfolio-no');

menu.addEventListener('click', function (event) {

    for (let i = 0; i < portfolio.length; i++) {
        if (event.target.className === 'all') {
            portfolio[i].style.display = 'block'
        } else if (event.target.className === 'lovers') {
            if (portfolio[i].classList[2] === 'lovers') {
                portfolio[i].style.display = 'block'
            } else {
                portfolio[i].style.display = 'none'
            }
        } else if (event.target.className === 'girl') {
            if (portfolio[i].classList[2] === 'girl') {
                portfolio[i].style.display = 'block'
            } else {
                portfolio[i].style.display = 'none'
            }
        } else if (event.target.className === 'chef') {
            if (portfolio[i].classList[2] === 'chef') {
                portfolio[i].style.display = 'block'
            } else {
                portfolio[i].style.display = 'none'
            }
        } else if (event.target.className === 'guy') {
            if (portfolio[i].classList[2] === 'guy') {
                portfolio[i].style.display = 'block'
            } else {
                portfolio[i].style.display = 'none'
            }
        } else if (event.target.className === 'grandmother' || event.target.className === 'granddad') {
            portfolio[i].style.display = 'none';
            portfolioNo.style.display = 'block'
        }
    }
    for (let i = 0; i < allLi.length; i++) {
        if (event.target.className !== 'active') {
            allLi[i].classList.remove('active');
            event.target.classList.add('active');
        }
    }


    console.log(event.target);
});

//blockFilter End

// SliderBot Start
function mainSlider() {
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
        slides.forEach((item) => item.classList.add('hide'));
        slides[slideIndex - 1].classList.remove('hide');
    }

    let idInterval = setInterval(zup, 14000);
    let forSlide2 = () => {
        slides.forEach((item) => item.classList.add('hide'));
        slides[1].classList.remove('hide')

    };
    let forSlide1 = () => {
        slides.forEach((item) => item.classList.add('hide'));
        slides[0].classList.remove('hide')
    };
    let forSlide3 = () => {
        slides.forEach((item) => item.classList.add('hide'));
        slides[2].classList.remove('hide')
    };

    function zup() {
        setTimeout(forSlide1, 0);
        setTimeout(forSlide2, 4000);
        setTimeout(forSlide3, 9000)
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

let sliderTwo = mainSlider;
sliderTwo();

// SliderBot End

//Acardion Start
// доделать плавное появление
let accordionHeading = document.getElementsByClassName('accordion-heading'),
    accordionBlock = document.getElementsByClassName('accordion-block');

for (let i = 0; i < accordionHeading.length; i++) {
    accordionBlock[i].style.display = 'none';
    accordionHeading[i].addEventListener('click', () => {
        accordionBlock[i].classList.toggle("show");
    })
}

//Acardion End