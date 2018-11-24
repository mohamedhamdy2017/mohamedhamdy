import React from 'react'
import { View, TextInput, Button } from 'react-native'

const PlacesInput = props => {
    return(
        <View style={styles.input}>
            <TextInput  
                placeholder={props.title}
                value={props.value}
                onChangeText={props.onEdit}
            />
        </View>
    )
}

const styles ={
    input:{ 
       width: '80%',
       marginLeft: 15,
       marginRight: 15
    }
}
export default PlacesInput