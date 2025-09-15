/**
 * Napišite program koji će učiniti sljedeće:
 * 1. Tražit će od korisnika unos imena i spremiti u varijablu
 * 2. Uneseno ime će obraditi tako da
 * 2a. Svi samoglasnici budu zapisani u jednu varijablu
 * 2b. Svi suglasnici u drugu varijablu
 * 3. Ispisati u alert prozor ime sa samo samoglasnicima i ime sa samo suglasnicima
 * 
 * Primjer:
 * Ako korisnik unese "Domagoj"
 * Program će ispisati: "Samoglasnici su: oao, Suglasnici su: Dmgj"
 */

const inputName = prompt("Unesite ime:");

if (inputName === '') {
    alert("Niste unijeli ime");
} else {
    let vowels = '';
    let consonants = '';

    for (let i = 0; i < inputName.length; i++) {
        const char = inputName[i].toLowerCase();

        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            vowels += char;
        } else {
            consonants += char;
        }
    }

    alert("Ime: " + inputName + ". Samoglasnici su: " + vowels + ", Suglasnici su: " + consonants);
}

/**
 * Greške:
 * 1. Korisnik može unijeti broj umjesto imena. Ako korisnik unese broj, program treba ispisati poruku u Alert prozor.
 * 2. Ako ime nema suglasnike ili samoglasnike, program treba napisati "Nema suglasnika" odnosno "Nema samoglasnika"
 * u Alert prozoru.
 * 3. Korisnik može unijeti samo razmake kao ime. Ako korisnik to učini, program treba ispisati poruku kako ime
 * ne smije biti prazno.
 */