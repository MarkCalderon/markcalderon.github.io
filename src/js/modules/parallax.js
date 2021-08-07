export const parallax = () => {
    window.addEventListener("scroll", function() {
    const distance = window.scrollY;
    document.querySelector(".js-panoObj").style.transform = `translateY(${distance * 0.1}px)`
    document.querySelector(".js-panoCon").style.transform = `translateY(${distance * 0.3}px)`
    })
}