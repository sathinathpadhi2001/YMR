// ===== ADVANCED MARITIME DOCKYARD THEME JAVASCRIPT =====

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false,
        offset: 100
    });
});

// ===== ADVANCED NAVBAR EFFECTS =====
class MaritimeNavbar {
    constructor() {
        this.navbar = document.querySelector('.maritime-nav');
        this.lastScrollTop = 0;
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.handleScroll());
        this.setupNavLinks();
    }

    handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Add scrolled class for styling
        if (scrollTop > 100) {
            this.navbar.classList.add('scrolled');
        } else {
            this.navbar.classList.remove('scrolled');
        }

        // Navbar hide/show on scroll
        if (scrollTop > this.lastScrollTop && scrollTop > 200) {
            this.navbar.style.transform = 'translateY(-100%)';
        } else {
            this.navbar.style.transform = 'translateY(0)';
        }

        this.lastScrollTop = scrollTop;
    }

    setupNavLinks() {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', this.createRipple);
        });
    }

    createRipple(e) {
        const ripple = document.createElement('span');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('ripple-effect');

        e.target.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }
}

// ===== ANIMATED COUNTER =====
class AnimatedCounter {
    constructor() {
        this.counters = document.querySelectorAll('.stat-number[data-count]');
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                    this.animateCounter(entry.target);
                    entry.target.classList.add('counted');
                }
            });
        }, { threshold: 0.5 });

        this.counters.forEach(counter => observer.observe(counter));
    }

    animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target + (target === 99 ? '%' : target === 24 ? '/7' : '+');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (target === 99 ? '%' : target === 24 ? '/7' : '+');
            }
        }, 16);
    }
}

// ===== PARALLAX EFFECTS =====
class ParallaxController {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', () => this.updateParallax());
    }

    updateParallax() {
        const scrolled = window.pageYOffset;

        this.elements.forEach(element => {
            const rate = scrolled * -0.5;
            element.style.transform = `translateY(${rate}px)`;
        });

        // Hero image parallax
        const heroImage = document.querySelector('.hero-image');
        if (heroImage && scrolled < window.innerHeight) {
            heroImage.style.transform = `scale(${1 + scrolled * 0.0005}) translateY(${scrolled * 0.3}px)`;
        }
    }
}

// ===== FLOATING ANIMATIONS =====
class FloatingAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.createFloatingElements();
        this.animateServiceCards();
        this.animateStatCards();
    }

    createFloatingElements() {
        // Add floating animation to hero decorations
        const decorations = document.querySelectorAll('.decoration-circle');
        decorations.forEach((decoration, index) => {
            decoration.style.animationDelay = `${index * 2}s`;
        });
    }

    animateServiceCards() {
        const serviceCards = document.querySelectorAll('.service-card-maritime');
        serviceCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-15px) scale(1.05) rotateY(5deg)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1) rotateY(0deg)';
            });
        });
    }

    animateStatCards() {
        const statCards = document.querySelectorAll('.stat-card-maritime');
        statCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.05) rotateX(5deg)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1) rotateX(0deg)';
            });
        });
    }
}

// ===== SMOOTH SCROLL =====
class SmoothScroll {
    constructor() {
        this.init();
    }

    init() {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.querySelector('#about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
}

// ===== ADVANCED BUTTON EFFECTS =====
class ButtonEffects {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.btn-maritime');
        buttons.forEach(button => {
            button.addEventListener('click', this.createClickEffect);
            button.addEventListener('mouseenter', this.createHoverEffect);
        });
    }

    createClickEffect(e) {
        const button = e.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        ripple.classList.add('button-ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    createHoverEffect(e) {
        const button = e.currentTarget;
        const icon = button.querySelector('i');
        if (icon) {
            icon.style.transform = 'translateX(5px) scale(1.1)';
            button.addEventListener('mouseleave', () => {
                icon.style.transform = 'translateX(0) scale(1)';
            }, { once: true });
        }
    }
}

// ===== LOADING ANIMATIONS =====
class LoadingAnimations {
    constructor() {
        this.init();
    }

    init() {
        // Page load animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
            this.animateOnLoad();
        });
    }

    animateOnLoad() {
        // Animate hero elements
        const heroElements = document.querySelectorAll('.hero-content > *');
        heroElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });

        // Animate floating particles
        this.animateParticles();
    }

    animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            particle.style.animationDelay = `${index * 4}s`;
        });
    }
}

