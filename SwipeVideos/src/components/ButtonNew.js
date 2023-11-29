import { View, Text , StyleSheet} from 'react-native'
import React from 'react'
import { Entypo} from '@expo/vector-icons'

const ButtonNew = ({size}) => {
  return (
    <View style={styles.container}>
     <View style={styles.inner}>
     <Entypo name="plus" size={size} color="#000" />
     </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
       borderLeftWidth: 1,
       borderRightWidth: 1,
       borderLeftColor: '#1ebfc7',
       borderRightColor: '#f43071',
       borderRadius: 6,

    },
    inner: {
      backgroundColor: '#fff',
      padding: 1,
      paddingHorizontal: 6,
      borderRadius:3,
    }
})

export default ButtonNew