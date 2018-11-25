import { ADD_PLACE, SELECT_PLACE, UNSELECT_PLACE, DELETE_PLACE } from './types';

export const addPlace = placeName => {
    return{
        type: ADD_PLACE,
        placeName: placeName
    }
}

export const selectPlace = key => {
    return{
        type: SELECT_PLACE,
        placeKey: key
    }
}

export const unSelectPlace = () => {
    return{
        type: UNSELECT_PLACE,
    }
}

export const deletePlace = () => {
    return{
        type: DELETE_PLACE,
    }
}