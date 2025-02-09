document.addEventListener('DOMContentLoaded', () => {
    const nightModeToggle = document.querySelector('.night_mode');

    const nightMode = document.querySelector('.night_mode');

    nightMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

    }); 
    
    // Verificar si hay un tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'light') {
            nightModeToggle.classList.replace('fa-moon-o', 'fa-sun-o');
        }
    }

    

    // Manejar el cambio de tema
    nightModeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Cambiar el ícono
        if (newTheme === 'light') {
            nightModeToggle.classList.replace('fa-moon-o', 'fa-sun-o');
        } else {
            nightModeToggle.classList.replace('fa-sun-o', 'fa-moon-o');
        }
    });
});


