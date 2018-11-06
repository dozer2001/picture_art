function sendForm() {
    let buttonOrder = document.querySelectorAll('.form-button'),
        nameCur = document.getElementsByClassName('NameCur'),
        messageCur = document.getElementsByClassName('messageCur'),
        phoNum = document.getElementsByClassName('PhoneNum'),

        body = document.querySelector('body');

    let disOn = () => {
        buttonOrder.forEach((item) => {
            item.disabled = true;
            item.style.opacity = 0.5;
        });
    };
    disOn();

    let disOff = (a) => {
        buttonOrder[a].disabled = false;
        buttonOrder[a].style.opacity = 1;
    };

    body.addEventListener('input', (e) =>{
        let target = e.target;

        if((target.classList.contains('NameCur') || target.classList.contains('messageCur'))){
            target.value = target.value.replace(/[^а-яА-ЯёЁ ]/g,"");
            target.value =  target.value.replace(/[^а-яА-ЯёЁ ]/g,"");
        }
        if(target.classList.contains('PhoneNum')){
            let enter,

                checkInputPhone = (event) => {
                    if ((event.charCode >= 48 && event.charCode <= 57) || event.keyCode == 9 || event.keyCode == 13 || event.keyCode == 8 || event.keyCode == 116) {
                        enter = true;
                    } else {
                        enter = false;
                    }
                    return enter;
                },

                phoneMask = () => {
                    let mask = "+_(___) ___-____",
                        phone = target,
                        text = "",
                        phoneNum = [],
                        outPut = "",
                        theLastPos = 0;

                    text = target.value;

                    for (let i = 0; i < text.length; i++) {
                        if (!isNaN(text.charAt(i)) && text.charAt(i) != " ") {
                            phoneNum.push(text.charAt(i));
                        }
                    }

                    for (let i = 0; i < mask.length; i++) {
                        if (mask.charAt(i) == "_") {
                            if (phoneNum.length == 0){
                                outPut += mask.charAt(i);
                            } else {
                                outPut += phoneNum.shift();
                                theLastPos = i + 1;
                            }
                        } else {
                            outPut += mask.charAt(i);
                        }
                    }

                    target.value =  outPut;
                    target.setSelectionRange(theLastPos, theLastPos);
                };

            target.onkeypress = checkInputPhone;
            target.onkeyup = phoneMask;

        }
        if(nameCur[0].value.length != 0 && messageCur[0].value.length != 0 && phoNum[0].value[15] != '_' && phoNum[0].value.length >=16 ){
            disOff(0);
        } else if(nameCur[1].value.length != 0 && phoNum[1].value[15] != '_' && phoNum[1].value.length >=16){
            disOff(1);
        } else if (nameCur[2].value.length != 0 && phoNum[2].value[15] != '_' && phoNum[2].value.length >=16 ) {
            disOff(2);
        } else {
            disOn();
        }
    });

    let changeContent = (target,statusMessage) => {
        statusMessage.style.fontSize = '40px';
        statusMessage.style.textAlign = 'center';
        if(target.classList.contains('main-form')){
            target.style.display = "none";
            let con = document.querySelector('section.consultation');
            con.appendChild(statusMessage);
        } else if (target.classList.contains('form')) {
            target.style.display = "none";
            let popCont = document.querySelector('.popCont');
            popCont.appendChild(statusMessage);
        } else if (target.classList.contains('form2')){
            target.style.display = "none";
            let popCont = document.querySelectorAll('.popCont')[1];
            popCont.appendChild(statusMessage);
        }
    };

    let showContent = (target,statusMessage) => {
        body.addEventListener('click', (e) => {
            let target1 = e.target;

            if(target1.classList.contains('popup-close') || target1.classList.contains('popup-design') || target1.classList.contains('popup-consultation')){
                target.style.display = 'block';
                statusMessage.innerHTML = "";
            }
        });
    };

    let sendRequest = (target) => {
        let message = {
                loading: "<img  width=150px   src=https://avatars.mds.yandex.net/get-pdb/472427/ac9d7d40-28c9-4bb5-9995-fde01be29ab7/orig/>",
                success:  "<img  width=150px   src=https://avatars.mds.yandex.net/get-pdb/216365/0f72d9cb-7fed-426c-b6e2-de7b47de3b1b/orig/>",
                failed: "<img  width=150px   src=https://avatars.mds.yandex.net/get-pdb/27625/de915d8a-4cfc-4318-90fb-ba9ccdc8ee6d/orig/>"
            },

            input = target.getElementsByTagName('input'),
            textarea = target.getElementsByTagName('textarea'),
            request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        let formData = new FormData(target),
            obj = {};

        formData.forEach(function(value, key){
            obj[key] = value;
        });

        let  json = JSON.stringify(obj);
        request.send(json);

        request.onreadystatechange = () => {
            let statusMessage = document.createElement('div');
            if (request.readyState < 4){
                target.appendChild(statusMessage);
                statusMessage.style.fontSize = '40px';
                statusMessage.style.textAlign = 'center';
                statusMessage.innerHTML = message.loading;
                showContent(target,statusMessage);
            } else if (request.readyState === 4 && request.status === 200){
                changeContent(target,statusMessage);
                statusMessage.innerHTML = message.success;
                showContent(target,statusMessage);
            } else {
                changeContent(target,statusMessage);
                statusMessage.innerHTML = message.failed;
                showContent(target,statusMessage);
            }
        };

        for(let i = 0; i < input.length; i++){
            input[i].value = '';
            textarea.value = ''
        }
    }

    body.addEventListener('submit', (e) => {
        e.preventDefault();
        let target = e.target;

        if(target.classList.contains('form') || target.classList.contains('main-form') || target.classList.contains('form2')) {
            sendRequest(target);

        }
    });
}

export default sendForm;