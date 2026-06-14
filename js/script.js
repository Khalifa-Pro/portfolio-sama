// =========================================
// MENU MOBILE
// =========================================
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.classList.toggle("is-active", isOpen);
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Ferme le menu après un clic sur un lien (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.classList.remove("is-active");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// =========================================
// CURSEUR / GLOW QUI SUIT LA SOURIS (subtil)
// =========================================
const glow = document.querySelector(".cursor-glow");

if (glow && window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    glow.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
  });
}

// =========================================
// REVEAL AU SCROLL
// =========================================
const revealTargets = document.querySelectorAll(
  ".about-grid, .skill-card, .timeline-item, .project-card, .education-item, .contact-grid"
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealTargets.forEach((el) => {
  el.classList.add("reveal");
  revealObserver.observe(el);
});

// =========================================
// FORMULAIRE DE CONTACT (démo front-end)
// =========================================
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim();

    formNote.textContent = `Merci ${name || ""} ! Votre message a été préparé. Pensez à connecter ce formulaire à un service d'envoi (ex: EmailJS, Formspree).`;
    contactForm.reset();
  });
}

// =========================================
// ANNÉE COURANTE DANS LE FOOTER
// =========================================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
