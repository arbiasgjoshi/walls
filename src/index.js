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
            gsap.to('.container', {
                duration: 1,
                scrollTo: {
                    x: "500",
                    y: 0
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
    container = document.querySelector('.container').offsetWidth,
    section = container / 6,
    leftOver = container - (section * 2);

function scrollTrigger() {

    gsap.from('#section-one .first-mask', {
        scale: 2,
        opacity: 0,
        duration: 0.5,
        ease: "linear"
    })
    gsap.to('#section-one .first-mask', {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "linear"
    });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-three',
                start: `bottom+=${section - 50} center`,
                scrub: 1,
                end: () => "+=" + (container - section*2.25),
            }
        })
        .fromTo('.bike-rolling', {x: "0",ease: "linear"}, {x: "286vw", ease: "linear"})
}

function parallaxBgs() {
    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section - 400} center`,
                scrub: 1,
                end: () => "+=" + container
            }
        })
        .from('#firstBg svg', {
            x: "-1vw",
            ease: "linear"
        })
        .to('#firstBg svg', {
            x: "-40vw",
            ease: "linear"
        });


    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section - 400} center`,
                scrub: 1,
                end: () => "+=" + container
            }
        })
        .from('#secondBg svg', {
            x: "-1vw",
            ease: "linear"
        })
        .to('#secondBg svg', {
            x: "-42vw",
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section - 400} center`,
                scrub: 1,
                end: () => "+=" + container
            }
        })
        .from('#thirdBg svg', {
            x: "-1vw",
            ease: "linear"
        })
        .to('#thirdBg svg', {
            x: "-40vw",
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section - 400} center`,
                scrub: 1,
                end: () => "+=" + container
            }
        })
        .from('#fourthBg svg', {
            x: "-1vw",
            ease: "linear"
        })
        .to('#fourthBg svg', {
            x: "-42vw",
            ease: "linear"
        });
}

function circlePhoto() {

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: "bottom+=50 top",
                once: true,
                scrub: false,
                end: () => "+=" + leftOver
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
                trigger: '#section-four',
                start: `bottom+=${section * 2.5} center-=120`,
                once: true,
                scrub: false,
                end: () => "+=" + leftOver
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
                trigger: '#section-five',
                start: `bottom+=${section * 3.5} center-=150`,
                once: true,
                end: () => "+=" + leftOver
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
}

function subPageLinks() {
    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: "bottom+=75 top",
                once: true,
                scrub: false,
                end: () => "+=" + leftOver
            }
        })
        .from('a.first-sub', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('a.first-sub', {
            scale: 1,
            y: 0,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-four',
                start: `bottom+=${section * 2.5} center-=150`,
                once: true,
                scrub: false,
                end: () => "+=" + leftOver
            }
        })
        .from('a.second-sub', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('a.second-sub', {
            scale: 1,
            y: 0,
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-five',
                start: `bottom+=${section * 3.85} center-=150`,
                once: true,
                end: () => "+=" + leftOver
            }
        })
        .from('a.third-sub', {
            scale: 0,
            y: 100,
            ease: "linear"
        })
        .to('a.third-sub', {
            scale: 1,
            y: 0,
            ease: "linear"
        });
}


function backgroundChange() {
    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
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
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
            }
        })
        .from('#firstBg svg .firstBg', {
            fill: '#e12513',
            ease: "linear"
        })
        .to('#firstBg svg .firstBg', {
            fill: '#ff92ad',
            ease: "linear"
        })
        .to('#firstBg svg .firstBg', {
            fill: '#6bbad5',
            ease: "linear"
        })
        .to('#firstBg svg .firstBg', {
            fill: '#a0cd8a',
            ease: "linear"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
            }
        })
        .from('#secondBg svg .secondBg', {
            fill: '#e42513',
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#e54a72',
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#008fbf',
            ease: "none"
        })
        .to('#secondBg svg .secondBg', {
            fill: '#46a915',
            ease: "none"
        });

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
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
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
            }
        })
        .from('#fourthBg svg .st0', {
            fill: '#641007',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .st0', {
            fill: '#a33451',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .st0', {
            fill: '#005f80',
            duration: 2,
            ease: "none"
        })
        .to('#fourthBg svg .st0', {
            fill: '#2a650d',
            duration: 2,
            ease: "none"
        });

}

function sunAnimation() {
    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 82} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
            }
        })
        .from('.sun', {
            x: '0',
            duration: 2,
            ease: "linear"
        })
        .to('.sun', {
            x: "90vw",
            duration: 2,
            ease: "linear"
        })
        
        .to('.sun', {
            x: "190vw",
            duration: 2,
            ease: "linear"
        })
        
        .to('.sun', {
            x: "290vw",
            duration: 2,
            ease: "linear"
        })

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container * 0.45)
            }
        })
        .from('.sun svg', {
            scale: "1",
            y: "0",
            ease: "linear"
        })
        .to('.sun svg', {
            scale: '0.65',
            y: '10%',
            marginTop: 0,
            ease: "linear"
        })
        

    gsap.timeline({
            scrollTrigger: {
                trigger: '#section-two',
                start: `center+=${section + 100} center`,
                scrub: 1,
                end: () => "+=" + (container - section*1.5)
            }
        })
        .from('.sun svg .st1', {
            fill: '#e12513',
            ease: "linear"
        })
        .to('.sun svg .st1', {
            fill: '#ff92ad',
            ease: "linear"
        })
        .to('.sun svg .st1', {
            fill: '#ffffff',
            opacity: 0.1,
            ease: "linear"
        })
        .to('.sun svg .st1', {
            fill: '#ffffff',
            opacity: 0.1,
            ease: "linear"
        })
        .to('.sun svg .st1', {
            fill: '#ffffff',
            opacity: 0.1,
            ease: "linear"
        });
}


scrollTrigger();
horizontalScroll();
backgroundChange();
parallaxBgs();

circlePhoto();
subPageLinks();
sunAnimation();