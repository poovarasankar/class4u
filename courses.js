// courses.js - Modern JavaScript with ES6+ features
/*document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    mobileMenuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      mobileMenuToggle.innerHTML = mainNav.classList.contains('active')
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    });
*/
    // Course filtering functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseCards = document.querySelectorAll('.course-card');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Update active state of filter buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.dataset.filter;

        // Filter courses
        courseCards.forEach(card => {
          if (filterValue === 'all' || card.dataset.categories.includes(filterValue)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Lazy load images with intersection observer
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[loading="lazy"]');

      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src') || img.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => {
        if (img.complete) return;
        if (img.getAttribute('data-src')) {
          imageObserver.observe(img);
        }
      });
    }

    // Form submission handling
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();

        if (!email) return;

        try {
          // In a real application, you would send this to your server
          console.log('Submitting email:', email);

          // Show success message
          alert('Thank you for subscribing to our newsletter!');
          emailInput.value = '';
        } catch (error) {
          console.error('Subscription error:', error);
          alert('There was an error with your subscription. Please try again.');
        }
      });
    }
  