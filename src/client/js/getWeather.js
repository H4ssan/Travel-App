//WeatherBit url
const WB_URL = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const wb_api = '&key=73ad71566b4545c4b7a5c867f792c29c';

//GET weather data from weatherBit
const getWeather = async (lat, lng, date) => {
    //set variable to hold fetch calls return
    const res = await fetch(WB_URL + "lat=" + lat + "&lon=" + lng + "&start_date=" + date +  wb_api);
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export{
    getWeather
}
