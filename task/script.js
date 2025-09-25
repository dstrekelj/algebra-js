(function () {
    const form = document.querySelector("#form");
    const input = document.querySelector("#task");
    const output = document.querySelector("#output");
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
        const task = input.value.trim();

        if (task !== '') {
            output.innerHTML += `<p>${task}</p>`;
            input.value = "";
            submit.setAttribute('disabled', 'disabled');
        }
    });
})();