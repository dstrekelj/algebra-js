function events() {
    const textInput = document.querySelector('#text');
    const textInputInfo = document.querySelector('#text-info');
    const form = document.querySelector('#form');

    const limit = 10;

    textInput.addEventListener('keyup', function (event) {
        let remaining = limit - event.target.value.length;

        textInputInfo.innerHTML = remaining;

        if (event.key === 'Backspace') {
            remaining += 1;
            textInput.readOnly = false;
        }

        if (remaining <= 0) {
            textInput.readOnly = true;
        } else {
            textInput.readOnly = false;
        }
    });

    form.addEventListener('submit', function (event) {
        //event.preventDefault();
    });
}

events();