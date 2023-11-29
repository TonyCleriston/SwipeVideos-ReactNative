import { View, Text, StyleSheet, Pressable, Platform,StatusBar,ScrollView,Alert, FlatList,Dimensions} from 'react-native'
import React, {useRef, useState} from 'react'
import FeedItem from '../../components/feedItem'
const { height: tamanhoDeTela } = Dimensions.get("window");


const Home = () => {
  const [prevOffsetY, setPrevOffsetY] = useState(0);

  let feedItems = [ 
    {
      id: '1', 
      video: 'https://i.imgur.com/OVCEL7d_lq.mp4',
      name: '@sujeitoprogramador',
      description: 'Basico de React Native',
     },
    {
      id: '2', 
      video: 'https://i.imgur.com/JWrxQrO_lq.mp4',
      name: '@henriquesilva',
      description: 'Fala, estou aprendendo React Native',
     },
    {
      id: '3', 
      video: 'https://i.imgur.com/ujHv5PL_lq.mp4',
      name: '@sujeitoprogramador',
      description: 'Meu quadro favorito',
     }
  ]

  const [showItem, setShowItem] = useState(feedItems[0])
  const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setShowItem(feedItems[viewableItems[0].index]);
    }
  });
  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const currentIndex = Math.floor(offsetY / tamanhoDeTela);
    const direction = offsetY > prevOffsetY ? 'down' : 'up';
  
    let newIndex;
    if (direction === 'down') {
      newIndex = Math.min(currentIndex + 1, feedItems.length - 1);
    } else {
      newIndex = Math.max(currentIndex - 1, 0);
    }
  
    const newShowItem = feedItems[newIndex];
  
    console.log('Novo item ' + newShowItem.id);
    console.log('showItem ' + showItem.id);
    if (newIndex !== currentIndex) {
      setShowItem(newShowItem);
    }
  
    setPrevOffsetY(offsetY);
  };
  

  


  return (
    <View style={styles.container}>
      <View style={styles.labels}>
        <Pressable>
          <Text style={[styles.labelText, {color: '#DDD'}]}>Seguindo</Text>
        </Pressable>
        <Pressable>
          <Text style={[styles.labelText, {color: '#FFF'}]}>Pra você</Text>
          <View style={styles.underline}></View>
        </Pressable>
      </View>

      <ScrollView
      ref={onViewRef}
      showsVerticalScrollIndicator={false}
      snapToInterval={tamanhoDeTela}
      decelerationRate="fast"
      onScrollEndDrag={handleScroll}
      scrollEventThrottle={100}
    >
      {feedItems.map(item => (
        <FeedItem key={item.id} data={item} currentVisibleItem={showItem.id} />
      ))}
    </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#000',
    },
    labels: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap:14,
      position: 'absolute',
      top: 6,
      left: 0,
      right: 0,
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 5 : 55,
      zIndex: 99,
    },
    labelText: {
      fontSize: 16,
      fontWeight: '500',
      marginBottom: 4,
    },
    underline: {
      backgroundColor: '#FFF',
      height: 2,
      width: 32,
      alignSelf: 'center',

    }
})

export default Home