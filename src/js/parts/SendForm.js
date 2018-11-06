function sendForm() {
    let statusMessage = document.createElement('div'),
        phone = document.getElementsByName('phone'),
        message = document.getElementsByName('message'),
        msg = {
            loading: 'loading..',
            ready: 'Message sent',
            error: 'error'
        };


    function SendForm(elem) {
        let form = document.querySelector(`${elem}`),
            input = form.getElementsByTagName('input');

        form.addEventListener('keypress', function (event) {
            if(event.target.name === 'phone'){
                if (event.which != 43  &&( event.which < 48 || event.which > 57 || event.target.value.length == 10)) {

                }
            }
            if(event.target.name === 'message' || event.target.name === 'name'){

                console.log(event.target.value.trim());
                if(/^[а-яё]+$/i.test(event.target.value.trim())){
                    console.log(2);event.preventDefault();

                }else {
                    console.log(1);


                }
            }

        });



        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);
            function postData() {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/x-ww-form-urlencoded');

                    request.onreadystatechange = function () {
                        if (request.readyState < 4) {
                            resolve();

                        } else if (request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    };
                    request.send(formData);
                });
            }// End PostData
            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
                setTimeout(() => statusMessage.innerHTML = '', 5000)
            }
            postData(FormData)
                .then(() => {
                    statusMessage.innerHTML = msg.loading
                })
                .then(() => {
                    statusMessage.innerHTML = msg.ready
                })
                .catch(() => {
                    statusMessage.innerHTML = msg.error
                })
                .then(clearInput);
        });
    }

    SendForm('.form');
    SendForm('.formOne');
    SendForm('.main-form');
    SendForm('.formMain');
}
export default sendForm;