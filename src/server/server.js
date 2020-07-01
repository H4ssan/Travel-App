const dotenv = require('dotenv');
dotenv.config();

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
const bodyParser = require('body-parser');
// Cors for cross origin allowance
const cors = require('cors');

// Setup empty JS object to act as endpoint for all routes
projectData = [];

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static('dist'));

// Setup Server
const port = 8090;
const server = app.listen(port, listening);
//callback function
function listening() {
    console.log(`running on localhost : ${port}`);
};

//GET route
app.get('/data', function (req, res) {
    //send data back to endpoint
    res.send(projectData);
});

//WeatherBit POST route
app.post('/weatherbit', addWBData);

function addWBData(req, res) {
    /* These are three specific pieces of data the POST route will anticipate receiving */
    newEntry = {
        forecast: req.body.forecast,
        icon: req.body.icon,
        description: req.body.description,
    }
    //add data recieved from req.body to the app end point
    projectData.push(newEntry);
    res.send(projectData);
    //console.log(projectData);
}

//Geonames POST route
app.post('/geonames', addGNData);

function addGNData(req, res) {
    geonamesData = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        country: req.body.country
    }
    projectData.push(geonamesData);
    res.send(projectData);
   // console.log(projectData);
}

//pixabay POST route
app.post('/pixabay', addPixabayData);

function addPixabayData(req, res) {
    pixabayData = {
        img: req.body.img
    }
    projectData.push(pixabayData);
    res.send(projectData);
    console.log(projectData);
}
