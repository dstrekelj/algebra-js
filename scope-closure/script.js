/**
 * Želimo ispisivati poruke kao što su:
 * "Pozdrav Pero! Vaša narudžba je zaprimljena."
 * "Pozdrav Pero! Vaša narudžba je isporučena."
 * "Pozdrav Pero! Vaša narudžba je otkazana."
 */

function createMessageFunction(name) {
    return function (text) {
        return "Pozdrav " + name + "! " + text;
    }
}

const messagePero = createMessageFunction("Pero");
console.log(messagePero("Vaša narudžba je zaprimljena."));

const messageMara = createMessageFunction("Mara");
console.log(messageMara("Vaša narudžba je isporučena."));

function createLogFunction(prefix) {
    return function (message) {
        console.log(new Date() + " - " + prefix + ": " + message);
    }
}

const errorLog = createLogFunction("ERROR");
errorLog("Došlo je do greške.");
// 2024-06-01T12:00:00.000Z - ERROR: Došlo je do greške.

const infoLog = createLogFunction("INFO");
infoLog("Sustav radi ispravno.");
// 2024-06-01T12:00:00.000Z - INFO: Sustav radi ispravno.