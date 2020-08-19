import './styles/index.scss';

import './styles/index.scss'
import {gsap, TimelineMax} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

import GIF from './images/logo-animation.gif';

import firstBg from './images/svg-optimized/far-bg.svg';
import secondBg from './images/svg-optimized/bg.svg';
import thirdBg from './images/svg-optimized/midground.svg'
import fourthBg from './images/svg-optimized/foreground.svg'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TimelineMax);

function scrollTrigger() {

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        horizontal: true,
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 0,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });

    document.querySelectorAll(".section-anchors button").forEach((btn) => {
        btn.addEventListener("click", () => {
            gsap.to('.container', 1.5, {
                scrollTo: {
                    y: "#section-" + btn.id,
                    x: 0
                }
            });
        });
    });

    setTimeout(function () {
        const myIcon = new Image();
        myIcon.src = GIF;
        document.getElementById('section-one').classList.add('loaded');
        document.getElementById('gif-wrapper').appendChild(myIcon);
    }, 2000);

    const images = [
        {src: firstBg, id: 'firstBg', cl: 'first-bg'},
        {src: secondBg, id: 'secondBg', cl: 'second-bg'},
        {src: thirdBg, id: 'thirdBg', cl: 'third-bg'},
        {src: fourthBg, id: 'fourthBg', cl: 'fourth-bg'}
    ];

    images.forEach(image => {
        const img = new Image();
        img.src = image.src;
        const imgId = image.cl;
        img.id = imgId;
        const id = image.id;
        document.getElementById(id).appendChild(img);
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#firstBg img', {x: "5vw", ease: "linear"})
        .to('#firstBg img', {x: "-50vw", ease: "linear"});


    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "center center",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#secondBg img', {x: "0vw", ease: "linear"})
        .to('#secondBg img', {x: "-43vw", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "center center",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#thirdBg img', {x: "0vw", ease: "linear"})
        .to('#thirdBg img', {x: "-33vw", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#fourthBg img', {x: "0vw", ease: "linear"})
        .to('#fourthBg img', {x: "-30vw", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-three',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('.bike-rolling', {x: "0vw", opacity: 1, ease: "linear"})
        .to('.bike-rolling', {x: "290vw", opacity: 1, ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-three',
            start: "bottom+=150vh top",
            once: true,
            scrub: false,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#first-sub a', {y: -150, opacity: 0, ease: "linear"})
        .to('#first-sub a', {y: 0, opacity: 1, ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-four',
            start: "bottom+=50% top",
            once: true,
            scrub: false,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#second-sub a', {y: -150, opacity: 0, ease: "linear"})
        .to('#second-sub a', {y: 0, opacity: 1, ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-six',
            start: "bottom+=100% top",
            once: true,
            scrub: false,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#third-sub a', {y: -150, opacity: 0, ease: "linear"})
        .to('#third-sub a', {y: 0, opacity: 1, ease: "linear"});


}

scrollTrigger();

