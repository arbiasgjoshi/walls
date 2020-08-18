import './styles/index.scss';


import './styles/index.scss'
import {gsap, TimelineMax} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

import GIF from './images/logo-animation.gif';
import FirstSvg from './images/svg-optimized/far-bg.svg';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TimelineMax);

function scrollTrigger() {

    console.log(FirstSvg);

    const myIcon = new Image();
    myIcon.src = GIF;
    console.log(myIcon);

    setTimeout(function() {
        document.getElementById('section-one').classList.add('loaded');
        document.getElementById('gif-wrapper').appendChild(myIcon);
    }, 2000);

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

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-four',
            start: "100% bottom",
            // end: "top 10%",
            scrub: 0.5,
            x: "50vw",
            // markers: true
        }
    })
        .from('#second-bg', {x: "20vw", ease: "linear"})
        .to('#second-bg', {x: "0", ease: "linear"});

    gsap.timeline({
        scrollTrigger: {
            trigger: '#section-four',
            start: "100% bottom",
            // end: "top 10%",
            scrub: 0.5,
            x: "40vw",
            // markers: true
        }
    })
        .from('#second-bg', {x: "15vw", ease: "linear"})
        .to('#third-bg', {x: "0", ease: "linear"});

    // const gradientTween = new TimelineMax();
    // const container = document.getElementsByClassName("svg-container");
    //
    // const colors = [
    //     {color: "#e42513"},
    //     {color: "#ff527f"},
    //     {color: "#00a0d6"},
    //     {color: "#46a916"},
    // ];
    //
    // // document.getElementById('gif').src = gif;
    //
    // for (let i = 0; i < colors.length; i++) {
    //     gradientTween.to(container, 1, {
    //         backgroundImage:
    //             "-webkit-linear-gradient(-4deg, " +
    //             colors[i].left +
    //             " 0%, " +
    //             colors[i].middle +
    //             " 50%, " +
    //             colors[i].right +
    //             " 90%)"
    //     });
    // }
}

scrollTrigger();