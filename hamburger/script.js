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

function activeLink() {
    const links = document.querySelectorAll('#nav a');

    links.forEach(function (link) {
        if (link.getAttribute('href') === '#home') {
            link.classList.add('active');
        }
    });

    /*
    const link = document.querySelector('#nav a[href="#home"]');
    
    if (link) {
        link.classList.add('active');
    }
    */
}

activeLink();