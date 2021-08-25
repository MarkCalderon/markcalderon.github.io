import simpleParallax from 'simple-parallax-js';

export const parallax = () => {

    let panoObjList = document.querySelectorAll(".js-panoObj")
    new simpleParallax(panoObjList, {
        delay: .6,
        transition: 'cubic-bezier(0,0,0,1)'
    })
}