/**
 * Napišite program za naručivanje na pregled kod doktora.
 * Program treba učiniti sljedeće:
 * 1. Omogućiti korisniku da bira:
 * 1a. Upis novog pregleda
 * 1b. Pretraživanje postojećih pregleda
 * 1c. Izlaz iz programa
 * 2. Kod upisa novog pregleda:
 * 2a. Unijeti ime i prezime
 * 2b. Unijeti datum pregleda
 * 3. Kod pretraživanja:
 * 3a. Pretražiti po imenu i prezimenu
 */

const appointments = [];

let commandInput;

do {
    commandInput = prompt(
        "Odaberite opciju:\n" +
        "1. Upis novog pregleda\n" +
        "2. Pretraživanje postojećih pregleda\n" +
        "3. Izlaz iz programa"
    );

    if (commandInput === "1") {
        const nameInput = prompt("Unesite ime i prezime za pretragu:");
        const dateInput = prompt("Unesite datum pregleda za pretragu:");

        const appointment = {
            name: nameInput,
            date: dateInput,
        };

        appointments.push(appointment);
    } else if (commandInput === "2") {
        const nameInput = prompt("Unesite ime i prezime za pretragu:");

        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];

            if (appointment.name === nameInput) {
                alert(`Pregled za ${appointment.name} je zakazan za ${appointment.date}`);
                break;
            }

            if (i === appointments.length - 1) {
                alert("Nema zakazanih pregleda za uneseno ime i prezime");
            }
        }
    } else if (commandInput === "3") {
        // Izlaz
    } else {
        alert("Nepoznata opcija");
    }
} while (commandInput !== "3");

