function hamburger() {
    const button = document.querySelector('#hamburger');
    const nav = document.querySelector('#nav');

    button.addEventListener('click', function () {
        button.classList.toggle('button-active');
        nav.classList.toggle('nav-open');
    });
}

hamburger();

/**
 * Napišite funkciju "activeLink" koja će:
 * 1. Pronaći link sa hrefom "#home"
 * 2. Dodati klasu "active" tom linku
 * 
 * Pozovite funkciju.
 * Doradite CSS tako da link sa klasom "active"
 * ima crvenu boju teksta.
 */