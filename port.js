// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
  
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      if (name && email && message) {
        // You can handle form submission here, e.g., sending data to server
        alert('Message sent successfully!');
        form.reset();
      } else {
        alert('Please fill in all fields.');
      }
    });
  });
  