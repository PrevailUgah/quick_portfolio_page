document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // Toggle Mobile Menu
    const toggleMenu = () => {
        const isExpanded = mobileMenu.classList.contains('hidden');
        
        if (isExpanded) {
            mobileMenu.classList.remove('hidden');
            // Change icon to X
            menuIcon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
        } else {
            mobileMenu.classList.add('hidden');
            // Change icon back to Menu
            menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
        }
    };

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking links
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
        });
    });

    // Optional: Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('shadow-md');
        } else {
            nav.classList.remove('shadow-md');
        }
    });
});
