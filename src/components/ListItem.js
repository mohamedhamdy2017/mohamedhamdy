import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const ListItem = props => (
    <TouchableOpacity onPress={props.onItemPressed}>
        <View style={styles.container}>
            <Image soure={props.image} style={styles.imageStyle}/>
            <Text style={styles.textStyle}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>

)

const styles ={
    container:{
        padding: 10,
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textStyle:{
        textAlign: 'center',
    },
    imageStyle:{
        width:50,
        height: 50
    }
}
export default ListItem;