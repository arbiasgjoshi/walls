import './styles/index.scss';


import './styles/index.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function scrollTrigger () {


    let sections = gsap.utils.toArray(".section");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });

    // let sections = gsap.utils.toArray(".section");
    //
    // gsap.to(sections, {
    //     yPercent: -100 * (sections.length - 1),
    //     ease: "none",
    //     horizontal: true,
    //     scrollTrigger: {
    //         trigger: "#js-wrapper",
    //         pin: true,
    //         scrub: 1,
    //         // snap: 1,
    //         // end: () => "+=" + document.querySelector("#js-wrapper").offsetWidth
    //     }
    // });
    //
    // gsap.to('.layer-box', {
    //     // xPercent: -100 * (sections.length - 1),
    //     horizontal: true,
    //     scrollTrigger: {
    //         trigger: '.layer-box',
    //         // start: 'left center',
    //         toggleActions: 'restart reverse'
    //     },
    //     x: 50,
    //     y: 300,
    //     duration: 3
    // });
}
//
import SweetScroll from 'sweet-scroll';

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

scrollTrigger();