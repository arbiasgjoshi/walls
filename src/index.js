import './styles/index.scss';


import './styles/index.scss'
import { gsap, TimelineMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TimelineMax);

function scrollTrigger () {
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".container",
            pin: true,
            scrub: 1,
            snap: 0,
            // base vertical scrolling on how wide the container is so it feels more natural.
            end: () => "+=" + document.querySelector(".container").offsetWidth
        }
    });

    document.querySelectorAll(".section-anchors button").forEach((btn) => {

        btn.addEventListener("click", () => {
            // TODO fix the active class for buttons
            // const element = document.getElementById(btn.id);
            // if(element.classList.contains('active')) {
            //     element.classList.remove("active");
            // } else {
            //     element.classList.add("active");
            // }

            gsap.to('.container', 1.5, {
                scrollTo: {
                    y: "#section-" + btn.id,
                    x: 0
                }
            });
        });
    });

    const gradientTween = new TimelineMax();
    const container = document.getElementsByClassName("svg-container");

    const colors = [
        { color: "#e42513" },
        { color: "#ff527f" },
        { color: "#00a0d6" },
        { color: "#46a916" },
    ];

    for (let i = 0; i < colors.length; i++) {
        gradientTween.to(container, 1, {
            backgroundImage:
                "-webkit-linear-gradient(-4deg, " +
                colors[i].left +
                " 0%, " +
                colors[i].middle +
                " 50%, " +
                colors[i].right +
                " 90%)"
        });
    }
}

scrollTrigger();