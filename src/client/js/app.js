import { updateInterface } from "./updateUI.js";
import { getWeather } from "./getWeather.js";
import { getImage } from "./pixabay.js";
import { getCity } from "./geonames.js";

handleSubmit();

function handleSubmit() {
    document.getElementById('generate').addEventListener('click', () => {
        performEvent();
    })
}

//function is called once 'generate' button is clicked
function performEvent(evt) {

    //retrive the user input
    const startDate = document.getElementById('travelDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const newCity = document.getElementById('city').value;
    
    if (newCity.length == 0) {
        alert("Please enter valid city");
        return
    }

    /*===========COUNTDOWN===========*/
    // Create a new date instance dynamically with JS
    let d = new Date();

    /*=========== retrieve number of days until departure ===========*/
    const timeDifference = Math.ceil(new Date(startDate).getTime() - d.getTime());
    const daysTillDeparture = Math.ceil(timeDifference / (1000 * 3600 * 24));
    document.getElementById( 'departure').innerHTML = daysTillDeparture + " days until departure!";

    /*=========== calculate length of trip ===========*/
    const difference = new Date(returnDate).getTime() - new Date(startDate).getTime();
    const dayDifference = difference / (1000 * 3600 * 24);
    document.getElementById('return').innerHTML = "Length of trip: " + dayDifference;


    Client.getCity(newCity)
        .then(async function (data) {
            //add data to POST request
            return await postData('http://localhost:8090/geonames', {
                latitude: data.postalCodes[0].lat,
                longitude: data.postalCodes[0].lng,
                country: data.postalCodes[0].countryCode
            })
        })
        .then(function (res) {
            const lat = res[0].latitude;
            const long = res[0].longitude;
            return { lat, long }
        })
        .then(async function ({ lat, long }) {
            return await Client.getWeather(lat, long, startDate);
        })
        .then(function (weatherData) {
            //add data to POST request
            return postData('http://localhost:8090/weatherbit', {
                forecast: weatherData.data[0].max_temp,
                icon: weatherData.data[0].weather.icon,
                description: weatherData.data[0].weather.description
            })
        })
        .then(async function () {
            return await Client.getImage(newCity);
        })
        .then(function (data) {
            //add data to POST request
            return postData('http://localhost:8090/pixabay', {
                img: data.hits[0].previewURL
            })
        })
        .then(async function () {
            return await Client.updateInterface();
        })
}


//POST Request
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log(error);
    }
}

export {
    performEvent,
    getCity,
    postData,
    handleSubmit,
    updateInterface,
    getWeather,
    getImage,
}


