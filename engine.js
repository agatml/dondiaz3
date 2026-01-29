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

