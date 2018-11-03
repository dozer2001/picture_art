'use strict';


// Slider Start
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
//Slide end

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
        } else if (event.target.classList[2] === 'button-consultation') {
            modalTwo.style.display = 'block';
        }
    });
}
closeOne.addEventListener('click', function (event) {
    if (event.target.className == 'popup-design' || event.target.className == 'popup-close') {
        modal.style.display = 'none';
    }
});
closeTwo.addEventListener('click', function (event) {
    if (event.target.className == 'popup-consultation' || event.target.className == 'popup-close') {
        modalTwo.style.display = 'none';
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