(function () {

    class App {
        constructor() { }

        renderSchedule() {
            fetch('https://api.tvmaze.com/schedule/full')
                .then(response => response.json())
                .then(data => {
                    /**
                     * Filtrirati sve epizode tako da se prikažu samo one
                     * koje se emitiraju danas (trenutni datum na klijentu).
                     */
                    data.filter(/* TU IDE FUNKCIJA ZA FILTER */).forEach(episode => {
                        const episodeObject = {
                            name: episode.name,
                            season: episode.season,
                            number: episode.number,
                            airstamp: episode.airstamp,
                            showName: episode._embedded.show.name,
                        }

                        const div = document.createElement('div');
                        div.innerHTML = `
                            ${episodeObject.showName}<br>
                            S${episodeObject.season}E${episodeObject.number} ${episodeObject.name}<br>
                            ${episodeObject.airstamp}
                            <hr>
                        `;
                        document.body.appendChild(div);
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