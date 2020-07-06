import { performEvent, postData, handleSubmit } from './js/app'
import { getWeather } from './js/getWeather'
import { getImage } from './js/pixabay'
import { getCity } from './js/geonames'
import { updateInterface } from './js/updateUI'
import { showOutput } from './js/styles'


import './styles/style.scss'
import './styles/form.scss'
import './styles/footer.scss'


export {
    performEvent,
    postData,
    getCity,
    handleSubmit,
    getWeather,
    getImage,
    updateInterface,
    showOutput
}