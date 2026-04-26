const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const links = document.querySelectorAll("#menu a");

// فتح/إغلاق
function toggleMenu() {
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
}

menuBtn.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

// إغلاق عند الضغط على رابط
links.forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    overlay.classList.remove("active");
  });
});
  // Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Highlight effect
      target.style.transition = "0.3s";
      target.style.boxShadow = "0 0 30px #00ffd5";

      setTimeout(() => {
        target.style.boxShadow = "none";
      }, 800);
    }
  });
});

setTimeout(() => {
  target.scrollIntoView({ behavior: "smooth" });
}, 100);


const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.15
});

sections.forEach(section => {
  observer.observe(section);
});