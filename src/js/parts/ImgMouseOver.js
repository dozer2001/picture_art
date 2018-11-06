function imgMouseOver() {
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
}

export default imgMouseOver;