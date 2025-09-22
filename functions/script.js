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
