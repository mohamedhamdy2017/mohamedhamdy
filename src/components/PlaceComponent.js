import React, { Component } from 'react';
import { Button, View } from 'react-native';

import {connect} from 'react-redux'

import { addPlace, selectPlace, unSelectPlace, deletePlace } from '../action'

import PlacesInput from './PlacesInput'
import PlaceList from './PlaceList'
import PlaceDetail from './PlaceDetail'




class placeComponent extends Component {
    state ={
        places: [],
        selectPlace: null
    }
    onEditHandler = val => {
        this.setState({
            placeName: val
        })
    }
    onAddHandler = placeName => {
        this.props.addPlace(placeName)
        // const { placeName } =this.state;
        //     if(this.state.placeName.trim() === ""){
        //         return alert('Text is empty');
        //     }
        //     this.setState(prevState => {
        //         return{
        //             places: prevState.places.concat({
        //                 key: Math.random(),
        //                 name: placeName,
        //                 image: placeImage
        //             })
        // }
        // })   
    }

    onSelectHandler = () => {
        this.props.selectPlace(key)
        // this.setState(prevState => {
        //     return{
        //     selectPlace: prevState.places.find(place => {
        //         return place.key === key
        //     })
        // } 
        // })
    }

    onDeleteHandler = () => {
        this.props.deletePlace()
        // this.setState(prevState => {
        //     return{
        //         places: prevState.places.filter(place => {
        //             return place.key !== prevState.selectPlace.key
        //         }),
        //         selectPlace: null
        //     }
        // })
    }

    onModalColsedHandler = () => {
        this.props.unSeletPlace()
        // this.setState({
        //     selectPlace: null
        // })
    }

  render() {
    return (
      <View>
            <View style={{flexDirection: 'row'}}>
                <PlacesInput
                    title = "Add Here ..."
                    value={this.state.placeName}
                    onEdit={this.onEditHandler}
                />
                <Button
                    title="Add"
                    onPress={this.onAddHandler}
                />
            </View>
                <PlaceList places={this.state.places} onSelectPressed={this.onSelectHandler}/>  
                <PlaceDetail 
                    selectPlace={this.state.selectPlace}
                    onDeletePlace = {this.onDeleteHandler}
                    onModalClosed = {this.onModalColsedHandler}
                    />
      </View>
    );
  }
}
const mapStateToProps = state => {
    const { places, selectPlace } = state.placeRed
    return { places, selectPlace }
}

export default connect(mapStateToProps, {addPlace, selectPlace, unSelectPlace, deletePlace}) (placeComponent)