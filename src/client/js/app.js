/* Global Variables */
    let baseURL = 'http://api.geonames.org/postalCodeSearchJSON?placename=';
    const username = '&username=h4ssan';

    // Create a new date instance dynamically with JS
    let d = new Date();
    let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


    function performEvent(evt){
        //retrive the user input
        const newCity = document.getElementById('city').value;

        if(newCity.length == 0){
            alert("Please enter valid city");
            return
        }
        
        getCity(baseURL, newCity, username)

        .then(function(data){
            //add data to POST request
            postCity('/addData', {latitude: data.geonames[0].lat, 
                                    longitude: data.geonames[0].longitude,
                                     country: data.geonames[0].country})

            updateInterface();
        })
    } 

    //GET Request
    const getCity = async (baseURL, city, username)=>{
        //set variable to hold fetch calls return
        const res = await fetch(baseURL + city + username)
        try{
            //retrieve data in json format
            const data = await res.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log(error("error"));
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
        try{
            const newData = await response.json();
            console.log(newData);
            return newData;
        }catch(error){
            console.log(error("error"));
        }
    }

    //update UI
    const updateInterface = async () => {
        const request = await fetch ('/data')

        try{
            const allData = await request.json()
            console.log(allData);
            document.getElementById('date').innerHTML = "Date: " + newDate;
            document.getElementById('temp').innerHTML = "Current Forecast: " + allData[allData.length-1].temperature;
            document.getElementById('content').innerHTML = "User Feelings: " + allData[allData.length-1].userResponse;
        } catch(error) {
            console.log(error("error"));
        }
    }

    export {
        performEvent,
        getCity,
        postCity,
        updateInterface
    }


