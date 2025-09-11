let names = ["John", "Jane", "Doe", "Iva", "Marko"];
let newNames = [];

console.log(names);

for (let i = 0; i < names.length; i++) {
    newNames[i] = names[i].toLocaleUpperCase();
}

console.log(names);
console.log(newNames);

/**
 * Doradite logiku petlje tako da se u niz s novim imenima
 * upisuju samo ona imena koja su duža od 3 znaka.
 *
 * Dodatno, prebrojte koliko je dugačko svako ime u novom nizu
 * i ispišite tu informaciju u konzolu.
 */
