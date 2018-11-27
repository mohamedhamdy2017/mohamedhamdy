import { ADD_PLACE_NAME, SELECT_PLACE, UNSELECT_PLACE, DELETE_PLACE } from './types';

export const addPlaceName = placeName => {
    return{
        type: ADD_PLACE_NAME,
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