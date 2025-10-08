(function () {
    class App {
        constructor(element) {
            this.element = element;
            this.openTaskList = new TaskList();
            this.completedTaskList = new TaskList();
        }

        createTask(name) {
            const task = new Task(name, this);
            this.openTaskList.addTask(task);
            this.render();
        }

        updateTask(task) {
            if (task.isCompleted) {
                this.openTaskList.removeTask(task);
                this.completedTaskList.addTask(task);
            } else {
                this.completedTaskList.removeTask(task);
                this.openTaskList.addTask(task);
            }

            this.render();
        }

        render() {
            this.element.innerHTML = '';
            this.element.append(
                document.createTextNode('Open Tasks:'),
                this.openTaskList.render(),
                document.createTextNode('Completed Tasks:'),
                this.completedTaskList.render()
            );
        }
    }

    class Task {
        constructor(name, app) {
            this.name = name;
            this.isCompleted = false;
            this.app = app;
        }

        complete() {
            this.isCompleted = true;
            this.app.updateTask(this);
        }

        undo() {
            this.isCompleted = false;
            this.app.updateTask(this);
        }

        equals(task) {
            return this.name === task.name;
        }

        render() {
            const div = document.createElement('div');
            div.innerText = this.name;

            const button = document.createElement('button');
            button.innerText = this.isCompleted ? 'Undo' : 'Complete';
            button.addEventListener('click', () => {
                if (!this.isCompleted) {
                    this.complete();
                } else {
                    this.undo();
                }
            });

            div.appendChild(button);

            return div;
        }
    }

    class TaskList {
        constructor() {
            this.tasks = [];
        }

        addTask(task) {
            this.tasks.push(task);
        }

        removeTask(task) {
            this.tasks = this.tasks.filter(t => !t.equals(task));
        }

        render() {
            const div = document.createElement('div');

            for (let i = 0; i < this.tasks.length; i++) {
                div.appendChild(this.tasks[i].render());
            }

            return div;
        }
    }

    const app = new App(document.querySelector("#output"));
    app.render();

    const form = document.querySelector("#form");
    const input = document.querySelector("#task");
    const submit = document.querySelector("#submit");

    submit.setAttribute('disabled', 'disabled');

    input.addEventListener("input", function () {
        if (input.value.trim() !== '') {
            submit.removeAttribute('disabled');
        } else {
            submit.setAttribute('disabled', 'disabled');
        }
    });

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const value = input.value.trim();

        app.createTask(value);

        if (value !== '') {
            input.value = '';
            submit.setAttribute('disabled', 'disabled');
        }
    });
})();

/**
 * Napravite aplikaciju za upravljanje listom najdražih filmova.
 * Aplikacija korisniku mora omogućiti:
 * - Dodavanje novog filma u listu
 * - Ocjenjivanje filma (1-10)
 * - Ispis liste
 * 
 * Napravite klasu App koja će implementirati glavnu logiku aplikacije (ono što korisnik radi s aplikacijom).
 * Napravite klasu Movie koja će predstavljati jedan film.
 * Napravite klasu MovieList koja će predstavljati listu filmova.
 * 
 * Klase modelirajte (odredite im svojstva i metode) po volji.
 * 
 * NE MORATE RADITI OBRASCE AKO NE STIGNETE, MOŽETE KORISTIT prompt() ZA UNOS PODATAKA.
 * (npr. stisnem dugme i otvori se prompt)
 */

(function () {
    class App {
        constructor(element) {
            this.element = element;
            this.movieList = new MovieList();
        }

        addMovie(name, rating) {
            const movie = new Movie(name, rating);
            this.movieList.add(movie);
            this.render();
        }

        rateMovie(movie, rating) {
            movie.rate(rating);
            this.render();
        }

        render() { }
    }

    class Movie {
        constructor(name, rating, app) {
            this.name = name;
            this.rating = rating;
            this.app = app;
        }

        rate(rating) {
            this.rating = rating;
        }

        render() {
            const button = document.createElement('button');
            button.innerText = `Rate ${this.name}`;
            button.addEventListener('click', () => {
                const newRating = prompt(`Rate ${this.name} (1-10):`, this.rating);
                if (newRating !== null) {
                    this.app.rateMovie(this, parseInt(newRating, 10));
                }
            });
        }
    }

    class MovieList {
        constructor() {
            this.movies = [];
        }

        add(movie) {
            this.movies.push(movie);
        }
    }
})();