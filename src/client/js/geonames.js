//Geonames url
let geoURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
const username = '&username=h4ssan';

//GET city data from Geonames
const getCity = async (city) => {
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

export{
    getCity
}