function blockFilter() {
    let menu = document.querySelector('.portfolio-menu'),
        allLi = menu.getElementsByTagName('li'),
        portfolio = document.getElementsByClassName('portfolio-block'),
        lovers = document.getElementsByClassName('lovers'),
        girl = document.getElementsByClassName('girl'),
        chef = document.getElementsByClassName('chef'),
        guy = document.getElementsByClassName('guy'),
        portfolioNo = document.querySelector('.portfolio-no');
    menu.addEventListener('click', function (event) {
        for (let i = 0; i < portfolio.length; i++) {
            if (event.target.className === 'all') {
                portfolio[i].style.display = 'block';
                portfolioNo.style.display = 'none'
            } else if (event.target.className === 'lovers') {
                if (portfolio[i].classList[2] === 'lovers') {
                    portfolio[i].style.display = 'block';
                    portfolioNo.style.display = 'none'
                } else {
                    portfolio[i].style.display = 'none'
                }
            } else if (event.target.className === 'girl') {
                if (portfolio[i].classList[2] === 'girl') {
                    portfolio[i].style.display = 'block';
                    portfolioNo.style.display = 'none'
                } else {
                    portfolio[i].style.display = 'none'
                }
            } else if (event.target.className === 'chef') {
                if (portfolio[i].classList[2] === 'chef') {
                    portfolio[i].style.display = 'block';
                    portfolioNo.style.display = 'none'
                } else {
                    portfolio[i].style.display = 'none'
                }
            } else if (event.target.className === 'guy') {
                if (portfolio[i].classList[2] === 'guy') {
                    portfolio[i].style.display = 'block';
                    portfolioNo.style.display = 'none'
                } else {
                    portfolio[i].style.display = 'none'
                }
            } else if (event.target.className === 'grandmother' || event.target.className === 'granddad') {
                portfolio[i].style.display = 'none';
                portfolioNo.style.display = 'block'
            }
        }
        for (let i = 0; i < allLi.length; i++) {
            if (event.target.className !== 'active') {
                allLi[i].classList.remove('active');
                event.target.classList.add('active');
            }
        }

    });
}
export default blockFilter;