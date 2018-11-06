function modal() {
    let modal = document.querySelector('.popup-design'),
        modalTwo = document.querySelector('.popup-consultation'),
        button = document.getElementsByClassName('button-order'),
        closeOne = document.querySelector('.popup-design'),
        closeTwo = document.querySelector('.popup-consultation'),
        mainform = document.querySelector('.main-form'),
        input1 = document.getElementsByName('name');

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
}
export default modal;