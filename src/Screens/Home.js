import {StyleSheet,View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {NFTData, COLORS} from '../../constants';
import HomeHeader from '../Components/HomeHeader';
import NFTCards from '../Components/NFTCards';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.secondContainer}>
        {/* for NFT lists */}

        <View style={styles.NFTcontainer}>
          <FlatList
            data={NFTData}
            renderItem={({item}) => <NFTCards data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader />}
          />
        </View>

        <View style={styles.thirdContainer}>
          <View style={{height: 300, backgroundColor: COLORS.primary}} />
          <View style={{flex: 1, backgroundColor: COLORS.white}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondContainer: {
    flex: 1,
  },
  NFTcontainer: {
    zIndex: 0,
  },
  thirdContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
});
