"use strict";

(function () {

    const form = document.getElementById('search-form');
    const input = form.querySelector('input[name="q"]');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('input value', input.value);

        searchShows(input.value)
            .then((shows) => console.log('Shows', shows));
    });

    function searchShows(query) {
        const url = `https://api.tvmaze.com/search/shows?q=${query}`;

        return fetch(url)
            .then((response) => response.json())
            .then((json) => json.map((item) => new Show(item)))
            .catch((error) => {
                console.log('Error!', error);
            });
    }

    class Show {
        constructor(data) {
            this.name = data.show.name;
        }

        render() {
            const div = document.createElement('div');
            div.textContent = this.name;

            return div;
        }
    }

})();
