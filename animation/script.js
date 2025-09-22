function animation() {
    const box = document.querySelector('#box');
    box.style.position = 'relative';
    box.style.left = 0;

    function animateBox() {
        box.style.left = parseFloat(box.style.left) + 1 + 'px';
    }

    setInterval(animateBox, 100);
}

animation();

/**
 * 1. Promijenite box.style property tako da box bude
 * 1a. 100px x 100px
 * 1b. crvene boje pozadine
 * 2. Promijenite logiku animiranja boxa (animateBox() funkcija) tako da
 * 2a. Box dolazi do desnog ruba prozora (window)
 * 2b. Kada dođe do desnog ruba, vraća se natrag na početak (lijevi rub)
 * 2c. Animacija se ponavlja beskonačno
 * 
 * Trebat će vam: window.innerWidth i window.innerHeight
 */

/**
 * 3. Promijenite logiku animiranja boxa (animateBox() funkcija) tako da
 * 3a. Box dolazi do desnog ruba prozora (window)
 * 3b. Kada dođe do desnog ruba, kreće se do donjeg ruba prozora
 * 3c. Kada dođe do donjeg ruba prozora, kreće se do lijevog ruba
 * 3d. Kada dođe do lijevog ruba, kreće se do gornjeg ruba
 * 3e. Kada dođe do gornjeg ruba, kreće se ponovno do desnog ruba
 * 3f. Animacija se ponavlja beskonačno
 */