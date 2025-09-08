/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. - Rashmi Jadhav */
$(document).ready(function () {
    // Navbar scroll effect
    $(document).scroll(function () {
        const $nav = $('.fixed-top');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    // Smooth scroll to #about when clicking down arrow
    $('#down-arrow').click(function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 150);
    });

    // Initialize animate on scroll library
    AOS.init({
        // once: true // uncomment if animations should only play once
    });

    // Toggle dark/light mode
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Apply saved theme
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="fa fa-sun-o"></i> Modo Claro';
    } else {
        themeToggleBtn.innerHTML = '<i class="fa fa-moon-o"></i> Modo Oscuro';
    }

    // Switch theme on click
    themeToggleBtn.addEventListener('click', function () {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            themeToggleBtn.innerHTML = '<i class="fa fa-moon-o"></i> Modo Oscuro';
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            themeToggleBtn.innerHTML = '<i class="fa fa-sun-o"></i> Modo Claro';
        }
    });
});
