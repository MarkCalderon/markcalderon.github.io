export const contact = () => {
    let form = document.getElementById('form');
    // let email, type, phone, name, message;
    var pristine = new Pristine(form, {
        classTo: 'conSec__tableTd',
        errorTextParent: 'conSec__tableTd',
        errorTextClass: 'conSec__errorText'
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // email = form.elements['input-email'].value;
        // name = form.elements['input-name'].value;
        // phone = form.elements['input-phone'].value;
        // type = form.elements['input-type'].value;
        // message = form.elements['input-message'].value;

        var valid = pristine.validate(); // returns true or false

        // if(valid) {
        //     form.submit()
        //     console.log('pass');
        // }
        // else {
        //     console.log('fail');
        // }
    })
}
