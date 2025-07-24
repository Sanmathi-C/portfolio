
      // Toggle mobile menu
      const menuBtn = document.getElementById('menu-btn');
      const navLinks = document.getElementById('nav-links');
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('open');
      });

      // CV Download Confirmation
      document.getElementById('download-cv').addEventListener('click', function() {
        alert('CV download started! Thank you for your interest.');
      });

      // Contact Form Submission (Client-Side Feedback)
      document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('#name').value;
        const email = this.querySelector('#email').value;
        const message = this.querySelector('#message').value;
        const subject = encodeURIComponent(`Message from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
        const mailtoLink = `mailto:sanmathic05@gmail.com?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        alert('Thank you for your message! I’ll get back to you soon.');
        this.reset();
      });
    