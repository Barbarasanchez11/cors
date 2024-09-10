function getCharacter() {
    const nameInput = document.getElementById("nombre");
    const info = document.getElementById("info");
   
    const characterName = nameInput.value.toLowerCase();

    fetch(`https://rickandmortyapi.com/api/character/?name=${characterName}`)
        .then(response => response.json())
        .then(data => {
            
            // Verificamos que haya resultados
            if (data.results && data.results.length > 0) {
                const personajes = data.results[0];
               
                const {name, status, species, gender, origin: {name: planetDimension}, image} = personajes;
                info.innerHTML = `
                    <h2>${name}</h2>
                    <img src="${image}" alt="${name}"/>
                    <p>Status: ${status}</p>
                    <p>Especie: ${species}</p>
                    <p>Género: ${gender}</p>
                    <p>Origen: ${planetDimension}</p>
                `;
            } else {
                info.innerHTML = `<p>No se encontró ningún personaje con ese nombre.</p>`;
            }
        })
        .catch(error => {
            info.innerHTML = `<p>Imposible acceder al personaje. Error: ${error.message}</p>`;
        });
}
