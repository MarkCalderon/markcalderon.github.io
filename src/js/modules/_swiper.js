export const swiper = () => {
    let slides = document.querySelectorAll('.swiper-slide');
    let prevIndex;

    function getPrevSlide(index) {
        prevIndex = index;
    }

    const swiper = new Swiper('.kvSec__gallery', {
        // loop: true,
        centeredSlides: true,
        effect: "fade",
        init: false,
        speed: 7000,
        touchRatio: 0,
        shortSwipes: false,
        longSwipes: false,
        preventInteractionOnTransition: true,
        autoplay: {
            delay: 7000,
            disableOnInteraction: false,
        },

        on: {
            init: function (e) {
                console.log('onstart : ' + e.activeIndex);
                slides[e.activeIndex].classList.add('u-animate')
            },

            slideChange: function(e) {
                getPrevSlide(swiper.previousIndex);
            },

            slideChangeTransitionStart: function (e) {
                console.log('new : ' + e.activeIndex);
                slides[e.activeIndex].classList.add('u-animate');
            },

            slideChangeTransitionEnd: function (e) {
                console.log('prev : ' + prevIndex);
                slides[prevIndex].classList.remove('u-animate');
            },
        },
    });

    swiper.init()
}