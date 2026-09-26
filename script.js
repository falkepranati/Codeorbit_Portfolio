// Display a welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to Pranati's Portfolio!");
});


// Show a message when the Contact section is opened
const contactLinks = document.querySelectorAll(".contact-links a");

contactLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        console.log("Thank you for visiting my portfolio!");
    });
});