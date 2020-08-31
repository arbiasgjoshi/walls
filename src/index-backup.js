import './styles/index.scss';

import './styles/index.scss'
import {
    gsap,
    TimelineMax
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import {
    ScrollToPlugin
} from "gsap/ScrollToPlugin";

import GIF from './images/logo-animation.gif';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TimelineMax);

document.getElementById('toggleMenu').onclick = function () {
    this.classList.toggle('is-active');
    const menu = document.getElementById('mainMenu');
    const classes = menu.classList;
    classes.toggle('show');
}

function horizontalScroll() {
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

    setTimeout(function () {
        const myIcon = new Image();
        myIcon.src = GIF;
        document.getElementById('section-one').classList.add('loaded');
        document.getElementById('gif-wrapper').appendChild(myIcon);
    }, 2000);
}



const
    panelWidth = document.querySelector(".panels .panel").offsetWidth,
    container = document.querySelector('.container').offsetWidth,
    section = container / 6,
    leftOver = container - (section * 2);

function scrollTrigger() {

    setTimeout(function () {
        gsap.to('#section-one .second-mask', {
            opacity: 1,
            duration: 0.5,
            ease: "linear"
        });
    }, 2500)

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#firstBg svg', {
            x: "5vw",
            ease: "linear"
        })
        .to('#firstBg svg', {
            x: "-54vw",
            ease: "linear"
        });


    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#secondBg svg', {
            x: "0vw",
            ease: "linear"
        })
        .to('#secondBg svg', {
            x: "-48vw",
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#thirdBg svg', {
            x: "0vw",
            ease: "linear"
        })
        .to('#thirdBg svg', {
            x: "-38vw",
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#fourthBg svg', {
            x: "0vw",
            ease: "linear"
        })
        .to('#fourthBg svg', {
            x: "-35vw",
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 100} top`,
                scrub: 1,
                end: () => "+=" + container
            }
        })
        .from('.bike-rolling', {
            x: "0vw",
            opacity: 1,
            ease: "linear"
        })
        .to('.bike-rolling', {
            x: "290vw",
            opacity: 1,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                once: true,
                start: "bottom+=100vh top",
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('.circle-photo.one', {
            y: 120,
            opacity: 0,
            duration: 0.5,
            ease: "linear"
        })
        .to('.circle-photo.one', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-three',
                start: "bottom+=100vh top",
                once: true,
                scrub: false,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('#first-sub a', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('#first-sub a', {
            scale: 1,
            y: 0,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-four',
                start: "bottom+=250vh top",
                once: true,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('.circle-photo.two', {
            y: 120,
            opacity: 0,
            duration: 0.5,
            ease: "linear"
        })
        .to('.circle-photo.two', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "linear"
        });


    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-four',
                start: "bottom+=250vh top",
                once: true,
                scrub: false,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('#second-sub a', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('#second-sub a', {
            scale: 1,
            y: 0,
            ease: "linear"
        });



    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-five',
                start: "bottom+=280vh top",
                once: true,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('.circle-photo.three', {
            y: 120,
            opacity: 0,
            duration: 0.5,
            ease: "linear"
        })
        .to('.circle-photo.three', {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-five',
                start: "bottom+=300vh top",
                once: true,
                end: () => "+=" + document.querySelector(".container").offsetWidth
            }
        })
        .from('#third-sub a', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('#third-sub a', {
            scale: 1,
            y: 0,
            ease: "linear"
        });

}

function backgroundChange() {
    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('.bodyBg svg .bodyBg', {
            fill: '#e42513',
            ease: "linear"
        })
        .to('.bodyBg svg .bodyBg', {
            fill: '#ff92ad',
            ease: "linear"
        })
        .to('.bodyBg svg .bodyBg', {
            fill: '#00a0d6',
            ease: "linear"
        })
        .to('.bodyBg svg .bodyBg', {
            fill: '#46a916',
            ease: "linear"
        });



    // TODO Refactor BG Change of Sections
    // Background Color Transition of SVGS

    gsap.timeline({
            yoyo: true,
            paused: true,
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#firstBg svg .firstBg', {
            fill: '#ff92ad',
            duration: 2,
            ease: "linear"
        })
        .from('#firstBg svg .firstBg', {
            fill: '#6bbad5',
            duration: 2,
            ease: "linear"
        })
        .to('#firstBg svg .firstBg', {
            fill: '#a0cd8a',
            duration: 2,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#secondBg svg .secondBg', {
            fill: '#e42513',
            duration: 2,
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#e54a72',
            duration: 2,
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#008fbf',
            duration: 2,
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#46a915',
            duration: 2,
            ease: "none"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#thirdBg svg .midground', {
            fill: '#961f15',
            duration: 2,
            ease: "none"
        })
        .to('#thirdBg svg .midground', {
            fill: '#bf3d5f',
            duration: 2,
            ease: "none"
        })
        .to('#thirdBg svg .midground', {
            fill: '#006f95',
            duration: 2,
            ease: "none"
        })
        .to('#thirdBg svg .midground', {
            fill: '#3f9814',
            duration: 2,
            ease: "none"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `bottom+=${section + 300} bottom`,
                scrub: 1,
                end: () => "+=" + leftOver
            }
        })
        .from('#fourthBg svg .foreground', {
            fill: '#641007',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .foreground', {
            fill: '#a33451',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .foreground', {
            fill: '#005f80',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .foreground', {
            fill: '#2a650d',
            duration: 2,
            ease: "none"
        });

}

function sunAnimation() {


    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-three',
                start: `center+=${section + 100} center`,
                once: true,
                scrub: 1,
                end: () => "+=" + (document.querySelector(".container").offsetWidth / 2)
            }
        })
        .from('.sun', {
            x: '0',
            ease: "linear"
        })
        .to('.sun', {
            x: "100vw",
            ease: "linear"
        })

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-three',
                start: `center+=${section + 100} center`,
                once: true,
                scrub: 1,
                end: () => "+=" + (document.querySelector(".container").offsetWidth / 2)
            }
        })
        .from('.sun svg', {
            scale: "1",
            y: "0",
            ease: "linear"
        })
        .to('.sun svg', {
            scale: '0.6',
            y: '10%',
            ease: "linear"
        })

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-three',
                start: "center+=100vw center",
                once: true,
                scrub: 1,
                end: () => "+=" + (document.querySelector(".container").offsetWidth / 2)
            }
        })
        .from('.sun svg .st1', {
            fill: '#e42513',
            ease: "linear"
        })
        .to('.sun svg .st1', {
            fill: '#ff92ad',
            ease: "linear"
        })
}

horizontalScroll();
backgroundChange();
sunAnimation();

setTimeout(function () {
    scrollTrigger();
}, 1000);