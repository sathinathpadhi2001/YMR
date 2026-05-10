/**
 * YMR ShipChandlers - Premium Design Script
 * Handles custom cursor, parallax, and unique interactive elements.
 */

document.addEventListener('DOMContentLoaded', function() {
    // 1. Custom Cursor Implementation
    const cursor = document.querySelector('.custom-cursor');
    const cursorOutline = document.querySelector('.custom-cursor-outline');
    
    if (cursor && cursorOutline) {
        document.addEventListener('mousemove', (e) => {
            const posX = e.clientX;
            const posY = e.clientY;
            
            cursor.style.transform = `translate3d(${posX - 10}px, ${posY - 10}px, 0)`;
            cursorOutline.style.transform = `translate3d(${posX - 20}px, ${posY - 20}px, 0)`;
        });

        // Cursor scaling on interactive elements
        const interactables = document.querySelectorAll('a, button, .service-card-maritime, .stat-card-maritime');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform += ' scale(2.5)';
                cursor.style.background = '#00d2ff';
                cursorOutline.style.transform += ' scale(1.5)';
                cursorOutline.style.borderColor = '#00d2ff';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.background = '#0066ff';
                cursorOutline.style.borderColor = '#0066ff';
            });
        });
    }

    // 2. Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 50
        });
    }

    // 3. Navbar Scrolled State
    const navbar = document.querySelector('.maritime-nav');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, { passive: true });
    }

    // 4. Parallax Effect for Floating Elements
    const floatingElements = document.querySelectorAll('.floating');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        floatingElements.forEach(el => {
            const speed = 0.05;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }, { passive: true });

    // 5. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 6. Stats Animation (If elements exist)
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = parseInt(entry.target.getAttribute('data-count'));
                    animateCount(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(num => observer.observe(num));
    }

    function animateCount(el, target) {
        let current = 0;
        const duration = 2000;
        const step = target / (duration / 16);
        
        const update = () => {
            current += step;
            if (current < target) {
                el.innerText = Math.floor(current) + (target === 99 ? '%' : target === 24 ? '/7' : '+');
                requestAnimationFrame(update);
            } else {
                el.innerText = target + (target === 99 ? '%' : target === 24 ? '/7' : '+');
            }
        };
        requestAnimationFrame(update);
    }

    console.log('🚢 YMR Unique Maritime Experience: Active');
});