import { polyfill } from './modules/polyfill'
import { parallax } from './modules/parallax'
import { accordion } from './modules/accordion'
import { contact } from './modules/contact'
import { more } from './modules/more'
import { aos } from './modules/aos'
import { swiper } from './modules/_swiper'

document.addEventListener('DOMContentLoaded', () => {
    polyfill()
    parallax()
    contact()
    accordion()
    more()
    aos()
    swiper()
})