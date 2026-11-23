// Toggle Dark Mode
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Update button label based on active theme
  const isDark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});

// Hero Button Action
const ctaBtn = document.getElementById('cta-btn');

ctaBtn.addEventListener('click', () => {
  ctaBtn.textContent = 'Welcome aboard!';
  ctaBtn.style.backgroundColor = '#10b981'; // Changes to green
});
