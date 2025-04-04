window.addEventListener("scroll", function() {
    let topBar = document.querySelector(".top-bar");
    let header = document.querySelector(".main-header");

    if (window.scrollY > 60) { // Si el usuario scrollea más de 60px
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

function showSearch() {
    const menu = document.getElementById('menu');
    const searchBar = document.getElementById('search-full');
    const searchInput = searchBar.querySelector('input');

    menu.classList.add('hide');
    setTimeout(() => {
        menu.style.display = 'none';
        searchBar.style.display = 'flex';
        searchInput.classList.add('activo'); // Aplica borde rojo
        searchInput.focus();
    }, 400); // Espera la animación del menú
}

function hideSearch() {
    const menu = document.getElementById('menu');
    const searchBar = document.getElementById('search-full');
    const searchInput = searchBar.querySelector('input');

    searchBar.style.display = 'none';
    searchInput.classList.remove('activo'); // Quita borde rojo
    menu.style.display = 'flex';
    setTimeout(() => {
        menu.classList.remove('hide');
    }, 10);
}

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'flex';
    }
}

