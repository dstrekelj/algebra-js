/**
 * Napravite klasu TaskList koja:
 * - se konstruira sa praznim nizom "tasks"
 * - koja ima metodu addTask() koja
 *  prima Task objekt kao parametar,
 *  sprema ga u niz "tasks"
 * - koja ima metodu render() koja
 *  prima HTML element kao parametar,
 *  briše njegov sadržaj,
 *  ispisuje sve taskove iz "tasks"
 * 
 * Konstruirajte klasu TaskList i spremite u konstantu "taskList".
 * 
 * Na submit obrasca dodajte kreirani task u TaskList pomoću metode addTask()
 * i pozovite metodu render() da ispišete sve taskove
 */

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
            this.element.appendChild(document.createTextNode('Open Tasks:'));
            this.element.appendChild(this.openTaskList.render());
            this.element.appendChild(document.createTextNode('Completed Tasks:'));
            this.element.appendChild(this.completedTaskList.render());
        }
    }

    class Task {
        constructor(name, app) {
            this.name = name;
            this.isCompleted = false;
            this.app = app;
        }

        complete() {
            console.log('completing task', this.name);
            this.isCompleted = true;
            this.app.updateTask(this);
        }

        undo() {
            console.log('undoing task', this.name);
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
                console.log('button clicked', this.name);
                if (!this.isCompleted) {
                    this.complete();
                } else {
                    this.undo();
                }
            });

            div.appendChild(button);
            console.log(div);

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