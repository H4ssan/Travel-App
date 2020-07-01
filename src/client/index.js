import { performEvent, postData, handleSubmit } from './js/app'
import { getWeather } from './js/getWeather'
import { getImage } from './js/pixabay'
import { getCity } from './js/geonames'
import { updateInterface } from './js/updateUI'

import './styles/style.scss'
import './styles/form.scss'


export {
    performEvent,
    postData,
    getCity,
    handleSubmit,
    getWeather,
    getImage,
    updateInterface
}