/* Global Variables */
let baseURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const username = '&username=h4ssan';



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
    const startDate = document.getElementById('travelDate').value;

    //retrieve number of days until departure
    const timeDifference = Math.ceil(new Date(startDate).getTime() - d.getTime());
    const daysTillDeparture = Math.ceil(timeDifference / (1000 * 3600 * 24));
    document.getElementById('date').innerHTML = "Days til departure " + daysTillDeparture;


    if (newCity.length == 0) {
        alert("Please enter valid city");
        return
    }

    getCity(baseURL, newCity, username)

        .then(function (data) {
            //add data to POST request
            postCity('http://localhost:8090/addData', {
                latitude: data.postalCodes[0].lat,
                longitude: data.postalCodes[0].lng,
                country: data.postalCodes[0].countryCode
            })

            updateInterface();
        })
}

//GET Request
const getCity = async (baseURL, city, username) => {
    //set variable to hold fetch calls return
    const res = await fetch(baseURL + city + username)
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
const postCity = async (url = '', data = {}) => {
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
const updateInterface = async () => {
    const request = await fetch('http://localhost:8090/data')

    try {
        const allData = await request.json()
        console.log(allData);
        // document.getElementById('date').innerHTML = "Date: " + newDate;
        // document.getElementById('temp').innerHTML = "Current Forecast: " + allData.latitude;
        // document.getElementById('content').innerHTML = "User Feelings: " + allData[allData.length-1].userResponse;
    } catch (error) {
        console.log(error);
    }
}

export {
    performEvent,
    getCity,
    postCity,
    updateInterface,
    handleSubmit
}


