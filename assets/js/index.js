document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = {
        'home': document.getElementById('display-home'),
        'About_me': document.getElementById('display-about_me'),
        'projects': document.getElementById('display-projects'),
        'skills': document.getElementById('display-skills'),
        'contact': document.getElementById('display-contact')
    };

    const mediaNavLinks = {
        'home': document.getElementById('display-home-media'),
        'About_me': document.getElementById('display-about_me-media'),
        'projects': document.getElementById('display-projects-media'),
        'skills': document.getElementById('display-skills-media'),
        'contact': document.getElementById('display-contact-media')
    };

    // Helper function to update active class
    const updateActiveNav = (activeId) => {
        Object.keys(navLinks).forEach(key => {
            const link = navLinks[key];
            const mediaLink = mediaNavLinks[key];

            if (link) {
                if (key === activeId) {
                    link.classList.add('text-brand-500', 'border-b-2', 'border-brand-500');
                    link.classList.remove('text-zinc-300');
                } else {
                    link.classList.remove('text-brand-500', 'border-b-2', 'border-brand-500');
                    link.classList.add('text-zinc-300');
                }
            }

            if (mediaLink) {
                if (key === activeId) {
                    mediaLink.classList.add('text-brand-500', 'bg-zinc-900');
                    mediaLink.classList.remove('text-zinc-300');
                } else {
                    mediaLink.classList.remove('text-brand-500', 'bg-zinc-900');
                    mediaLink.classList.add('text-zinc-300');
                }
            }
        });
    };

    // Intersection Observer to track visible sections
    const observerOptions = {
        root: null,
        rootMargin: '-30% 0px -50% 0px', // Trigger when section occupies the main scrolling area
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateActiveNav(entry.target.id);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Special case for scrolling to top of page (navigates back to home active state)
    window.addEventListener('scroll', () => {
        if (window.scrollY < 80) {
            updateActiveNav('home');
        }
    });
});