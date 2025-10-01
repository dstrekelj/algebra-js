"use strict";
(function () {
    class Box {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
        }

        update() { }

        render(element) {
            const div = document.createElement('div');
            div.style.position = 'fixed';
            div.style.left = `${this.x}px`;
            div.style.top = `${this.y}px`;
            div.style.width = `${this.width}px`;
            div.style.height = `${this.height}px`;
            div.style.backgroundColor = this.color;
            element.appendChild(div);
        }
    }

    class Player extends Box {
        constructor(x, y) {
            super(x, y, 50, 50, 'blue');
        }
    }

    class Obstacle extends Box {
        constructor(x, y) {
            super(x, y, 100, 100, 'red');
        }

        update() {
            this.x += 10;
            this.y += 10;
        }
    }

    const body = document.body;
    const player = new Player(100, 100);
    const obstacle = new Obstacle(400, 300);

    setInterval(() => {
        player.update();
        obstacle.update();

        body.innerHTML = '';
        player.render(body);
        obstacle.render(body);
    }, 1000 / 10);
})();
