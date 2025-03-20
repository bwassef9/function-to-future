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