var firstName = 'Domagoj';
let age = 32;
let height = 1.73;
const isTeaching = true;

console.log(typeof "1", typeof 1);
console.log(firstName, age, isTeaching);

console.log(firstName, firstName.toLocaleUpperCase(firstName));

/**
 * Dodajte varijablu "bio" (kao biografija) i napišite tri rečenice o sebi.
 * Svaku rečenicu odvojite tako da se u konzoli ispište u novi red (koristite \n).
 * Za ovo NE SMIJETE napisati console.log više puta za redom, nego mora biti
 * jedan console.log poziv sa stringom koji sadrži \n.
 * 
 * U konzoli ispišite vaše ime veikim tiskanim slovima (koristite toLocaleUpperCase metodu).
 */

const bio = "Moje ime je Domagoj.\nImam 32 godine.\nVisok sam 1.73m.";
console.log(bio);
console.log(firstName.toLocaleUpperCase());
console.log(firstName.charAt(2));

/**
 * Napišite program koji će izračunati površinu pravokutnika.
 * Program treba deklarirati dvije varijable: a i b
 * Inicijalizirajte varijable s vrijednostima 5 i 10.
 * Zatim treba izračunati površinu pravokutnika i ispisati rezultat u konzolu.
 * 
 * Nakon toga, doradite program tako da ispiše opseg pravokutnika.
 * 
 * Nakon toga, doradite program tako da ispiše dijagonalu pravokutnika.
 * Za to koristite Math.sqrt() metodu (provjerite MDN za više informacija).
 */

const inputA = prompt("Unesite dužinu stranice a:");
const inputB = prompt("Unesite dužinu stranice b:");

const a = parseFloat(inputA);
const b = parseFloat(inputB);

if (isNaN(a) || isNaN(b)) {
    alert("Unesene vrijednosti nisu valjani brojevi.");
} else if (a <= 0 || b <= 0) {
    alert("Dužine stranica moraju biti pozitivni brojevi.");
} else {
    const area = a * b;
    alert("Površina pravokutnika je: " + area);

    const perimeter = 2 * (a + b);
    alert("Opseg pravokutnika je: " + perimeter);

    const diagonal = Math.sqrt(a * a + b * b);
    alert("Dijagonala pravokutnika je: " + diagonal.toFixed(2));
}

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

