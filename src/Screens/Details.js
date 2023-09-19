import React from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  InteractionManager,
} from 'react-native';
import {RectButton, CircleButton} from '../Components/Button';
import {SIZES, FONTS, COLORS, SHADOWS, assets} from '../../constants';
import {NFTData} from '../../constants';
import {SubInfo} from '../Components/SubInfo';
import DetailsBid from '../Components/DetailsBid';
import DetailsDescription from '../Components/DetailsDescription';
import {useNavigation} from '@react-navigation/native';

const DetailHeader = ({data, navigation}) => (
  <View style={{width: '100%', height: 273}}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{width: '100%', height: '100%'}}
    />
    <CircleButton
      imgUrl={assets.left}
      onPressFunction={() => navigation.goBack()}
      left={15}
      top={15}
    />
    <CircleButton imgUrl={assets.heart} right={15} top={15} />
  </View>
);

const Details = ({route, navigation}) => {
  // confusion ***
  const {data} = route.params; // confusion ***
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: SIZES.font,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          zIndex: 1,
        }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({item}) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: SIZES.extraLarge * 3}}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{padding: SIZES.font}}>
              <DetailsDescription data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}>
                  Current bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
