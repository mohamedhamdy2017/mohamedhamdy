import React, { Component } from 'react';
import { Button, View } from 'react-native';

import {connect} from 'react-redux'

import { addPlace, selectPlace, unSelectPlace, deletePlace } from '../action'

import PlacesInput from './PlacesInput'
import PlaceList from './PlaceList'
import PlaceDetail from './PlaceDetail'


class placeComponent extends Component {
   
    onAddHandler = placeName => {
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
            <View style={{flexDirection: 'row'}}>
                <PlacesInput
                    title = "Add Here ..."
                    value={this.props.placeName}
                    
                />
                <Button
                    title="Add"
                    onPress={this.onAddHandler}
                />
            </View>
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
        onAddPlace: (name) => dispatch(addPlace(name)),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeletePlace: () => dispatch(deletePlace()),
        onUnselectPlace: () => dispatch(unSelectPlace())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (placeComponent)