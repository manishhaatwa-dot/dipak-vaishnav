/* =========================================================
   DIPAK VAISHNAV
   PROFESSIONAL PROFILE WEBSITE
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   DOM READY
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initMobileMenu();

    initHeaderScroll();

    initSmoothNavigation();

    initScrollReveal();

    initAwardAnimations();

    initCurrentYear();

});


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initMobileMenu() {

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (!menuToggle || !mainNav) {
        return;
    }


    menuToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                mainNav.classList.toggle("active");


            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );


            menuToggle.textContent =
                isOpen ? "?" : "?";

        }
    );


    const navLinks =
        mainNav.querySelectorAll("a");


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.textContent =
                    "?";

            }
        );

    });


    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                mainNav.classList.contains("active")
            ) {

                mainNav.classList.remove(
                    "active"
                );


                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );


                menuToggle.textContent =
                    "?";

            }

        }
    );

}


/* =========================================================
   HEADER SCROLL EFFECT
   ========================================================= */

function initHeaderScroll() {

    const header =
        document.querySelector(
            ".site-header"
        );


    if (!header) {
        return;
    }


    const updateHeader =
        () => {

            if (window.scrollY > 40) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );

            }

        };


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );


    updateHeader();

}


/* =========================================================
   SMOOTH NAVIGATION
   ========================================================= */

function initSmoothNavigation() {

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach((link) => {

        link.addEventListener(
            "click",
            (event) => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const header =
                    document.querySelector(
                        ".site-header"
                    );


                const headerHeight =
                    header
                        ? header.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight -
                    12;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });

}


/* =========================================================
   GENERAL SCROLL REVEAL
   ========================================================= */

function initScrollReveal() {

    const elements =
        document.querySelectorAll(
            `
            .about-content,
            .about-highlight,
            .role-card,
            .experience-visual,
            .experience-content,
            .expertise-card,
            .statement-card,
            .contact-card
            `
        );


    if (!elements.length) {
        return;
    }


    if (
        !("IntersectionObserver" in window)
    ) {

        elements.forEach(
            (element) => {

                element.classList.add(
                    "reveal",
                    "show"
                );

            }
        );

        return;

    }


    elements.forEach(
        (element) => {

            element.classList.add(
                "reveal"
            );

        }
    );


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "show"
                        );


                        obs.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    elements.forEach(
        (element) => {

            observer.observe(
                element
            );

        }
    );

}


/* =========================================================
   AWARD ZIG-ZAG ANIMATION
   ========================================================= */

function initAwardAnimations() {

    const awards =
        document.querySelectorAll(
            ".award-item"
        );


    if (!awards.length) {
        return;
    }


    /*
       If browser does not support
       IntersectionObserver, show
       everything normally.
    */

    if (
        !("IntersectionObserver" in window)
    ) {

        awards.forEach(
            (award) => {

                award.classList.add(
                    "animate"
                );

            }
        );

        return;

    }


    const observer =
        new IntersectionObserver(
            (entries, obs) => {

                entries.forEach(
                    (entry) => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        entry.target.classList.add(
                            "animate"
                        );


                        obs.unobserve(
                            entry.target
                        );

                    }
                );

            },
            {
                threshold: 0.18
            }
        );


    awards.forEach(
        (award) => {

            observer.observe(
                award
            );

        }
    );

}


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

function initActiveNavigation() {

    const sections =
        document.querySelectorAll(
            "main section[id]"
        );


    const links =
        document.querySelectorAll(
            '.main-nav a[href^="#"]'
        );


    if (
        !sections.length ||
        !links.length
    ) {
        return;
    }


    const updateActive =
        () => {

            let current =
                "";


            const position =
                window.scrollY +
                window.innerHeight * 0.3;


            sections.forEach(
                (section) => {

                    const top =
                        section.offsetTop;


                    const bottom =
                        top +
                        section.offsetHeight;


                    if (
                        position >= top &&
                        position < bottom
                    ) {

                        current =
                            section.id;

                    }

                }
            );


            links.forEach(
                (link) => {

                    const href =
                        link.getAttribute(
                            "href"
                        );


                    if (
                        href ===
                        `#${current}`
                    ) {

                        link.classList.add(
                            "active"
                        );

                    } else {

                        link.classList.remove(
                            "active"
                        );

                    }

                }
            );

        };


    window.addEventListener(
        "scroll",
        updateActive,
        { passive: true }
    );


    updateActive();

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

function initCurrentYear() {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (!year) {
        return;
    }


    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   PROFILE CARD MOUSE EFFECT
   ========================================================= */

function initProfileTilt() {

    const profileCard =
        document.querySelector(
            ".profile-card"
        );


    const heroProfile =
        document.querySelector(
            ".hero-profile"
        );


    if (
        !profileCard ||
        !heroProfile
    ) {
        return;
    }


    if (
        !window.matchMedia(
            "(hover: hover)"
        ).matches
    ) {
        return;
    }


    heroProfile.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                heroProfile.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateY =
                ((x - centerX) /
                    centerX) *
                3;


            const rotateX =
                ((centerY - y) /
                    centerY) *
                3;


            profileCard.style.transform =
                `
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                rotateZ(1deg)
                translateY(-5px)
                `;

        }
    );


    heroProfile.addEventListener(
        "mouseleave",
        () => {

            profileCard.style.transform =
                "rotate(2deg)";

        }
    );

}


/* =========================================================
   INITIALIZE OPTIONAL EFFECTS
   ========================================================= */

initActiveNavigation();

initProfileTilt();


/* =========================================================
   EXTERNAL LINK SAFETY
   ========================================================= */

document
    .querySelectorAll(
        'a[target="_blank"]'
    )
    .forEach(
        (link) => {

            link.setAttribute(
                "rel",
                "noopener noreferrer"
            );

        }
    );