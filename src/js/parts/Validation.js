'use strict';

function validateTelInput(event) {
    if (event.target.tagName === 'INPUT' && (event.target.name === 'phone' || event.target.type === 'tel')){
        if (!event.target.oldValue) {event.target.oldValue = '';}

        if (/^(\+7|8)\ *\-?\ *\(?\ *\d{3}\ *\)?\ *\-?\ *\d{3}\ *\-?\ *\d{2}\ *\-?\ *\d{2}$/.test(event.target.value.trim())) {
            // event.target.oldValue = event.target.value;
            event.target.classList.add('valid');
            event.target.classList.remove('invalid');
            setTimeout(()=>{
                event.target.classList.remove('valid');
            }, 1500);
        } else {
            // event.target.value = event.target.oldValue;
            event.target.classList.add('invalid');
            event.target.classList.remove('valid');
        }
    }
}

export default validateTelInput;