/**
 * Brittany Chiang Portfolio Interactions
 * - Dynamic Mouse Spotlight / Flashlight Effect
 * - ScrollSpy Navigation with Active Section Line Expansion
 * - Smooth In-Page Scrolling
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mouse Spotlight Glow Tracker
  const spotlight = document.getElementById('spotlight');
  
  if (spotlight) {
    window.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      spotlight.style.background = `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
    });
  }

  // 2. ScrollSpy for Left Sidebar Nav Links
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section-block');

  const updateActiveNav = () => {
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 250; // offset threshold

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });

    // If reached bottom of page, highlight the last section
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
      if (sections.length > 0) {
        currentSectionId = sections[sections.length - 1].getAttribute('id');
      }
    }

    if (currentSectionId) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSectionId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav(); // Initial trigger

  // 3. Smooth scrolling on nav click
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth' });
          history.pushState(null, null, targetId);
        }
      }
    });
  });

  // 4. Test fetch to Express /api/profile endpoint
  fetch('/api/profile')
    .then((res) => res.json())
    .then((data) => {
      console.log('✅ Express Backend Profile API Connected:', data);
    })
    .catch((err) => {
      console.warn('Backend API note:', err.message);
    });
});
