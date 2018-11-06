function acardion() {
    let accordionHeading = document.getElementsByClassName('accordion-heading'),
        accordionBlock = document.getElementsByClassName('accordion-block');

    for (let i = 0; i < accordionHeading.length; i++) {

        accordionHeading[i].addEventListener('click', () => {
            for (let i = 0; i < accordionHeading.length; i++) {
                accordionBlock[i].style.display = 'none';
                accordionBlock[i].classList.remove('show');
                accordionHeading[i].style.color = 'black';
                accordionBlock[i].style.zIndex = '20';
            }
            accordionBlock[i].classList.toggle("show");
            accordionHeading[i].style.color = '#0006ff';
        });
        accordionBlock[i].style.display = 'none';
    }
}
export default acardion;