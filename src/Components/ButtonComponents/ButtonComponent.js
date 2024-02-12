import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

// Internal Imports
import { primaryColor1, primaryColor3, textColor2 } from '../../Utils/Theme';
import BoldText from '../TextComponents/BoldText';
import { h3, h4 } from '../../Utils/Styles';

// External Imports
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Spinner from 'react-native-spinkit';
import { View } from 'react-native';
import RegularText from '../TextComponents/RegularText';

export default function ButtonComponent({
  title,
  buttonStyle,
  textStyle,
  onPress,
  leftIcon,
  isLoading,
  disabled,
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.buttonStyle, buttonStyle]}
      onPress={!isLoading ? onPress : () => console.log('sfsdhfkj')}>
      {isLoading ? (
        <Spinner
          isVisible={isLoading}
          color={primaryColor3}
          type="ThreeBounce"
        />
      ) : (
        <>
          {/* <View style={{ backgroundColor: primaryColor3, padding: 2, borderRadius: 50, marginLeft: wp(-10) }}>
            <RegularText text={1} />

          </View> */}
          <BoldText
            text={title}
            textStyle={[{ ...h4, color: textColor2, }, textStyle]}
          />
          {leftIcon}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: primaryColor1,
    borderRadius: wp(12),
    padding:16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
