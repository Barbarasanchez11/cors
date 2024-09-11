const getCharacter = async () => {
    const characterName = document.getElementById('character').value.toLowerCase();
    const result = document.getElementById('result');
    const urlBase = `http://localhost:3000/characters/${characterName}`
 
    
    try {
        const response = await fetch(urlBase)
        const data = await response.json()
        result.innerHTML = `
        ${data.map(character => {
            const {name, status, gender, species, image, origin: {name: origin} } = character
            return `
            <h2>${name}</h2>
                    <img src="${image}" alt="${name}"/>
                    <p><strong>Status:</strong> ${status}</p>
                    <p><strong>Especie:</strong> ${species}</p>
                    <p><strong>Género:</strong> ${gender}</p>
                    <p><strong>Origen:</strong> ${origin}</p>
                `;
               })}
        ` 
    }catch (err) {
        console.log(`Este es el error: ${err}`)
        result.innerHTML = 'El personaje no se ha encontrado'

    }
}

  
