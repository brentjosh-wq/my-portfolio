document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(`
        .intro,
        .shortp,
        .profile-image,
        .abouthead,
        .about,
        .skills,
        .skills-section .skill-category,
        .projects-header,
        .project-card,
        .contact-header,
        .contact-info,
        .contact-form,
        .contact-card
    `);

    elements.forEach(function (element) {
        element.classList.add("scroll-reveal");
    });

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            } else {
                entry.target.classList.remove("is-visible");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });

});

document.addEventListener("DOMContentLoaded", function () {

    const typingText = document.querySelector(".typing-text");

    const words = [
        "I'm Brent Josh!"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (deleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        typingText.textContent = currentWord.substring(0, charIndex);

        let speed = deleting ? 50 : 100;

        if (!deleting && charIndex === currentWord.length) {
            deleting = true;
            speed = 1500;
        } else if (deleting && charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});

const contactForm = document.getElementById("contactForm");
const successPopup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

   
    successPopup.classList.add("active");

    contactForm.reset();

});


closePopup.addEventListener("click", function() {
    successPopup.classList.remove("active");
});

successPopup.addEventListener("click", function(event) {
    if (event.target === successPopup) {
        successPopup.classList.remove("active");
    }
});