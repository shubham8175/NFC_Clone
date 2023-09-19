import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {EthPrice, NFTtitle} from './SubInfo';
import {COLORS, SIZES, FONTS} from '../../constants';
import {useState} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const DetailsDescription = ({data}) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <NFTtitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View style={{marginVertical: SIZES.extraLarge * 1.5}}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.regular,
            color: COLORS.primary,
          }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large,
          }}>
          {text}
          {!readMore && '...'}
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.semiBold,
              color: COLORS.primary,
            }}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}>
            {readMore ? 'Show less' : 'Read more'}
          </Text>
        </Text>
      </View>
    </>
  );
};

export default DetailsDescription;

const styles = StyleSheet.create({});
