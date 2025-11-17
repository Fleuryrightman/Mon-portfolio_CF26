// --- Lien actif dans le menu ---
const links = document.querySelectorAll("nav a");
links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});

// --- Animation au scroll ---
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.2 });

// Style initial invisible
sections.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(20px)";
    sec.style.transition = "all 0.8s ease";
    observer.observe(sec);
});
