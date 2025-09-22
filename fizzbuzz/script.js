/**
 * Napravite novu projektnu mapu: "fizzbuzz"
 * Kreirajte osnovni HTML dokument i JS dokument.
 * Povežite HTML dokument sa vanjskom JS datotekom.
 * 
 * Napišite program koji će ispisati brojeve od 1 do 100.
 * 
 * Za brojeve djeljive sa 3, ispišite "Fizz" umjesto broja.
 * Za brojeve djeljive sa 5, ispišite "Buzz" umjesto broja.
 * Za brojeve djeljive sa 3 i 5, ispišite "FizzBuzz".
 * Za ostale brojeve, ispišite sam broj.
 * 
 * Koristite for petlju i uvjetno grananje (if) za rješavanje zadatka.
 */

let fizzCount = 0;
let buzzCount = 0;
let fizzBuzzCount = 0;

for (let i = 15; i >= 1; i--) {
    let text = '';

    if (i % 3 === 0) {
        text += 'Fizz';
        fizzCount++;
    }
    if (i % 5 === 0) {
        text += 'Buzz';
        buzzCount++;
    }
    if (text === 'FizzBuzz') {
        fizzBuzzCount++;
    }

    console.log(text === '' ? i : text);
}

console.log("Fizz count:", fizzCount);
console.log("Buzz count: " + buzzCount);
console.log(`FizzBuzz count: ${fizzBuzzCount}`);

let j = 1;
do {
    let text = '';
    if (j % 3 === 0) text += 'Fizz';
    if (j % 5 === 0) text += 'Buzz';
    console.log(text === '' ? j : text);
    j++;
} while (j <= 15);

let k = 1;
while (k <= 15) {
    let text = '';
    if (k % 3 === 0) text += 'Fizz';
    if (k % 5 === 0) text += 'Buzz';
    console.log(text === '' ? k : text);
    k++;
}

/**
 * Vratite se u zadatak kojeg ste već radili: FIZZBUZZ
 * 
 * Doradite FizzBuzz tako da:
 * 1. Napišete funkciju koja se zove fizzBuzz()
 * 2. Funkcija prima četiri parametra:
 * 2a. "start" - početni broj (npr. 1)
 * 2b. "end" - završni broj (npr. 100)
 * 2c. "fizzNum" - broj za koji će se ispisati "Fizz" (npr. 3)
 * 2d. "buzzNum" - broj za koji će se ispisati "Buzz" (npr. 5)
 * 3. Funkcija ispisuje brojeve od "start" do "end"
 * 4. Za brojeve djeljive sa "fizzNum", ispišite "Fizz" umjesto broja.
 * 5. Za brojeve djeljive sa "buzzNum", ispišite "Buzz" umjesto broja.
 * 6. Za brojeve djeljive sa oba, ispišite "FizzBuzz".
 * 7. Za ostale brojeve, ispišite sam broj.
 * 
 * Pozovite funkciju fizzBuzz() koristeći parametre koje pročitate preko prompt()
 * od korisnika.
 */

function fizzBuzz(start, end, fizzNum, buzzNum) {
    const body = document.body;

    const ul = document.createElement('ul');
    body.appendChild(ul);

    const div = document.createElement('div');
    body.appendChild(div);

    let i = start;

    const counter = {};

    while (i <= end) {
        let text = '';

        if (i % fizzNum === 0) text += 'Fizz';
        if (i % buzzNum === 0) text += 'Buzz';

        if (counter[text] === undefined) {
            counter[text] = 1;
        } else {
            counter[text]++;
        }

        const li = document.createElement('li');
        li.textContent = text === '' ? i : text;
        ul.appendChild(li);

        i++;
    }

    console.log(counter);
}

console.log("...")
fizzBuzz(1, 15, 2, 7)
