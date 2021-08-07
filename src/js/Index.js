import { polyfill } from './modules/polyfill'
import { parallax } from './modules/parallax'
import { accordion } from './modules/accordion'
import { contact } from './modules/contact'

document.addEventListener('DOMContentLoaded', () => {
    polyfill()
    parallax()
    contact()
    accordion()
})