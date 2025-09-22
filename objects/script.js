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
        "3. Brisanje zakazanog pregleda\n" +
        "4. Ispis svih pregleda na određeni datum\n" +
        "0. Izlaz iz programa"
    );

    switch (commandInput) {
        case "1": createAppointment(appointments); break;
        case "2": findAppointment(appointments); break;
        case "3": deleteAppointment(appointments); break;
        case "4": listAppointmentsByDate(appointments); break;
        case "0": break;
        default: alert("Nepoznata opcija");
    }
} while (commandInput !== "0");

function createAppointment(appointments) {
    const nameInput = prompt("Unesite ime i prezime za pretragu:");
    const dateInput = prompt("Unesite datum pregleda za pretragu:");

    const appointment = {
        name: nameInput,
        date: dateInput,
    };

    appointments.push(appointment);
}

function findAppointment(appointments) {
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
}

function deleteAppointment(appointments) {
    const nameInput = prompt("Unesite ime i prezime za brisanje pregleda:");

    let indexToDelete = -1;

    for (let i = 0; i < appointments.length; i++) {
        const appointment = appointments[i];

        if (appointment.name === nameInput) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete === -1) {
        alert("Nema zakazanih pregleda za uneseno ime i prezime");

        return;
    }

    appointments.splice(indexToDelete, 1);
    alert(`Pregled za ${nameInput} je obrisan.`);
}

function listAppointmentsByDate(appointments) {
    const dateInput = prompt("Unesite datum za ispis svih pregleda:");

    const filteredAppointments = appointments.filter(function (appointment) {
        return appointment.date === dateInput;
    });

    const names = filteredAppointments.map(function (appointment) {
        return appointment.name;
    });

    alert(`Zakazani pregledi za ${dateInput}:\n` + names.join(", "));
}

/**
 * VJEŽBA:
 * U novoj mapi koja se zove "character-counter" napravite program koji radi sljedeće:
 * 1. Omogućuje korisniku unos teksta (preko prompta)
 * 2. Broji koliko se puta pojavljuje svaki znak u unesenom tekstu
 * 3. Ispisuje rezultate u obliku:
 * A: 3
 * B: 5
 * C: 1
 * ...
 * 4. Ignorira razmake i ne pravi razliku između velikih i malih slova (npr. A i a se računaju kao isti znak)
 * 5. Program se ponavlja dok korisnik ne odluči izaći (npr. unosom praznog teksta)
 * 
 * BITNO:
 * - Koristite objekt za pohranu broja ponavljanja svakog znaka
 * - Koristite for petlju za prolazak kroz svaki znak unesenog teksta
 * 
 * const o = {};
 * let nekaVarijabla = "a";
 * 
 * o.a = 1;
 * o["a"] = 1;
 * o[nekaVarijabla] = 1;
 */