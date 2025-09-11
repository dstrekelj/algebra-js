/**
 * Napravite novu projektnu mapu: "circle"
 * Kreirajte osnovni HTML dokument i JS dokument.
 * Povežite HTML dokument sa vanjskom JS datotekom.
 * 
 * Napišite program koji će izračunati površinu i opseg kruga.
 * 
 * Program treba zatražiti od korisnika unos radijusa kruga.
 * 
 * Zatim treba izračunati i ispisati površinu i opseg kruga.
 * 
 * Površina kruga se računa kao π * r^2, gdje je r radijus.
 * Opseg kruga se računa kao 2 * π * r.
 * 
 * Dodatno, program treba provjeriti je li korisnik unio valjani broj.
 * Ako nije, treba ispisati poruku o grešci.
 */

const inputRadius = prompt("Unesite radijus kruga:");

const radius = parseFloat(inputRadius);

if (isNaN(radius) || radius <= 0) {
    alert("Greška: Unesite valjani pozitivan broj za radijus.");
} else {
    const area = Math.PI * Math.pow(radius, 2);
    const circumference = 2 * Math.PI * radius;

    alert(
        `Površina kruga sa radijusom ${radius} je: ${area.toFixed(2)}` +
        `\nOpseg kruga sa radijusom ${radius} je: ${circumference.toFixed(2)}`
    );
}