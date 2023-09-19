import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, FONTS, SHADOWS} from '../../constants';

export const CircleButton = ({imgUrl, onPressFunction, ...props}) => {
  return (
    <TouchableOpacity onPress={onPressFunction}
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...props,
      }}>
      <Image
        source={imgUrl}
        resizeMode="contain"
        style={{height: 24, width: 24}}
      />
    </TouchableOpacity>
  );
};
export const RectButton = ({minWidth, onPressFunction, fontSize, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPressFunction}
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        padding: SIZES.small,
        ...props,
      }}>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          color: COLORS.white,
          textAlign: 'center',
          fontSize: fontSize,
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};
