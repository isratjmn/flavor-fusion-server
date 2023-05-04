const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 7000;

const services = require("./data/services.json");
const cards = require("./data/cards.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Flavor Fusion Site is Running!!!");
});
app.get("/services", (req, res) => {
	res.send(services);
});


app.get("/cards", (req, res) => {
	res.send(cards);
});

app.get("/cards/:id", (req, res) => {
	const id = req.params.id;
	console.log(id);
	const selectCards = cards.find(n => n._id === id);
	res.send(selectCards);
});

app.listen(port, () => {
	console.log(`Flavor Fusion Site is Running on Port: ${port}`);
});
