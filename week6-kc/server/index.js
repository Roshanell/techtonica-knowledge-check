// requiring dependencies

const express = require("express");
// securty
const cors = require("cors");
// allows us to exreact body portion and use it as a js obj
const bodyParser = require("body-parser");
// provides utilities for working with file and direcotry paths
const path = require("path");
const { response } = require("express");

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
	res.sendFile(path.join(__dirname, "../client/index.html"));
});

//get req for about me page
app.get("/aboutme", (req, res) => {
	// responds with a about file in the client dir
	res.sendFile(path.join(__dirname, "../client/about.html"));
});

//get req for contact me page

app.get("/contactme", (req, res) => {
	// responds with contact me file
	res.sendFile(path.join(__dirname, "../client/contactMe.html"));
});


// get req for error page
app.get("/error", (req, res) => {
	// responds with 404 file
	res.sendFile(path.join(__dirname, "../client/404.html"));
});
// tells expresss to isten to the port specified
app.listen(PORT, () =>
	console.log(`Server is running on ${PORT}. You better go catch it!`)
);
