import React, { useRef, useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity, I18nManager, Platform } from 'react-native'

// Internal Imports
import { borderColor, borderColor2, errorColor, primaryColor1, primaryColor2, primaryColor4, textColor3 } from '../../Utils/Theme';
import RegularText from '../TextComponents/RegularText';
import { h4, h5, h6 } from '../../Utils/Styles';

// External Imports
import { Input } from "@rneui/themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'


export default function PasswordInputComponent({ label, value, placeholder, onChangeText, errorMessage, isError, containerStyle, keyboardType }) {

  let inputRef = useRef()
  const [isFocused, setIsFocused] = useState(false)
  const [isSecure, setIsSecure] = useState(true)


  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  return (

    <View style={containerStyle}>
      <RegularText text={label} textStyle={styles.labelStyle} />
      <Input
        ref={inputRef}
        value={value}
        keyboardType={keyboardType || 'default'}
        containerStyle={[styles.containerStyle, isError ? { borderWidth: 1, borderColor: errorColor } : isFocused ? { borderWidth: 1, borderColor: primaryColor2 } : { borderWidth: 1, borderColor: borderColor2 }]}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={styles.inputStyle}
        placeholder={placeholder}
        placeholderTextColor={'#D4D4D4'}
        onChangeText={onChangeText}
        errorMessage={errorMessage}
        errorStyle={styles.errorStyle}
        onFocus={handleFocus}
        onBlur={handleBlur}
        secureTextEntry={isSecure}
        rightIcon={
          !isSecure ?
            <TouchableOpacity onPress={() => setIsSecure(true)}>
              <Icon name='eye-outline' size={wp(6)} color={primaryColor4} />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => setIsSecure(false)}>
              <Icon name='eye-off-outline' size={wp(6)} color={primaryColor4} />
            </TouchableOpacity>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: wp(4),
    color: primaryColor1,
    marginLeft: wp(2),
    marginBottom: hp(0.75),
    fontFamily:'Urbanist',
    fontWeight:'800'
  },
  containerStyle: {
    padding: 0,
    backgroundColor: 'white',
    height: hp(7),
    borderRadius: wp(5),
  },
  containerStyle: {
    padding: 0,
    backgroundColor: 'white',
    height: hp(7),
    borderRadius: wp(10),
  },
  inputContainerStyle: {
    padding: 0,
    height: hp(7),
    borderBottomWidth: 0,
  },
  inputStyle: {
    height: hp(7),
    fontSize: wp(4),
  },
  errorStyle: {
    color: errorColor,
    fontSize: wp(3.5),
    // fontFamily: 'SF UI Display',
  },
  countStyle: {
    alignSelf: 'flex-end',
    marginRight: wp(2),
    marginBottom: wp(2),
    fontSize: wp(3),
  },
})