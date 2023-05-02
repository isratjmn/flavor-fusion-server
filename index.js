const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 7000;

const services = require("./data/services.json");

app.use(cors());

app.get("/", (req, res) => {
	res.send("Flavor Fusion Site is Running!!!");
});
app.get("/services", (req, res) => {
	res.send(services);
});

app.listen(port, () => {
	console.log(`Flavor Fusion Site is Running on Port: ${port}`);
});
