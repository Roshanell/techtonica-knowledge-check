// requiring dependencies

const express = require("express");
// securty
const cors = require("cors");
// allows us to exreact body portion and use it as a js obj
const bodyParser = require("body-parser");
// provides utilities for working with file and direcotry paths
const path = require("path");

// storing the express method in the var app
const app = express();

// setting up port
const PORT = 2121;

// requiring to use cors
app.use(cors());
// storing func in variablwe
const jsonParser = bodyParser.json();

// middleweare function serving static files in express application combined with dir path means
//find middleware that serves file from that dir
app.use(express.static("../client"));

// get request for the home page
app.get("/", (req, res) => {
	// responds with a index file in the client dir
	res.sendFile(path.join(__dirname, "./client/index.html"));
});

//get req for about me page
app.get("/aboutme", (req, res) => {
	// responds with a about file in the client dir
	res.sendFile(path.join(__dirname, "./client/about.html"));
});

app.get("/contactme", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/contactMe.html"));
});

// tells expresss to isten to the port specified
app.listen(PORT, () =>
	console.log(`Server is running on ${PORT}. You better go catch it!`)
);
