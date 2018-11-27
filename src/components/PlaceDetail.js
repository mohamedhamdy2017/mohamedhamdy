import React from 'react'
import {Image, View, Text, Button, Modal, StyleSheet } from 'react-native'

const PlaceDetail = props => {
    let openModal = null;

    if(props.selectPlace){
          openModal = (
        <View>
            <Image source ={props.selectPlace.image} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{props.selectPlace.name}</Text>
        </View>
        )
    }
    return(
        <Modal 
            visible ={props.selectPlace !== null}
            animationType="slide" 
            onRequestClose={props.onModalClosed}>
            <View>
                {openModal}
            </View>
                <View style={styles.buttonsStyle}>
                    <Button title="Delete" onPress={props.onDeletePlaceInput} color="red" />
                    <Button title="close" onPress={props.onModalClosed}/>
                </View>
            
    </Modal>
    )
};
const styles = StyleSheet.create({
    imageStyle:{
        width:"100%",
        height: 200
    },
    textStyle:{
        textAlign: 'center',
        fontSize: 25
    },
    buttonsStyle: {
        marginTop: 10,
        justifyContent: 'space-between'
    }
})

export default PlaceDetail;