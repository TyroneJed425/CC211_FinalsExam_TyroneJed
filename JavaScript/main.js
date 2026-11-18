
document.addEventListener("DOMContentLoaded", function () {

    // =================================
    // COPYRIGHT YEAR
    // =================================

    document.querySelectorAll(".current-year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });


    // =================================
    // CONTACT FORM
    // =================================

    const contactForm = document.getElementById("contactForm");

    if (!contactForm) return;

    const feedback = document.getElementById("formFeedback");
    const fallback = document.getElementById("emailFallback");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Collect visitor information
        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const message = document.getElementById("visitorMessage").value.trim();

        // Validate form
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        if (!name || !email || !message) {
            feedback.textContent = "Please complete all fields.";
            return;
        }

        // Your actual email address goes here
        const recipient = "your-email@example.com";

        const subject = encodeURIComponent(
            "Portfolio Inquiry from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        // Prepare email
        const mailtoLink =
            `mailto:${recipient}?subject=${subject}&body=${body}`;

        // Display fallback link
        fallback.href = mailtoLink;
        fallback.hidden = false;

        feedback.textContent =
            "Your message is ready. Opening your email application...";

        // Open email application
        window.location.href = mailtoLink;

    });

});
