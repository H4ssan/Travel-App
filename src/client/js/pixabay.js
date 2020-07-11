//pixabay url details
const pixa_API = "key=17239287-668a58057b31d78393aa8a629";
const pixa_URL = "https://pixabay.com/api/?";

//GET image data from Pixabay
const getImage = async (city) => {
    //set variable to hold fetch calls return
    const res = await fetch(pixa_URL + pixa_API + "&q=" + city + "&category=places&image_type=photo");
    try {
        //retrieve data in json format
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}


export {
    getImage
}