const axios = require('axios');



const express = require('express')
const app = express()
var port = process.env.PORT || 8080;


app.get('/parkings', async (req, res) => {
    var resp = await axios.get('http://open_preprod.tan.fr/ewp/tempsattente.json/FFAU');
    var trams = resp.data

    trams = trams.filter(tram => tram.ligne.numLigne == "3" && tram.sens == 2)
    var temps = trams[0].temps
    temps = temps.replace("mn", "minutes.")
    res.status(200).json("Le prochain tram est dans " + temps)


})

app.listen(port, () => {
    console.log("Serveur à l'écoute")
})