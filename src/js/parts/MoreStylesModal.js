function moreStylesModal() {
    let moreButton = document.querySelector('.button-transparent');
    moreButton.addEventListener('click', () => {
        let st = document.getElementsByClassName('styles-2');
        for (let i = 0; i < st.length; i++) {
            st[i].className = 'col-sm-3 col-sm-offset-0 col-xs-10 col-xs-offset-1';
            i -= 1;
        }
        moreButton.style.display = 'none'
    });

}
export default moreStylesModal;