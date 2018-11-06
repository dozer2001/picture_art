function burgerMenu() {
    let burgerMenu = document.querySelector('.burger-menu'),
        burger = document.querySelector('.burger'),
        mq = window.matchMedia("screen and (max-width: 768px)");
    mq.addListener(setup_for_width); // Добавим прослушку на смену результата
    setup_for_width(mq); // Вызовем нашу функцию
    function setup_for_width(mq) {
        if (mq.matches) {
            burgerMenu.classList.remove('hide');
            burgerMenu.classList.remove('showOne');
        } else {
            burgerMenu.classList.add('hide')        }
        burger.addEventListener('click', () => {
            burgerMenu.classList.toggle('showOne')
        });
    }
}
export default burgerMenu;