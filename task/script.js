(function () {
    const form = document.querySelector("#form");
    const input = document.querySelector("#task");
    const output = document.querySelector("#output");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const task = input.value;
        output.innerHTML += `<p>${task}</p>`;
    });
})();