const express =require("express")
const axios = require("axios")
const cors= require("cors")
const app = express()

app.use(cors())/
app.get("/characters", async (req, res) => {
  
    const url= 'https://rickandmortyapi.com/api/character'

    try {
        const response =await axios.get(url)
        const character= response.data.results;
        res.json(character)
      
    } catch (ERROR) {
        res.status(500).json({error:"Personajes no encontrados"})

    }
})

app.get("/characters/:name", async (req, res) => {
    const rickymortyName= req.params.name
    const url2= `https://rickandmortyapi.com/api/character/?name=${rickymortyName}`

    try {
        const response =await axios.get(url2)//funciona como fetch y coge la url de la variable url.
        const character2= response.data.results[0];

        res.json(character2)
    } catch (ERROR) {
        res.status(404).json({error:"Personaje no encontrado"})

    }
})


app.listen(3000,() => {
    console.log ( "express está escuchando en el puerto http://localhost:3000")
})