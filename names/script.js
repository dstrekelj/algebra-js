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

const text = inputName.trim();

if (text === '') {
    alert("Niste unijeli ime");
} else if (!isNaN(parseInt(text))) {
    alert("Ime ne smije biti broj");
} else if (text.trim() === '') {
    alert("Ime ne smije biti prazno");
} else {
    let vowels = '';
    let consonants = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i].toLowerCase();

        if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
            vowels += char;
        } else {
            consonants += char;
        }
    }

    let vowelsText = vowels.length > 0 ? 'Samoglasnici su: ' + vowels : 'Nema samoglasnika';
    let consonantsText = consonants.length > 0 ? 'Suglasnici su: ' + consonants : 'Nema suglasnika';

    alert("Ime: " + text + ". " + vowelsText + ", " + consonantsText);

    const plain = "abcćčdđefghijklmnoprsštuvzž";
    const cypher = "ćčdđefghijklmnoprsštuvzžabc";

    const plaintext = text.toLowerCase();
    let cyphertext = "";

    for (let i = 0; i < plaintext.length; i++) {
        const plainChar = plaintext[i];
        const index = plain.indexOf(plainChar);
        const cypherChar = cypher[index];
        cyphertext += cypherChar;
    }

    alert("Cyphertext: " + cyphertext);
}

/**
 * Greške:
 * 1. Korisnik može unijeti broj umjesto imena. Ako korisnik unese broj, program treba ispisati poruku u Alert prozor.
 * 2. Ako ime nema suglasnike ili samoglasnike, program treba napisati "Nema suglasnika" odnosno "Nema samoglasnika"
 * u Alert prozoru.
 * 3. Korisnik može unijeti samo razmake kao ime. Ako korisnik to učini, program treba ispisati poruku kako ime
 * ne smije biti prazno.
 */