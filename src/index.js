import './styles/index.scss'

import SweetScroll from 'sweet-scroll';
import ScrollMagic from 'scrollmagic';
import {TimelineMax} from "gsap/types/gsap-core";


// function initializeScroller() {
//     let controller = new ScrollMagic.controller();
//
//
// }

document.addEventListener(
    'DOMContentLoaded',
    () => {
        new SweetScroll({
            /* some options */
            trigger: 'a[href^="#"]',
            vertical: false,
            horizontal: true
        });
    },
    document.getElementById('js-wrapper'),
);
