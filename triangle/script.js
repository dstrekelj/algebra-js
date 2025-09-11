/**
 * Napravite novi projekt u mapi "triangle".
 * Kreirajte osnovni HTML dokument i JS dokument.
 * Povežite HTML dokument sa vanjskom JS datotekom.
 * 
 * Napišite program koji će izračunati površinu i opseg PRAVOKUTNOG TROKUTA.
 * 
 * Program treba zatražiti od korisnika unos duljina tri stranice trokuta.
 * 
 * Zatim treba provjeriti je li trokut pravokutan (Pitagorin poučak).
 * Ako jest, treba izračunati i ispisati površinu i opseg trokuta.
 * Ako nije, treba ispisati poruku da trokut nije pravokutan.
 * 
 * Površina pravokutnog trokuta se računa kao (a * b) / 2, gdje su a i b katete.
 * Opseg trokuta se računa kao zbroj svih triju stranica (a + b + c).
 * 
 * Dodatno, program treba provjeriti je li korisnik unio valjane brojeve.
 * Ako nije, treba ispisati poruku o grešci.
 */

const inputA = prompt("Unesite duljinu prve katete trokuta (a):");
const inputB = prompt("Unesite duljinu druge katete trokuta (b):");
const inputC = prompt("Unesite duljinu hipotenuze trokuta (c):");

const a = parseFloat(inputA);
const b = parseFloat(inputB);
const c = parseFloat(inputC);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert("Molimo unesite brojeve za duljine stranica.");
} else if (a <= 0 || b <= 0 || c <= 0) {
    alert("Duljine stranica moraju biti pozitivni brojevi.");
} else if (c <= a || c <= b) {
    alert("Hipotenuza (c) mora biti najveća stranica.");
} else {
    if (Math.pow(a, 2) + Math.pow(b, 2) !== Math.pow(c, 2)) {
        alert("Trokut nije pravokutan.")
    } else {
        const perimeter = a + b + c;
        const area = (a * b) / 2;

        alert(
            'Površina pravokutnog trokuta je: ' + area +
            '\nOpseg pravokutnog trokuta je: ' + perimeter
        );
    }
}