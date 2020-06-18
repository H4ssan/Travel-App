import { performEvent, postCity, getCity, updateInterface } from './js/app'

import './styles/style.scss'


document.getElementById('generate').addEventListener('click', performEvent);


export {
    performEvent,
    postCity,
    getCity,
    updateInterface
}