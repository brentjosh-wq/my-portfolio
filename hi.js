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


document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const successPopup = document.getElementById("successPopup");
    const closePopup = document.getElementById("closePopup");

    const sendBtn = contactForm.querySelector(".send-btn");

    // Initialize EmailJS
    emailjs.init({
        publicKey: "h3FXlu1H91xzcH6Hr"
    });

    // Send message
    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        sendBtn.disabled = true;
        sendBtn.textContent = "Sending...";

        emailjs.sendForm(
            "service_qljogc8",
            "template_laleuce",
            contactForm
        )

        .then(function(response) {

            console.log("SUCCESS!", response.status);

            // Reset form after successful sending
            contactForm.reset();

            // Show your existing popup animation
            successPopup.classList.add("active");

        })

        .catch(function(error) {

            console.error("EMAILJS ERROR:", error);

            alert("Sorry! Your message could not be sent. Please try again.");

        })

        .finally(function() {

            sendBtn.disabled = false;
            sendBtn.textContent = "Send Message →";

        });

    });

    // Close popup button
    closePopup.addEventListener("click", function() {
        successPopup.classList.remove("active");
    });

    // Close popup when clicking outside
    successPopup.addEventListener("click", function(event) {

        if (event.target === successPopup) {
            successPopup.classList.remove("active");
        }

    });

});


