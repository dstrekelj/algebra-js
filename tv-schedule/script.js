(function () {
    class Episode {
        constructor(name, season, number, airstamp, showName) {
            this.name = name;
            this.season = season;
            this.number = number;
            this.airstamp = airstamp;
            this.showName = showName;
        }

        isAiring(date) {
            const episodeDate = new Date(this.airstamp);

            return date.getDate() === episodeDate.getDate() &&
                date.getMonth() === episodeDate.getMonth() &&
                date.getFullYear() === episodeDate.getFullYear();
        }

        render() {
            const div = document.createElement('div');

            div.innerHTML = `
                <strong>${this.showName}</strong><br>
                S${this.season}E${this.number} ${this.name}<br>
                ${this.airstamp}
                <hr>
            `;

            return div;
        }

        static fromResponse(response) {
            return new Episode(
                response.name,
                response.season,
                response.number,
                response.airstamp,
                response._embedded.show.name
            );
        }
    }

    class App {
        constructor(element) {
            this.element = element;
            this.episodes = [];
        }

        renderSchedule(showName) {
            this.element.innerHTML = '';

            fetch('https://api.tvmaze.com/schedule/full')
                .then(response => response.json())
                .then(data => {
                    this.episodes = data.map(episodeData => Episode.fromResponse(episodeData));

                    this.episodes
                        .filter(episode => {
                            const today = new Date();

                            if (!episode.isAiring(today)) {
                                return false;
                            }

                            if (!showName) {
                                return true;
                            }

                            return episode.showName.toLowerCase().includes(showName.toLowerCase());
                        })
                        .forEach(episode => {
                            const episodeElement = episode.render();

                            this.element.appendChild(episodeElement);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    const appElement = document.getElementById('app');
    const app = new App(appElement);
    app.renderSchedule();

    const filterForm = document.getElementById('filter-form');
    filterForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const showName = filterForm.querySelector('[name="showName"]').value;
        app.renderSchedule(showName);
    });
})();