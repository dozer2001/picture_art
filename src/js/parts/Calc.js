function calc() {
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
}
export default calc;