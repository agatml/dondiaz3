const toggleButton = document.getElementById('theme-toggle');
const rootElement = document.documentElement;

toggleButton.addEventListener('click', () => {
    const isDark = rootElement.getAttribute('data-theme') === 'dark';

    if (isDark) {
        rootElement.removeAttribute('data-theme');
        localStorage.removeItem('theme');
    } else {
        rootElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});

// Persistência
if (localStorage.getItem('theme') === 'dark') {
    rootElement.setAttribute('data-theme', 'dark');
};

 

let lastScroll = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  // Rolando para baixo → esconde
  if (currentScroll > lastScroll && currentScroll > 80) {
    header.classList.add("header-hidden");
  } 
  // Rolando para cima → mostra
  else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
});

