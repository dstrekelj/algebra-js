/**
 * Napišite program koji će raditi sljedeće:
 * 1. Tražit će unos dva broja i oba broja će spremiti u varijable
 * 2. Ispisat će zbroj, razliku, umnožak i kvocijent ta dva broja
 */

const number1 = readNumber("Unesite prvi broj:");
const number2 = readNumber("Unesite drugi broj:");
const number3 = readNumber();

if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {
    alert("Molimo unesite valjane brojeve.");
} else {
    const sum = add(add(number1, number2), number3);
    const difference = subtract(subtract(number1, number2), number3);
    const product = multiply(multiply(number1, number2), number3);
    const quotient = divide(divide(number1, number2), number3);

    alert("Zbroj: " + sum + "\n" +
        "Razlika: " + difference + "\n" +
        "Umnožak: " + product + "\n" +
        "Kvocijent: " + quotient);
}

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) {
        return NaN;
    }
    return a / b;
}

function readNumber(text = "Unesite broj:") {
    const numberInput = prompt(text);
    const numberValue = parseFloat(numberInput);
    return numberValue;
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