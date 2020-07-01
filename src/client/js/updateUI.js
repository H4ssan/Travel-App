import { getWeather } from "./getWeather.js";
import { getImage } from "./pixabay.js";
//update UI
const updateInterface = async () => {
    const request = await fetch('http://localhost:8090/data')
    try {
        const allData = await request.json()
        console.log(allData);
        document.getElementById('image').src = allData[allData.length - 1].img;
        //  document.getElementById('departure').innerHTML = daysTillDeparture + " days until departure!";
        document.getElementById('forecast').innerHTML = "Weather forecast: " + allData[allData.length - 2].forecast + "°C " +
            allData[allData.length - 2].description;
    } catch (error) {
        console.log(error);
    }
}

export {
    updateInterface,
    getWeather,
    getImage
}