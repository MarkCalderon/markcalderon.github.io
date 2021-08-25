import AOS from 'aos';

export const aos = () => {
    AOS.init({
        once: true,
        delay: 500,
        duration: 2000,
    })
}