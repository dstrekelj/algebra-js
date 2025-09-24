function game() {
    const boxes = [];

    let score = 0;

    for (let i = 0; i < 10; i++) {
        boxes.push({
            x: Math.random() * (window.innerWidth - 100),
            y: Math.random() * (window.innerHeight - 100),
            width: 100,
            height: 100,
            color: 'red'
        });
    }

    for (let i = 0; i < boxes.length; i++) {
        setTimeout(function () {
            const box = boxes[i];
            const div = document.createElement('div');
            div.classList.add('box');
            div.style.position = 'fixed';
            div.style.backgroundColor = box.color;
            div.style.width = box.width + 'px';
            div.style.height = box.height + 'px';
            div.style.left = box.x + 'px';
            div.style.top = box.y + 'px';
            document.body.appendChild(div);

            const timeoutId = setTimeout(function () {
                document.body.removeChild(div);
            }, 2000);

            div.addEventListener('click', function () {
                score++;
                document.body.removeChild(div);
                clearTimeout(timeoutId);
            });
        }, (i + 1) * 1000);
    }

    setTimeout(function () {
        alert('Igra završena! Vaš rezultat je: ' + score + ' od 10');
    }, boxes.length * 1000 + 2000);
}

game();
