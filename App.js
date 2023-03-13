import React,{useRef, useState} from 'react';
import Swiper from 'react-native-deck-swiper'; 

import {

  StyleSheet,
  Button,
  View,
} from 'react-native';
import Card from './Card';
import photoCards from './photoCards';
import photocardGirls from './photocardGirls';
import OverlayLabel from './OverlayLabel';
import IconButton from './IconButton';
const App= () => {
  const [list,setList]=useState(null)

  const useSwiper = useRef(null).current
  const clicked = () => {
    setList(!list);
  }
  return (
    
   <View>
  
  <Swiper
    ref={useSwiper}
    animateCardOpacity
    containerStyle={styles.container}
    cards={list?photoCards:photocardGirls}
    renderCard={card => <Card card={card} />}
    cardIndex={0}
    backgroundColor="white"
    stackSize={2}
    infinite
    showSecondCard
    animateOverlayLabelsOpacity
    overlayLabels={{
      left: {
        title: 'NOPE',
        element: <OverlayLabel label="NOPE" color="red" />,
        style: {
          wrapper: {
            marginRight: 200,
      
          },
        },
      },
      right: {
        title: 'LIKE',
        element: <OverlayLabel label="LIKE" color="#4CCC93" />,
        style: {
          wrapper: {
      
            alignItems: 'flex-start',
            marginLeft: 30,
          },
        },
      },
    }}
  />
 <Button

          onPress={clicked}
          title={list ? 'Boys' : 'Girls'}
        ></Button>
   </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
