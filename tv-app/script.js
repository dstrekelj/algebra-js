"use strict";

(function () {

    const form = document.getElementById('search-form');
    const input = form.querySelector('input[name="q"]');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        console.log('input value', input.value);

        searchShows(input.value)
            .then((shows) => {
                resultsDiv.innerHTML = '';
                shows.forEach((show) => {
                    const showDiv = show.render();
                    resultsDiv.appendChild(showDiv);
                });
            });
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
            this.summary = data.show.summary;
            this.thumbnail = data.show.image ? data.show.image.medium : '';
        }

        render() {
            const div = document.createElement('div');

            if (this.thumbnail !== '') {
                const img = document.createElement('img');
                img.src = this.thumbnail;
                div.appendChild(img);
            }

            const nameDiv = document.createElement('div');
            nameDiv.textContent = this.name;
            div.appendChild(nameDiv);

            const summaryDiv = document.createElement('div');
            summaryDiv.innerHTML = this.summary;
            div.appendChild(summaryDiv);

            return div;
        }
    }

})();
