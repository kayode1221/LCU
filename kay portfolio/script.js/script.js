// Example of interactive functionality: Scroll-to-top button
const scrollButton = document.createElement("button");
scrollButton.textContent = "↑ Scroll to Top";
scrollButton.classList.add("scroll-top-btn");
document.body.appendChild(scrollButton);

scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Show/Hide the button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
});
