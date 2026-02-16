 // Mobile Menu Toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const offsetTop = target.offsetTop - 80;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 100) {
                navbar.style.padding = '0.8rem 5%';
                navbar.style.boxShadow = '0 4px 25px rgba(0,0,0,0.1)';
            } else {
                navbar.style.padding = '1.2rem 5%';
                navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.05)';
            }
        });
        
        // Fade In Animation on Scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
        
        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Animation de succès
            const button = e.target.querySelector('.submit-button');
            const originalText = button.textContent;
            button.textContent = 'ENVOYÉ ✓';
            button.style.background = '#28a745';
            
            // Réinitialiser le formulaire
            setTimeout(() => {
                e.target.reset();
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
            
            // Ici, vous pourriez ajouter l'envoi réel du formulaire via AJAX
            console.log('Formulaire soumis');
        });
        
        // Gallery Item Click (pour futur modal ou lightbox)
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                console.log('Image cliquée - vous pouvez ajouter une lightbox ici');
            });
        });
   