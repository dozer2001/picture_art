function giftModal() {
    let giftImg = document.querySelector('.fixed-gift'),
        gift = document.querySelector('.popup-gift'),
        body = document.querySelector('body'),
        pup = true;
    gift.addEventListener('click', (event) => {
        if (event.target.className == 'popup-gift' || event.target.className == 'popup-close') {
            gift.style.display = 'none';
            document.querySelector('body').style.overflowY = 'auto';
            pup = false;
        }
    });
    document.addEventListener('scroll', function (event) {
        let a = (body.getBoundingClientRect().top);
        let b = (body.clientHeight - 600);
        if (a + b < 350) {
            if (pup == true) {
                gift.style.display = 'block';
                document.querySelector('body').style.overflowY = 'hidden';
                giftImg.style.display = 'none';
                pup = false;
            }
        }




    });


    giftImg.addEventListener('click', () => {
        gift.style.display = ' block';
        document.querySelector('body').style.overflowY = 'hidden';
        giftImg.style.display = 'none';
        gift.addEventListener('click', (event) => {
            if (event.target.className == 'popup-gift' || event.target.className == 'popup-close') {
                gift.style.display = 'none';
                document.querySelector('body').style.overflowY = 'auto';
            }
        });

    });

}

export default giftModal;