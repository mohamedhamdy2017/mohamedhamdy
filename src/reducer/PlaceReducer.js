import { ADD_PLACE, SELECT_PLACE, UNSELECT_PLACE, DELETE_PLACE } from '../action/types';
import placeImage from '../../assets/image.jpg'

const INIT_STATE = {
    places: [],
    selectPlace: null
}

export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(place => {
                    return {
                        key: Math.random(),
                        name: action.placeName,
                        image: placeImage
                    }
                })
            }
        case SELECT_PLACE:
            return {
                ...state,
                selectPlace: state.places.find(place => {
                       return placeKey === state.selectPlace.key
                }),
                selectPlace: null
            }
        case UNSELECT_PLACE: 
            return {
                ...state,
                selectPlace: null
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectPlace.key
                })
            }
        default: 
            return state
    }
}