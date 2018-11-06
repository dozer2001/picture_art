function sliderTop() {
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
}
export default sliderTop;