"use strict";
(function () {
    class Box {
        constructor(x, y, width, height, color) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
            this.color = color;
            this.div = document.createElement('div');
        }

        update() { }

        render(element) {
            this.div.style.position = 'fixed';
            this.div.style.left = `${this.x}px`;
            this.div.style.top = `${this.y}px`;
            this.div.style.width = `${this.width}px`;
            this.div.style.height = `${this.height}px`;
            this.div.style.backgroundColor = this.color;
            element.appendChild(this.div);
        }
    }

    class Player extends Box {
        constructor(x, y) {
            super(x, y, 50, 50, 'blue');

            window.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'ArrowUp':
                        this.y -= this.height;
                        this.y = Math.max(this.y, 0);
                        break;
                    case 'ArrowDown':
                        this.y += this.height;
                        this.y = Math.min(this.y, window.innerHeight - this.height);
                        break;
                    case 'ArrowLeft':
                        this.x -= this.width;
                        this.x = Math.max(this.x, 0);
                        break;
                    case 'ArrowRight':
                        this.x += this.width;
                        this.x = Math.min(this.x, window.innerWidth - this.width);
                        break;
                    default:
                        break;
                }
            });
        }
    }

    class Obstacle extends Box {
        constructor(x, y) {
            super(x, y, 50, 50, 'red');

            this.sleepTime = 10;
        }

        update() {
            if (this.sleepTime > 0) {
                this.sleepTime -= 1;
                return;
            }

            const randomX = Math.random();
            const randomY = Math.random();

            this.x += this.width * (randomX > 0.5 ? 1 : -1);
            this.y += this.height * (randomY > 0.5 ? 1 : -1);

            this.x = Math.min(this.x, window.innerWidth - this.width);
            this.x = Math.max(this.x, 0);
            this.y = Math.min(this.y, window.innerHeight - this.height);
            this.y = Math.max(this.y, 0);

            this.sleepTime = 10;
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
    }, 1000 / 30);
})();
