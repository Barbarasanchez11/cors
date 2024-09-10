function getCharacter() {
    const nameInput = document.getElementById('character');
    const info = document.getElementById('info');
   
    const characterName = nameInput.value.toLowerCase();
    
    
    fetch(`http://localhost:3000/characters/${characterName}`)
    
        .then(response => response.json())
        .then(data => {       
            if (data) {
              const {name, status, species, gender, origin: {name: planetDimension}, image} = data;
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
