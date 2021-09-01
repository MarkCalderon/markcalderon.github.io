export const contact = () => {
    let form = document.getElementById('form');
    // let popup = document.getElementById('popup')
    var pristine = new Pristine(form, {
        classTo: 'conSec__tableTd',
        errorTextParent: 'conSec__tableTd',
        errorTextClass: 'conSec__errorText'
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let valid = pristine.validate(); // returns true or false

        if(valid) {
            let email = form.elements['input-email'].value;
            let name = form.elements['input-name'].value;
            let type = form.elements['input-type'].value;
            let body = form.elements['input-message'].value;

            // To Recipient
            Email.send({
                SecureToken: "6fb550bd-7231-4867-9fc0-0e61d85f4ccc",
                To : 'markcev0@gmail.com',
                From : email,
                Subject : `[INQUIRY] from ${name} `,
                Body :  `
                            Name: ${name}<br>
                            Email: ${email}<br>
                            Inquiry type: ${type}<br>
                            Message: ${body}
                        `
            }).then(
                // Response for Sender
                Email.send({
                    SecureToken: "6fb550bd-7231-4867-9fc0-0e61d85f4ccc",
                    To : email,
                    From : 'markcev0@gmail.com',
                    Subject : `[INQUIRY RECEIPT] from Angeo`,
                    Body :  `
                                Your email is successfully received.<br>
                                You can expect a response within 1 week.
                            `
                }).then(()=> {
                    popup.classList.add('is-submit')
                        setTimeout(() => {
                            popup.classList.remove('is-submit')
                            form.reset()
                        }, 2000);
                    }
                )
            );
        }
    })
}
