// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
toggle?.addEventListener('click', () => links.classList.toggle('open'));
links?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form (demo — no backend on GitHub Pages)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  status.textContent = `Thanks ${name}! Your message has been recorded. I'll get back to you soon.`;
  form.reset();
});

// Animate skill bars when visible
const bars = document.querySelectorAll('.bar i');
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      const w = en.target.style.width;
      en.target.style.width = '0';
      requestAnimationFrame(() => { en.target.style.width = w; });
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(b => io.observe(b));
