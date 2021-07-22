const express = require("express");
const airports = require('./airports')

const app = express()

app.use(express.json())
app.get("/airports", (req, res) => {
    res.json(airports)
})

app.post("/airports", (req, res) => {
    airports.push(req.body);
    console.log(airports);
    res.sendStatus(201)
})

app.get("/airports/:icao", (req, res) => {
    const airportRequested = airports.find(
        (airport) => airport.icao === req.params.icao
        );
    res.json(airportRequested);
})

app.put("/airports/:id", (req, res) => {
    const icao = req.params.id;
    const airportToUpdate = airports.find((airport) => airport.icao === icao);
    const index = airports.indexOf(airportToUpdate);
    airports[index] = req.body;
    console.log(airports[index]);
    res.sendStatus(200);
  });

  app.delete("/airports/:id", (req, res) => {
    const icao = req.params.id;
    const airportToDelete = airports.find((airport) => airport.icao === icao);
    const index = airports.indexOf(airportToDelete);
    airports.splice(index, 1);
    res.json(`Airport ${icao} deleted`);
    res.sendStatus(200);
  });

module.exports = app