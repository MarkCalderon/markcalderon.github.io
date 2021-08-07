export const accordion = () => {
    let button = document.querySelectorAll('[data-accord]')

    if(button.length) {
        button.forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                let target = e.target.getAttribute('data-accord')
                document.getElementById(target).classList.toggle('u-isToggle');
            })
        })
    }
}