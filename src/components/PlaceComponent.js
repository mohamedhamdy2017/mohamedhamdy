import React, { Component } from 'react';
import { View } from 'react-native';

import {connect} from 'react-redux'

import { addPlaceName, selectPlace, unSelectPlace, deletePlace } from '../action/index'

import PlacesInput from './PlacesInput'
import PlaceList from './PlaceList'
import PlaceDetail from './PlaceDetail'


class placeComponent extends Component {

    onAddHandler = (placeName) => {
        this.props.onAddPlace(placeName)  
    }

    onSelectHandler = key => {
        this.props.onSelectPlace(key)
    }

    onDeleteHandler = () => {
        this.props.onDeletePlace()
    }

    onModalColsedHandler = () => {
        this.props.onUnselectPlace()
    }

  render() {
    return (
      <View>
           <PlacesInput onPlaceAdded={this.onAddHandler}/>
            <PlaceList places={this.props.places} onSelectPressed={this.onSelectHandler}/>  
            <PlaceDetail 
                selectPlace={this.props.selectPlace}
                onDeletePlace = {this.onDeleteHandler}
                onModalClosed = {this.onModalColsedHandler}
            />
      </View>
    );
  }
}
const mapStateToProps = ({placeRed}) => {
    const { places, selectPlace } = placeRed
    return { places, selectPlace }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: name => dispatch(addPlaceName(name)),
        onSelectPlace: key => dispatch(selectPlace(key)),
        onDeletePlace: () => dispatch(deletePlace()),
        onUnselectPlace: () => dispatch(unSelectPlace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (placeComponent)