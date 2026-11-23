// 1. Terminal Typewriter Effect
const roles = [
  "Full-Stack Software Engineer",
  "Security Researcher & Builder",
  "Open-Source Contributor"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function typeEffect() {
  const currentRole = roles[roleIndex];
  
  if (isDeleting) {
    typewriterEl.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriterEl.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 85;

  if (!isDeleting && charIndex === currentRole.length) {
    speed = 1800; // Pause at full text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// 2. Project Category Filter
const filterBtns = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Update active button state
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");

    cards.forEach(card => {
      const category = card.getAttribute("data-category");
      if (filter === "all" || category === filter) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  });
});

// 3. One-Click Email Copy
const copyBtn = document.getElementById("copy-email");

copyBtn.addEventListener("click", () => {
  const email = copyBtn.getAttribute("data-email");
  navigator.clipboard.writeText(email);
  
  const originalText = copyBtn.textContent;
  copyBtn.textContent = "Copied to clipboard!";
  copyBtn.style.borderColor = "#ff2a85";
  copyBtn.style.color = "#ff2a85";

  setTimeout(() => {
    copyBtn.textContent = originalText;
    copyBtn.style.borderColor = "";
    copyBtn.style.color = "";
  }, 2000);
});
