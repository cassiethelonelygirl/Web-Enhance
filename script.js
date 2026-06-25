// ==========================
// GSAP CONFIGURATION
// ==========================

gsap.registerPlugin(ScrollTrigger);

// ==========================
// HERO ANIMATION
// STAGING + ARC + TIMING
// ==========================

gsap.from(".hero-content", {

    opacity: 0,

    x: -300,

    y: 100,

    duration: 2,

    ease: "power4.out"

});

// ==========================
// FLOATING ICONS
// SECONDARY ACTION
// ==========================

gsap.to(".floating-icons span", {

    y: -20,

    duration: 1.5,

    repeat: -1,

    yoyo: true,

    stagger: 0.2,

    ease: "sine.inOut"

});

// ==========================
// SECTION TITLES
// EXAGGERATION
// ==========================

gsap.utils.toArray(".section h2").forEach((title) => {

    gsap.from(title, {

        scale: 0,

        opacity: 0,

        duration: 1.2,

        ease: "elastic.out(1, 0.4)",

        scrollTrigger: {
            trigger: title,
            start: "top 85%"
        }

    });

});

// ==========================
// CARD ANIMATION
// OVERLAPPING ACTION
// FOLLOW THROUGH
// ==========================

gsap.utils.toArray(".card-container").forEach((container) => {

    gsap.from(container.children, {

        opacity: 0,

        y: 150,

        scale: 0.8,

        duration: 1.2,

        stagger: 0.25,

        ease: "back.out(1.7)",

        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }

    });

});

// ==========================
// PARALLAX HERO
// ARC MOTION
// ==========================

gsap.to(".hero", {

    backgroundPosition: "50% 70%",

    ease: "none",

    scrollTrigger: {

        trigger: ".hero",

        start: "top top",

        end: "bottom top",

        scrub: true

    }

});

// ==========================
// NAVIGATION FADE-IN
// STAGING
// ==========================

gsap.from("nav", {

    y: -100,

    opacity: 0,

    duration: 1.2,

    ease: "power3.out"

});

// ==========================
// BUTTON POP-IN
// ANTICIPATION
// ==========================

gsap.from(".explore-btn", {

    scale: 0,

    opacity: 0,

    duration: 1,

    delay: 1,

    ease: "elastic.out(1,0.5)"

});

// ==========================
// COUNTER ANIMATION
// TIMING
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    const counters = document.querySelectorAll(".card h3");

    counters.forEach(counter => {

        const text = counter.innerText;

        if (text.includes("+")) {

            const target = parseInt(text);

            let current = 0;

            const increment = Math.ceil(target / 60);

            const updateCounter = () => {

                current += increment;

                if (current >= target) {

                    counter.innerText = target + "+";

                } else {

                    counter.innerText = current + "+";

                    requestAnimationFrame(updateCounter);

                }

            };

            ScrollTrigger.create({

                trigger: counter,

                start: "top 90%",

                once: true,

                onEnter: updateCounter

            });

        }

    });

});

// ==========================
// EXPLORE BUTTON
// SCROLL TO MOVIES
// ==========================

document.querySelector(".explore-btn")
.addEventListener("click", () => {

    document.querySelector("#movies")
    .scrollIntoView({

        behavior: "smooth"

    });

});

// ==========================
// LOGO GLOW EFFECT
// APPEAL
// ==========================

gsap.to(".logo", {

    textShadow: "0 0 15px #ffffff",

    duration: 1.5,

    repeat: -1,

    yoyo: true,

    ease: "power1.inOut"

});

// ==========================
// FOOTER REVEAL
// SLOW IN & SLOW OUT
// ==========================

gsap.from("footer", {

    opacity: 0,

    y: 100,

    duration: 1.5,

    ease: "power2.out",

    scrollTrigger: {

        trigger: "footer",

        start: "top 90%"

    }

});