import { StyleSheet, Dimensions } from 'react-native'
const { height } = Dimensions.get('window')
export default StyleSheet.create({
  card: {
    height: height - 300,
    justifyContent: 'center',
    alignItems: 'center',
    top:80,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Avenir',
    textShadowRadius: 10,
    color:'white',
    fontWeight:'700'
  },
})