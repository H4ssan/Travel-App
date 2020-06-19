// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();

const bodyParser = require('body-parser');
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));


// Setup Server
const port = 8080;
const server = app.listen(port, listening);
//callback function
function listening(){
    console.log(`running on localhost : ${port}`);
};

//GET route
app.get('/data', function(req, res){
    //send data back to endpoint
    res.send(projectData);
});

//post the data to the projectData array
app.post('/addData', addData);

function addData(req, res){
    /* These are three specific pieces of data the POST route will anticipate receiving */
    newEntry = {
        latitude: req.body.latitude,
        longitude: req.body.longitude,
        country: req.body.country
    }

      //add data recieved from req.body to the app end point
      projectData.push(newEntry);
      res.send(projectData);
      console.log(projectData);
}
