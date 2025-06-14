'use strict';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
    
    if (navbarToggle && navbarLinks) {
        navbarToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navbarLinks.classList.toggle('open');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navbarToggle.contains(e.target) && !navbarLinks.contains(e.target)) {
                navbarLinks.classList.remove('open');
                navbarToggle.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.navbar-links .nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navbarLinks.classList.remove('open');
                navbarToggle.classList.remove('active');
            });
        });
    }

    // Read more functionality
    document.querySelectorAll('.read-more-link').forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const moreText = this.previousElementSibling;
            if (moreText && moreText.classList.contains('more-text')) {
                moreText.style.display = 'inline';
                this.style.display = 'none';
            }
        });
    });
});

// Share location function
function shareLocation() {
    const location = {
        title: 'Solid State Ltd',
        text: 'Visit Solid State Ltd at House 69/3, Road 7/A, Dhanmondi, Dhaka-1209',
        url: window.location.href
    };
    navigator.share ? navigator.share(location).catch(console.error) 
                   : window.open(`https://www.google.com/maps/search/?api=1&query=23.7464663,90.3910863`, '_blank');
}

// Get directions function
function getDirections() {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=23.7464663,90.3910863`, '_blank');
} 