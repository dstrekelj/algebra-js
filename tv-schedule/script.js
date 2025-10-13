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
        constructor() { }

        renderSchedule() {
            fetch('https://api.tvmaze.com/schedule/full')
                .then(response => response.json())
                .then(data => {
                    data.map(episodeData => Episode.fromResponse(episodeData))
                        .filter(episode => {
                            const today = new Date();

                            return episode.isAiring(today);
                        })
                        .forEach(episode => {
                            const episodeElement = episode.render();

                            document.body.appendChild(episodeElement);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    const app = new App();
    app.renderSchedule();

})();