//// ===== HAMBURGER MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== CONTACT FORM HANDLING =====
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation
    if (!name || !email || !message) {
        formStatus.textContent = '⚠️ Please fill in all fields.';
        formStatus.style.color = '#FF6B6B';
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        formStatus.textContent = '⚠️ Please enter a valid email address.';
        formStatus.style.color = '#FF6B6B';
        return;
    }

    // Simulate sending (since GitHub Pages has no backend)
    formStatus.textContent = '⏳ Sending...';
    formStatus.style.color = '#4A90D9';

    // Simulate a delay (replace this with actual API call later)
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Success message
    formStatus.textContent = '✅ Thanks ' + name + '! Your message was sent. (Demo)';
    formStatus.style.color = '#50C878';

    // Reset form
    form.reset();
});

// ===== SMOOTH SCROLL FOR NAV LINKS (built into CSS with scroll-behavior) =====
// Nothing else needed — CSS `scroll-behavior: smooth;` handles it.

// ===== DYNAMIC YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', () => {
    const footerYear = document.querySelector('footer p');
    if (footerYear) {
        const year = new Date().getFullYear();
        footerYear.textContent = footerYear.textContent.replace('2026', year);
    }
});

console.log('🚀 Website loaded successfully!');
//  script.js
//  D_Site
//
//  Created by Dingku Oinam on 22/06/26.
//

