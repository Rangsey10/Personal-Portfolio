// ============================================
// MOBILE HAMBURGER MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links a');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksContainer.classList.toggle('active');
});

// Close menu when clicking a nav link
navLinksItems.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksContainer.classList.remove('active');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinksContainer.contains(e.target)) {
    hamburger.classList.remove('active');
    navLinksContainer.classList.remove('active');
  }
});

// ============================================
// SMOOTH SCROLLING FOR NAVIGATION LINKS
// ============================================

// Select all navigation links that start with #
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default jump behavior
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      // Calculate the offset for fixed navbar
      const navbarHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetSection.offsetTop - navbarHeight;
      
      // Smooth scroll to target section
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ============================================
// DARK MODE TOGGLE
// ============================================

const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = '☀️';
}

// Toggle dark mode on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button icon
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// ============================================
// NAVBAR SCROLL BEHAVIOR
// ============================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  // Add shadow when scrolling down
  if (currentScroll > 0) {
    header.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
  
  lastScroll = currentScroll;
});

// ============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// ============================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollPosition = window.pageYOffset + 100; // Offset for navbar
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove active class from all links
      navLinks.forEach(link => {
        link.style.color = '';
      });
      
      // Add active style to current section link
      const activeLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
      if (activeLink) {
        activeLink.style.color = '#3498db';
      }
    }
  });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual form submission
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Simple validation
  if (name && email && message) {
    // Show success message (in a real app, you'd send this to a server)
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    
    // Reset form
    contactForm.reset();
  } else {
    alert('Please fill in all fields.');
  }
});

// ============================================
// SCROLL TO TOP ON LOGO CLICK
// ============================================

const logo = document.querySelector('.logo');

logo.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add cursor pointer to logo
logo.style.cursor = 'pointer';

// ============================================
// ANIMATE ELEMENTS ON SCROLL (Optional Enhancement)
// ============================================

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe skill cards, project cards, etc.
const animatedElements = document.querySelectorAll('.skill-card, .project-card, .education-card');

animatedElements.forEach(element => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(element);
});

// ============================================
// CONSOLE MESSAGE
// ============================================

console.log('%c Welcome to My Portfolio! ', 'background: #3498db; color: white; font-size: 20px; padding: 10px;');
console.log('%c Built with ❤️ using HTML, CSS, and Vanilla JavaScript', 'color: #3498db; font-size: 14px;');