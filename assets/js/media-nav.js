document.addEventListener('DOMContentLoaded', () => {
    const burgerDisplay = document.getElementById('burger-display');
    const xDisplay = document.getElementById('x-display');
    const displayFlexMedia = document.getElementById('display-flex-media');
    const displayMediaNav = document.getElementById('display-media-nav');

    // Toggle Mobile Menu
    const openMobileMenu = () => {
        burgerDisplay.classList.add('hidden');
        xDisplay.classList.remove('hidden');
        displayFlexMedia.classList.remove('hidden');
        displayFlexMedia.classList.add('flex');
    };

    const closeMobileMenu = () => {
        burgerDisplay.classList.remove('hidden');
        xDisplay.classList.add('hidden');
        displayFlexMedia.classList.add('hidden');
        displayFlexMedia.classList.remove('flex');
    };

    if (displayMediaNav) {
        displayMediaNav.addEventListener('click', () => {
            if (displayFlexMedia.classList.contains('hidden')) {
                openMobileMenu();
            } else {
                closeMobileMenu();
            }
        });
    }

    if (displayFlexMedia) {
        // Close menu when clicking on any mobile nav link
        const mediaLinks = displayFlexMedia.querySelectorAll('a');
        mediaLinks.forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
    }

});