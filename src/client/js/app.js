/* Global Variables */
let geoURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const username = '&username=h4ssan';

const WB_URL = 'https://api.weatherbit.io/v2.0/current?';
const wb_api = '&key=73ad71566b4545c4b7a5c867f792c29c';

handleSubmit();

function handleSubmit() {
    document.getElementById('generate').addEventListener('click', () => {
        performEvent();
    })
}

function performEvent(evt) {
    // Create a new date instance dynamically with JS
    let d = new Date();

    //retrive the user input
    const newCity = document.getElementById('city').value;
    
    if (newCity.length == 0) {
        alert("Please enter valid city");
        return
    }
    //retrieve number of days until departure
    const startDate = document.getElementById('travelDate').value;
    const timeDifference = Math.ceil(new Date(startDate).getTime() - d.getTime());
    const daysTillDeparture = Math.ceil(timeDifference / (1000 * 3600 * 24));
    document.getElementById('temp').innerHTML = "Current Forecast: " + daysTillDeparture;


    getCity(geoURL, newCity, username)
        .then(function (data) {
            //add data to POST request
            postData('http://localhost:8090/addData', {
                lat: data.postalCodes[0].lat,
                lng: data.postalCodes[0].lng,
                country: data.postalCodes[0].countryCode
            })
        })
         Client.getWeather(lat, lng); 
}

//GET city data from Geonames
const getCity = async (geoURL, city, username) => {
    //set variable to hold fetch calls return
    const res = await fetch(geoURL + city + username)
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
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

//update UI
// const updateInterface = async () => {
//     const request = await fetch('http://localhost:8090/data')
//     try {
//         const allData = await request.json()
//         console.log(allData);
//         // document.getElementById('date').innerHTML = "Date: " + newDate;
//         // document.getElementById('temp').innerHTML = "Current Forecast: " + allData.latitude;
//         // document.getElementById('content').innerHTML = "User Feelings: " + allData[allData.length-1].userResponse;
//     } catch (error) {
//         console.log(error);
//     }
// }

export {
    performEvent,
    getCity,
    postData,
    //  updateInterface,
    handleSubmit
}


