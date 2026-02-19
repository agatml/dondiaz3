const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav a");

  if (toggle && nav) {

    toggle.addEventListener("click", function () {
      nav.classList.toggle("active");
    });

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
      });
    })}