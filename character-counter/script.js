/**
 * VJEŽBA:
 * 2. Broji koliko se puta pojavljuje svaki znak u unesenom tekstu
 * 3. Ispisuje rezultate u obliku:
 * A: 3
 * B: 5
 * C: 1
 * ...
 * 4. Ignorira razmake i ne pravi razliku između velikih i malih slova (npr. A i a se računaju kao isti znak)
 * 5. Program se ponavlja dok korisnik ne odluči izaći (npr. unosom praznog teksta)
 * 
 * BITNO:
 * - Koristite objekt za pohranu broja ponavljanja svakog znaka
 * - Koristite for petlju za prolazak kroz svaki znak unesenog teksta
 * 
 * const o = {};
 * let nekaVarijabla = "a";
 * 
 * o.a = 1;
 * o["a"] = 1;
 * o[nekaVarijabla] = 1;
 */

let textInput;

do {
    textInput = prompt("Unesite tekst (prazan unos za izlaz):");

    const text = textInput.toLocaleLowerCase();

    const characterCounter = {};

    for (let i = 0; i < text.length; i++) {
        const char = text[i];

        if (char === " ") continue;

        if (characterCounter[char] === undefined) {
            characterCounter[char] = 1;
        } else {
            characterCounter[char]++;
        }
    }

    console.log(characterCounter);
} while (textInput !== "");
