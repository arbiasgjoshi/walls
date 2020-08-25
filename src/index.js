import './styles/index.scss';

import './styles/index.scss'
import {gsap, TimelineMax} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

import GIF from './images/logo-animation.gif';

// import firstBg from './images/svg-optimized/far-bg.svg';
// import secondBg from './images/svg-optimized/bg.svg';
// import thirdBg from './images/svg-optimized/midground.svg'
// import fourthBg from './images/svg-optimized/foreground.svg'

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

    // TODO Refactor this jump to sections

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

    // Append icons

    setTimeout(function () {
        const myIcon = new Image();
        myIcon.src = GIF;
        document.getElementById('section-one').classList.add('loaded');
        document.getElementById('gif-wrapper').appendChild(myIcon);
    }, 2000);

    // const images = [
    //     // {src: firstBg, id: 'firstBg', cl: 'first-bg'},
    //     // {src: secondBg, id: 'secondBg', cl: 'second-bg'},
    //     // {src: thirdBg, id: 'thirdBg', cl: 'third-bg'},
    //     // {src: fourthBg, id: 'fourthBg', cl: 'fourth-bg'}
    // ];
    //
    // images.forEach(image => {
    //     const img = new Image();
    //     img.src = image.src;
    //     const imgId = image.cl;
    //     img.id = imgId;
    //     const id = image.id;
    //     document.getElementById(id).appendChild(img);
    // });

    const bgArray = [
        "#e42513", "#ff92ad", "#00a0d6", "#46a916"
    ];

    const redArray = [
        "#641007", "#961f15", "#e42513"
    ];

    const pinkArray = [
        "#a33451", "#bf3d5f", "#e54a72", "#ff92ad"
    ];

    const blueArray = [
        '#005f80', '#006f95', '#008fbf', '#6bbad5'
    ];

    const greenArray = [
        '#2a650d', '#3f9814', '#46a915', '#a0cd8a',
    ];

    // TODO Refactor BG Change of Sections

    gsap.timeline({
        yoyo: true,
        paused: true,
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#firstBg svg .firstBg', {fill: '#ff92ad', duration: 2, ease: "none"})
        .to('#firstBg svg .firstBg', {fill: '#ff92ad', duration: 2, ease: "none"})
        .to('#firstBg svg .firstBg', {fill: '#6bbad5', duration: 2, ease: "none"})
        .to('#firstBg svg .firstBg', {fill: '#a0cd8a', duration: 2, ease: "none"});

    gsap.timeline({
        yoyo: true,
        paused: true,
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#secondBg svg .secondBg', {fill: '#e42513', duration: 2, ease: "none"})
        .to('#secondBg svg .secondBg', {fill: '#e54a72', duration: 2, ease: "none"})
        .to('#secondBg svg .secondBg', {fill: '#008fbf', duration: 2, ease: "none"})
        .to('#secondBg svg .secondBg', {fill: '#46a915', duration: 2, ease: "none"});

    gsap.timeline({
        yoyo: true,
        paused: true,
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#thirdBg svg .midground', {fill: '#961f15', duration: 2, ease: "none"})
        .to('#thirdBg svg .midground', {fill: '#bf3d5f', duration: 2, ease: "none"})
        .to('#thirdBg svg .midground', {fill: '#006f95', duration: 2, ease: "none"})
        .to('#thirdBg svg .midground', {fill: '#3f9814', duration: 2, ease: "none"});

    gsap.timeline({
        yoyo: true,
        paused: true,
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#fourthBg svg .foreground', {fill: '#641007', duration: 2, ease: "none"})
        .to('#fourthBg svg .foreground', {fill: '#a33451', duration: 2, ease: "none"})
        .to('#fourthBg svg .foreground', {fill: '#005f80', duration: 2, ease: "none"})
        .to('#fourthBg svg .foreground', {fill: '#2a650d', duration: 2, ease: "none"});


    gsap.timeline({
        yoyo: true,
        paused: true,
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('body', {backgroundColor: 'rgb(228, 37, 19)', duration: 2, ease: "none"})
        .to('body', {backgroundColor: 'rgb(255,146, 173)', duration: 2, ease: "none"})
        .to('body', {backgroundColor: 'rgb(0, 160, 214)', duration: 2, ease: "none"})
        .to('body', {backgroundColor: 'rgb(70, 169, 22)', duration: 2, ease: "none"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#firstBg svg', {x: "5vw", ease: "linear"})
        .to('#firstBg svg', {x: "-50vw", ease: "linear"});


    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "center center",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#secondBg svg', {x: "0vw", ease: "linear"})
        .to('#secondBg svg', {x: "-43vw", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "center center",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#thirdBg svg', {x: "0vw", ease: "linear"})
        .to('#thirdBg svg', {x: "-33vw", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-two',
            start: "left top",
            scrub: 1,
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    })
        .from('#fourthBg svg', {x: "0vw", ease: "linear"})
        .to('#fourthBg svg', {x: "-30vw", ease: "linear"});

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

