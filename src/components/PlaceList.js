import React from 'react'
import { FlatList } from 'react-native'
import ListItem from './ListItem'

const PlaceList = props => {
      return <FlatList 
         data ={props.places}
         renderItem={({item}) => (
            <ListItem 
               placeName={item.name}
               placeImage={item.image} 
               onItemPressed= {() => props.onSelectPressed(item.key)}
            />
         )}
         keyExtractor={(item, index) => index.toString()}
     />
}
export default PlaceList