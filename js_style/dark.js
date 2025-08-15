document.addEventListener('DOMContentLoaded', function () {
    const theme = document.getElementById('theme');
    const body = document.body;

    // 🔍 Check si un thème est déjà sauvegardé, sinon prend celui du système
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // 🖌️ Appliquer le thème directement à l'ouverture de la page
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        body.classList.add('dark-mode');
        theme.classList.remove('ri-moon-line');
        theme.classList.add('ri-sun-line');
    } else {
        body.classList.remove('dark-mode');
        theme.classList.remove('ri-sun-line');
        theme.classList.add('ri-moon-line');
    }

    // 🔁 Au clic sur le bouton
    theme.addEventListener('click', function () {
        // 💡 Toggle le thème
        const isDark = body.classList.toggle('dark-mode');

        // 💾 Sauvegarder la préférence
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        // 🔄 Mettre à jour l’icône selon le thème
        if (isDark) {
            theme.classList.remove('ri-moon-line');
            theme.classList.add('ri-sun-line');
        } else {
            theme.classList.remove('ri-sun-line');
            theme.classList.add('ri-moon-line');
        }
    });
});
