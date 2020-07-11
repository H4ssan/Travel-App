import { performEvent, postData} from './js/app'
import { getWeather } from './js/getWeather'
import { getImage } from './js/pixabay'
import { getCity } from './js/geonames'
import { updateInterface } from './js/updateUI'
import { showOutput, scrollToView} from './js/styles'


import './styles/style.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/output.scss'


export {
    performEvent,
    postData,
    getCity,
    getWeather,
    getImage,
    updateInterface,
    showOutput,
    scrollToView
}