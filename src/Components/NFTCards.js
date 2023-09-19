import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, SHADOWS, assets} from '../../constants';
import {CircleButton, RectButton} from './Button';
import {
  SubInfo,
  NFTtitle,
  People,
  ImageCmp,
  EthPrice,
  EndDate,
} from './SubInfo';

const NFTCards = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} right={10} top={10} />
      </View>
      <SubInfo />
      <View style={{width: '100%', padding: SIZES.font}}>
        <NFTtitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SIZES.font,
            alignItems: 'center',
          }}>
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            onPressFunction={() => navigation.navigate('Details', {data})}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCards;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    ...SHADOWS.dark,
  },
  secondContainer: {
    width: '100%',
    height: 250,
  },
});
