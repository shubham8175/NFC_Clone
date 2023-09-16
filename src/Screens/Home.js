import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({


  text:{
    fontSize:111,
    fontFamily:'Inter-Bold'
  }
})