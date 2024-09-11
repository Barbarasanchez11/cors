const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const urlBase = "https://rickandmortyapi.com/api/character";

app.use(cors());

app.get("/characters", async (req, res) => {
  try {
    const response = await axios.get(urlBase);
    const characters = response.data.results;
    res.json(characters);
  } catch (err) {
    res.status(500).json({ mensaje: `Personaje no encontrado: ${err.message}` });
  }
});

app.get("/characters/:name", async (req, res) => {
  const characterName = req.params.name;
  try {
    const response = await axios.get(`${urlBase}/?name=${characterName}`);
    const characters = response.data.results;

    if (!characters || characters.length === 0) {
      return res.status(404).json({ mensaje: "Personaje no encontrado" });
    }

    const charactersList = characters.map(character => {
      const { name, status, gender, species, image, origin: { name: origin } } = character;
      return { name, status, gender, species, image, origin };
    });
    res.json(charactersList);
  } catch (err) {
    res.status(500).json({ mensaje: `Error al buscar el personaje: ${err.message}` });
  }
});

app.listen(3000, () => {
  console.log("Express está escuchando en el puerto http://localhost:3000");
});
