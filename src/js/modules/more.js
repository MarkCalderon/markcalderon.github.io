export const more = () => {
    let trigger = document.querySelectorAll('[data-more]')
    let more = document.querySelector('.proSec__moreAnchor')
    let items = document.querySelectorAll('.proSec__item')
    let lastIndex = 5, maxIndex = 8

    trigger.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault()

            items.forEach((element, index) => {
                
                if(index > lastIndex && index <= maxIndex) {
                    element.classList.add('is-show')
                }
            });

            maxIndex+=3
        })
    });
}