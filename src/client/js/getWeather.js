const WB_URL = 'https://api.weatherbit.io/v2.0/current?';
const wb_api = process.env.WB_API_KEY;

//GET city data from weatherBit
const getWeather = async (lat, lng) => {
    //set variable to hold fetch calls return
    const res = await fetch(WB_URL + "lat=" + lat + "&lng=" + lng + wb_api);
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
