// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        }
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            azubis: document.getElementById('azubis').value,
            message: document.getElementById('message').value
        };
        
        // Log form data (in production, send to backend)
        console.log('Form submitted:', formData);
        
        // Show success message
        alert('Vielen Dank für Ihre Anfrage! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.');
        
        // Reset form
        contactForm.reset();
        
        // In production, you would send this data to your backend:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(formData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Vielen Dank für Ihre Anfrage! Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
        //     console.error('Error:', error);
        // });
    });
}

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.problem-card, .solution-card, .usp-card, .pricing-card, .setup-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(card);
});

// ROI Calculator (Optional Enhancement)
function calculateROI(azubis, years = 3) {
    const whiteLabel = 5000 + (99 * 12 * years);
    const competitor1 = (250 * 12 * years);
    const competitor2 = (500 * 12 * years);
    
    return {
        whiteLabel: whiteLabel,
        competitor1: competitor1,
        competitor2: competitor2,
        savings1: competitor1 - whiteLabel,
        savings2: competitor2 - whiteLabel
    };
}

// Add ROI calculator to window for potential use
window.calculateROI = calculateROI;

// Log page load
console.log('Landing Page loaded successfully');
console.log('White-Label Bundle: Azubi-App + Ausbilder-App');
