import { combineReducers } from 'redux' 
import placeReducer from './PlaceReducer';


export default combineReducers ({
    placeRed: placeReducer
})