// ===== INTERSECTION OBSERVER ANIMATIONS =====
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe elements for animation
        const animateElements = document.querySelectorAll(
            '.service-card-maritime, .stat-card-maritime, .feature-item, .about-image-container'
        );

        animateElements.forEach(el => observer.observe(el));
    }
}

// ===== CURSOR EFFECTS =====
class CursorEffects {
    constructor() {
        this.cursor = null;
        this.init();
    }

    init() {
        if (window.innerWidth > 768) {
            this.createCustomCursor();
        }
    }

    createCustomCursor() {
        this.cursor = document.createElement('div');
        this.cursor.classList.add('custom-cursor');
        document.body.appendChild(this.cursor);

        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });

        // Add hover effects for interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .service-card-maritime, .stat-card-maritime');
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
            });

            element.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
            });
        });
    }
}

// ===== PERFORMANCE OPTIMIZATION =====
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Lazy load images
        this.lazyLoadImages();

        // Debounce scroll events
        this.debounceScrollEvents();

        // Preload critical resources
        this.preloadResources();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[loading="lazy"]');

        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.classList.add('fade-in');
                        imageObserver.unobserve(img);
                    }
                });
            });

            images.forEach(img => imageObserver.observe(img));
        }
    }

    debounceScrollEvents() {
        let ticking = false;

        const updateScrollEffects = () => {
            // Update scroll-based animations here
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        });
    }

    preloadResources() {
        // Preload critical images
        const criticalImages = [
            'image/frontpage1.jpeg',
            'image/frontpage2.jpeg'
        ];

        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }
}

// ===== THEME CONTROLLER =====
class ThemeController {
    constructor() {
        this.init();
    }

    init() {
        // Add dynamic theme adjustments based on time
        this.adjustThemeByTime();

        // Add seasonal effects
        this.addSeasonalEffects();
    }

    adjustThemeByTime() {
        const hour = new Date().getHours();
        const body = document.body;

        if (hour >= 18 || hour <= 6) {
            body.classList.add('night-mode');
        }
    }

    addSeasonalEffects() {
        const month = new Date().getMonth();
        const body = document.body;

        // Add seasonal classes
        if (month >= 11 || month <= 1) {
            body.classList.add('winter-theme');
        } else if (month >= 2 && month <= 4) {
            body.classList.add('spring-theme');
        } else if (month >= 5 && month <= 7) {
            body.classList.add('summer-theme');
        } else {
            body.classList.add('autumn-theme');
        }
    }
}

// ===== INITIALIZE ALL COMPONENTS =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    new MaritimeNavbar();
    new AnimatedCounter();
    new ParallaxController();
    new FloatingAnimations();
    new SmoothScroll();
    new ButtonEffects();
    new LoadingAnimations();
    new ScrollAnimations();
    new CursorEffects();
    new PerformanceOptimizer();
    new ThemeController();

    // Add custom CSS for dynamic effects
    addDynamicStyles();

    console.log('🚢 YMR ShipChandlers - Advanced Maritime Theme Loaded');
});

