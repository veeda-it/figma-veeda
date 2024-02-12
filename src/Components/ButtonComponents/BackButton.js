import React from 'react';
import { TouchableOpacity, StyleSheet, I18nManager } from 'react-native';

// Internal Imports
import { DarkGray, primaryColor1, textColor2 } from '../../Utils/Theme';
// External Imports
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AIcon from 'react-native-vector-icons/AntDesign';

export default function BackButton({ onPress, containerStyle }) {
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <AIcon name='left' size={20} color={DarkGray} style={{ marginTop: hp(0.5), fontSize: wp(5.5), fontWeight: '700' }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: wp(11),
    // height: wp(11),
    // borderRadius: wp(3),
    // backgroundColor: primaryColor1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});
