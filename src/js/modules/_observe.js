export const observe = () => {
    const element = document.querySelector('.test')

    const options = {}

    const observer = new IntersectionObserver(function(entries, observer) {

        entries.forEach(entry => {
            console.log(entry)
        })
    }, options)


    observer.observe(element)
}
