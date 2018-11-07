function modalWithInterval() {
    let popupConsultation = document.querySelector('.popup-consultation');
    setTimeout(modalTimeOut, 60000);

    function modalTimeOut() {
        let pup1 = document.querySelector('.popup-gift'),
            pup2 = document.querySelector('.popup-design'),
            pup3 = document.querySelector('.popup-consultation');

        if (pup1.style.display !== 'block' && pup2.style.display !== 'block' && pup3.style.display !== 'block') {
            popupConsultation.style.display = 'block';
            document.querySelector('body').style.overflowY = 'hidden';
        }
        clearTimeout(modalTimeOut);
    }
}

export default modalWithInterval;