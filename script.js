document.addEventListener("DOMContentLoaded", () => {
    console.log("Function to Future Website Loaded.");
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeIns = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.2, // Adjusts when the animation triggers (20% of the section is visible)
        }
    );

    fadeIns.forEach((section) => {
        observer.observe(section);
    });
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    var form = this;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    }).then(response => {
        if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            form.reset(); // Clear form fields
        } else {
            alert("Oops! Something went wrong.");
        }
    }).catch(error => {
        alert("Error submitting form.");
    });
});