let names = ["John", "Jane", "Doe", "Iva", "Marko"];
let newNames = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 3) {
        newNames.push(names[i].toLocaleUpperCase());
    }
}

for (let i = 0; i < newNames.length; i++) {
    const name = newNames[i];
    let sum = 0;

    for (let j = 0; j < name.length; j++) {
        sum += name.charCodeAt(j);
    }

    console.log(name + " ima " + name.length + " znakova.");
    console.log("Zbroj ASCII vrijednosti znakova imena " + name + " je " + sum);
}

/**
 * Doradite logiku petlje tako da se u niz s novim imenima
 * upisuju samo ona imena koja su duža od 3 znaka.
 *
 * Dodatno, prebrojte koliko je dugačko svako ime u novom nizu
 * i ispišite tu informaciju u konzolu.
 */