// ===== DYNAMIC STYLES =====
function addDynamicStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .ripple-effect {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        .button-ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.4);
            transform: scale(0);
            animation: button-ripple 0.6s ease-out;
            pointer-events: none;
        }

        @keyframes button-ripple {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }

        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(46, 134, 171, 0.8);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.2s ease;
            transform: translate(-50%, -50%);
        }

        .custom-cursor.cursor-hover {
            transform: translate(-50%, -50%) scale(1.5);
            background: rgba(241, 143, 1, 0.8);
        }

        .animate-in {
            animation: slideInUp 0.8s ease-out;
        }

        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .fade-in {
            animation: fadeIn 0.6s ease-out;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .loaded .hero-content > * {
            transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .night-mode {
            filter: hue-rotate(10deg) brightness(0.95);
        }

        .winter-theme .particle {
            background: #87CEEB;
        }

        .spring-theme .particle {
            background: #98FB98;
        }

        .summer-theme .particle {
            background: #FFD700;
        }

        .autumn-theme .particle {
            background: #FF6347;
        }
    `;
    document.head.appendChild(style);
}

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function (e) {
    console.warn('Maritime Theme Error:', e.error);
});

// ===== ACCESSIBILITY ENHANCEMENTS =====
document.addEventListener('keydown', function (e) {
    // Add keyboard navigation enhancements
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function () {
    document.body.classList.remove('keyboard-navigation');
});

// Reduce motion for users who prefer it
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.style.setProperty('--transition-smooth', 'none');
    document.documentElement.style.setProperty('--transition-bounce', 'none');
    document.documentElement.style.setProperty('--transition-elastic', 'none');
}
// ===== GALLERY FUNCTIONALITY =====
class GalleryController {
    constructor() {
        this.init();
    }

    init() {
        this.setupFilters();
        this.setupSearch();
        this.setupLightbox();
    }

    setupFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const galleryItems = document.querySelectorAll('.gallery-item');

        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-category');

                    if (filterValue === 'all' || itemCategory === filterValue) {
                        item.classList.remove('hidden');
                        item.style.display = 'block';
                    } else {
                        item.classList.add('hidden');
                        item.style.display = 'none';
                    }
                });

                // Re-initialize AOS for filtered items
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            });
        });
    }

    setupSearch() {
        const searchInput = document.querySelector('.search-input');
        const searchClear = document.querySelector('.search-clear');
        const galleryItems = document.querySelectorAll('.gallery-item');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();

                if (searchTerm.length > 0) {
                    searchClear.style.display = 'block';
                } else {
                    searchClear.style.display = 'none';
                }

                galleryItems.forEach(item => {
                    const img = item.querySelector('img');
                    const title = item.querySelector('.gallery-content h5');
                    const description = item.querySelector('.gallery-content p');

                    const alt = img ? img.alt.toLowerCase() : '';
                    const titleText = title ? title.textContent.toLowerCase() : '';
                    const descText = description ? description.textContent.toLowerCase() : '';

                    if (alt.includes(searchTerm) || titleText.includes(searchTerm) || descText.includes(searchTerm)) {
                        item.style.display = 'block';
                        item.classList.remove('hidden');
                    } else {
                        item.style.display = 'none';
                        item.classList.add('hidden');
                    }
                });
            });

            if (searchClear) {
                searchClear.addEventListener('click', () => {
                    searchInput.value = '';
                    searchClear.style.display = 'none';
                    galleryItems.forEach(item => {
                        item.style.display = 'block';
                        item.classList.remove('hidden');
                    });
                });
            }
        }
    }

    setupLightbox() {
        const galleryImages = document.querySelectorAll('.gallery-image img');
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const modalTitle = document.getElementById('imageModalLabel');
        const prevBtn = document.getElementById('prevImage');
        const nextBtn = document.getElementById('nextImage');

        let currentImageIndex = 0;
        let visibleImages = [];

        const updateVisibleImages = () => {
            visibleImages = Array.from(galleryImages).filter(img => {
                const item = img.closest('.gallery-item');
                return item && !item.classList.contains('hidden') && item.style.display !== 'none';
            });
        };

        const showImage = (index) => {
            if (visibleImages.length === 0) return;

            currentImageIndex = index;
            const img = visibleImages[currentImageIndex];
            modalImage.src = img.src;
            modalImage.alt = img.alt;
            modalTitle.textContent = img.alt;
        };

        const showNextImage = () => {
            currentImageIndex = (currentImageIndex + 1) % visibleImages.length;
            showImage(currentImageIndex);
        };

        const showPrevImage = () => {
            currentImageIndex = (currentImageIndex - 1 + visibleImages.length) % visibleImages.length;
            showImage(currentImageIndex);
        };

        // Setup click events for gallery images
        galleryImages.forEach((img, index) => {
            const viewBtn = img.closest('.gallery-card').querySelector('.gallery-view-btn');
            if (viewBtn) {
                viewBtn.addEventListener('click', () => {
                    updateVisibleImages();
                    const visibleIndex = visibleImages.indexOf(img);
                    if (visibleIndex !== -1) {
                        showImage(visibleIndex);
                        if (modal && typeof bootstrap !== 'undefined') {
                            const bsModal = new bootstrap.Modal(modal);
                            bsModal.show();
                        }
                    }
                });
            }
        });

        // Navigation buttons
        if (prevBtn) prevBtn.addEventListener('click', showPrevImage);
        if (nextBtn) nextBtn.addEventListener('click', showNextImage);

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (modal && modal.classList.contains('show')) {
                switch (e.key) {
                    case 'ArrowLeft':
                        showPrevImage();
                        break;
                    case 'ArrowRight':
                        showNextImage();
                        break;
                }
            }
        });
    }
}

// ===== CONTACT FORM FUNCTIONALITY =====
class ContactFormController {
    constructor() {
        this.init();
    }

    init() {
        this.setupFormValidation();
        this.setupFormSubmission();
        this.checkUrlParams();
    }

    setupFormValidation() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        const inputs = form.querySelectorAll('input, select, textarea');

        inputs.forEach(input => {
            input.addEventListener('blur', () => this.validateField(input));
            input.addEventListener('input', () => this.clearFieldError(input));
        });
    }

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Remove existing error styling
        field.classList.remove('is-invalid');

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Phone validation
        if (field.type === 'tel' && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
                isValid = false;
                errorMessage = 'Please enter a valid phone number';
            }
        }

        if (!isValid) {
            field.classList.add('is-invalid');
            this.showFieldError(field, errorMessage);
        }

        return isValid;
    }

    showFieldError(field, message) {
        let errorDiv = field.parentNode.querySelector('.invalid-feedback');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            field.parentNode.appendChild(errorDiv);
        }
        errorDiv.textContent = message;
    }

    clearFieldError(field) {
        field.classList.remove('is-invalid');
        const errorDiv = field.parentNode.querySelector('.invalid-feedback');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    setupFormSubmission() {
        const form = document.querySelector('#maritime-contact-form');
        if (!form) return;

        // Only add basic validation, don't prevent submission
        form.addEventListener('submit', (e) => {
            // Just show a loading message, let the form submit naturally
            this.showMessage('Sending your message...', 'info');
        });
    }

    showMessage(message, type) {
        const messageDiv = document.getElementById('formMessage');
        if (messageDiv) {
            messageDiv.className = `form-message ${type}`;
            messageDiv.textContent = message;
            messageDiv.style.display = 'block';

            // Auto-hide success messages after 5 seconds
            if (type === 'success') {
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }
        }
    }

    checkUrlParams() {
        const urlParams = new URLSearchParams(window.location.search);

        if (urlParams.get('success') === '1') {
            this.showMessage('✓ Thank you! Your message has been sent successfully. We will contact you soon.', 'success');
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        } else if (urlParams.get('error')) {
            const errorType = urlParams.get('error');
            let errorMessage = '✗ An error occurred. Please try again.';

            switch (errorType) {
                case 'invalid_email':
                    errorMessage = '✗ Please enter a valid email address.';
                    break;
                case 'missing_fields':
                    errorMessage = '✗ Please fill in all required fields.';
                    break;
                case 'send_failed':
                    errorMessage = '✗ Failed to send message. Please try again or contact us directly.';
                    break;
            }

            this.showMessage(errorMessage, 'error');
            // Clean URL
            window.history.replaceState({}, document.title, window.location.pathname);
        }
    }
}

// ===== SERVICES PAGE ENHANCEMENTS =====
class ServicesController {
    constructor() {
        this.init();
    }

    init() {
        this.setupServiceAnimations();
        this.setupServiceNavigation();
    }

    setupServiceAnimations() {
        const serviceCards = document.querySelectorAll('.service-card-compact');

        serviceCards.forEach((card, index) => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });
    }

    setupServiceNavigation() {
        // Add smooth scrolling to service sections
        const serviceLinks = document.querySelectorAll('a[href*="#service"]');

        serviceLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// ===== INITIALIZE PAGE-SPECIFIC CONTROLLERS =====
document.addEventListener('DOMContentLoaded', function () {
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    switch (currentPage) {
        case 'gallery.html':
            new GalleryController();
            break;
        case 'contact.html':
            new ContactFormController();
            break;
        case 'services.html':
            new ServicesController();
            break;
    }

    console.log(`📄 ${currentPage} - Page-specific features loaded`);
});

// ===== ENHANCED FORM STYLING =====
document.addEventListener('DOMContentLoaded', function () {
    // Add Bootstrap validation classes
    const style = document.createElement('style');
    style.textContent = `
        .form-control.is-invalid,
        .form-select.is-invalid {
            border-color: #dc3545;
            box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
        }
        
        .invalid-feedback {
            display: block;
            width: 100%;
            margin-top: 0.25rem;
            font-size: 0.875em;
            color: #dc3545;
        }
        
        .form-floating > .form-control.is-invalid ~ label,
        .form-floating > .form-select.is-invalid ~ label {
            color: #dc3545;
        }
        
        .form-message {
            padding: 1rem;
            border-radius: 8px;
            margin-top: 1rem;
            font-weight: 500;
        }
        
        .form-message.success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }
        
        .form-message.error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }
        
        .form-message.info {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }
    `;
    document.head.appendChild(style);
});

console.log('🎯 Advanced Page Features Loaded');