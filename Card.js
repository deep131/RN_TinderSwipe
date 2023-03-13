import React from 'react'
import { View, Text, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import { shape, string, number } from 'prop-types'
import styles from './Card.styles'
const Card = ({ card }) => (
  <View>


  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={card.img}
      resizeMode="cover"
    />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.age}`}
      </Text>
    </View>
  </View>
  </View>
)

Card.propTypes = { 
  card: shape({
    photo: ImageSourcePropType,
    name: string,
    age: number,
  }).isRequired,
}
export default Card;