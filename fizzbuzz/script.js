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