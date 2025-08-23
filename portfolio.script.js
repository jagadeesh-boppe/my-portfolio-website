document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.navbar a');

    // Add a click event listener to each link
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default jump
            const targetId = e.currentTarget.getAttribute('href'); // Get the target section ID
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Use smooth scroll behavior
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
const backToTopBtn = document.getElementById('back-to-top-btn');

// Show/hide the button based on scroll position
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
};

// Scroll to the top when the button is clicked
backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});