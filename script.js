// Mobile Navigation Toggle (guard for pages without navbar)
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.about-content, .cv-content, .skills-grid, .projects-grid, .volunteering-content, .contact-content');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// ---------- Dynamic Rendering: Skills, Projects, Volunteering ----------
function renderSkills() {
    const skillsGrid = document.getElementById('skillsGrid');
    if (!skillsGrid) return;

    const skillsData = [
        {
            category: 'Soft skills',
            items: [
                { iconClass: 'fas fa-comment-dots', name: 'Public speaking'},
                { iconClass: 'fas fa-search', name: 'Attention to details'},
                { iconClass: 'fas fa-bolt', name: 'Quick learner'},
                { iconClass: 'fas fa-users', name: 'Leadership'},
                { iconClass: 'fas fa-comments', name: 'Communication'},
                { iconClass: 'fas fa-puzzle-piece', name: 'Problem solving'},
                { iconClass: 'fas fa-user-friends', name: 'Team player'},
            ]
        },
        {
            category: 'Tools & Others',
            items: [
                { iconClass: 'fab fa-git-alt', name: 'Git' },
                { iconClass: 'fas fa-palette', name: 'Figma' },
                { iconClass: 'fas fa-mobile-alt', name: 'Responsive Design' },
                { iconClass: 'fas fa-code-branch', name: 'Version Control' }
            ]
        }
    ];

    skillsGrid.innerHTML = skillsData.map(group => `
        <div class="skill-category">
            <h3>${group.category}</h3>
            <div class="skill-items">
                ${group.items.map(item => `
                    <div class="skill-item modern-skill">
                        <i class="${item.iconClass}"></i>
                        <span>${item.name}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;

    const projectsData = [
        {
            title: 'E-Commerce Website',
            description: 'A responsive e-commerce platform with product filtering, cart, and mobile-first design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            iconClass: 'fas fa-laptop-code',
            links: { demo: '#', source: '#' }
        },
        {
            title: 'Weather App',
            description: 'Weather conditions and forecasts using a public API in a clean interface.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            iconClass: 'fas fa-mobile-alt',
            links: { demo: '#', source: '#' }
        },
        {
            title: 'Task Manager',
            description: 'Drag-and-drop tasks with local storage and responsive design.',
            tech: ['HTML', 'CSS', 'JavaScript'],
            iconClass: 'fas fa-tasks',
            links: { demo: '#', source: '#' }
        }
    ];

    projectsGrid.innerHTML = projectsData.map(p => `
        <div class="project-card">
            <div class="project-image">
                <div class="project-placeholder"><i class="${p.iconClass}"></i></div>
            </div>
            <div class="project-content">
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tech">
                    ${p.tech.map(t => `<span>${t}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${p.links.demo}" class="btn btn-small">Live Demo</a>
                    <a href="${p.links.source}" class="btn btn-small btn-outline">Source Code</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderVolunteering() {
    const volunteeringGrid = document.getElementById('volunteeringGrid');
    if (!volunteeringGrid) return;

    const volunteeringData = [
        {
            title: 'Code Mentorship',
            description: 'Mentor youth in programming fundamentals and their first projects.',
            period: '2022 - Present',
            time: '5+ hours/week',
            iconClass: 'fas fa-hands-helping'
        },
        {
            title: 'Environmental Conservation',
            description: 'Participate in cleanups and tree planting to promote sustainability.',
            period: '2021 - Present',
            time: 'Monthly events',
            iconClass: 'fas fa-tree'
        },
        {
            title: 'Literacy Programs',
            description: 'Support adult literacy for improved career opportunities.',
            period: '2023 - Present',
            time: '3+ hours/week',
            iconClass: 'fas fa-book-reader'
        }
    ];

    volunteeringGrid.innerHTML = volunteeringData.map(v => `
        <div class="project-card">
            <div class="project-image">
                <div class="project-placeholder"><i class="${v.iconClass}"></i></div>
            </div>
            <div class="project-content">
                <h3>${v.title}</h3>
                <p>${v.description}</p>
                <div class="project-tech">
                    <span><i class="fas fa-calendar"></i> ${v.period}</span>
                    <span><i class="fas fa-clock"></i> ${v.time}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function initializeDynamicSections() {
    renderSkills();
    renderProjects();
    renderVolunteering();

    // Re-initialize skill animations after rendering
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.5 });

    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        skillObserver.observe(item);
    });

    // Re-bind project hover effects to newly created cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeDynamicSections);

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Simulate form submission (in real app, this would send to backend)
        showNotification('Thank you! Your message has been sent.', 'success');
        
        // Reset form
        this.reset();
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
function typeWriter(element, html, speed = 100) {
    let i = 0;
    let tag = '';
    let isTag = false;

    element.innerHTML = '';

    function type() {
        const char = html[i];

        if (char === '<') isTag = true;
        if (char === '>') isTag = false;

        tag += char;
        i++;

        if (!isTag && char === '>') {
            element.innerHTML += tag;
            tag = '';
        } else if (!isTag) {
            element.innerHTML += char;
        }

        if (i < html.length) {
            setTimeout(type, speed);
        }
    }

    type();
}


// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// (Replaced by initializeDynamicSections after dynamic rendering)

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// Add active state styles to CSS
const activeNavStyles = `
    .nav-link.active {
        color: #667eea !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;

if (!document.querySelector('#active-nav-styles')) {
    const style = document.createElement('style');
    style.id = 'active-nav-styles';
    style.textContent = activeNavStyles;
    document.head.appendChild(style);
}

// Lazy loading for images (if you add real images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    updateActiveNavLink();
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Add loading animation for page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loading styles
const loadingStyles = `
    body:not(.loaded) {
        opacity: 0;
        transition: opacity 0.5s ease;
    }
    body.loaded {
        opacity: 1;
    }
`;

if (!document.querySelector('#loading-styles')) {
    const style = document.createElement('style');
    style.id = 'loading-styles';
    style.textContent = loadingStyles;
    document.head.appendChild(style);
}
