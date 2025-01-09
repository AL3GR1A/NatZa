document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const logo = document.getElementById('logo');

    toggle.addEventListener('change', () => {
        body.classList.toggle('dark-mode', toggle.checked);
        logo.src = toggle.checked ? 'assets/Logo_blanco_PNG.png' : 'assets/Logo_Negro_PNG.png';
    });
});
