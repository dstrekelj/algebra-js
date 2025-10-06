(function () {
    "use strict";

    const form = document.querySelector("#search-form");
    const input = document.querySelector('input[name="q"]');
    const resultsDiv = document.querySelector("#results");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const url = `https://api.tvmaze.com/search/shows?q=${input.value}`;

        fetch(url)
            .then((response) => {
                console.log('response', response);

                if (!response.ok) {
                    alert("The server returned and error: " + response.status);
                    return [];
                }

                return response.json();
            })
            .then((data) => {
                resultsDiv.innerHTML = "";
                for (let i = 0; i < data.length; i++) {
                    render(data[i]);
                }
            })
            .catch((error) => {
                console.error('log', error);
                alert("Something went wrong!");
            });

        function render(data) {
            const div = document.createElement("div");
            div.textContent = JSON.stringify(data.show.name);
            resultsDiv.appendChild(div);
        }
    });
})();
