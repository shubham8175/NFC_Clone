import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {COLORS, SIZES, SHADOWS, assets} from '../../constants';
import { CircleButton, RectButton } from './Button';

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
        <CircleButton imgUrl={assets.heart} right={10} top={10}/>
      </View>
      <Text>NFT Cards</Text>
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
