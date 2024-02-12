import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

// External Imports
import { Input } from '@rneui/themed';
import {
  borderColor,
  borderColor2,
  errorColor,
  primaryColor1,
  primaryColor2,
  primaryColor3,
  textColor3,
} from '../../Utils/Theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RegularText from '../TextComponents/RegularText';

export default function TextInputCompnent({
  label,
  labelStyle,
  placeholder,
  onChangeText,
  value,
  key,
  disabled,
  inputRef,
  multiline,
  numberOfLines,
  maxLength,
  errorMessage,
  autoFocus,
  isError,
  isRequired,
  isOptional,
  containerStyle,
  inputContainerStyle,
  inputInnerContainerStyle,
  inputStyle,
  keyboardType,
  isCount,
  countStyle,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={containerStyle}>
      <View style={{ flexDirection: 'row' }}>
        <RegularText text={label} textStyle={[styles.labelStyle, labelStyle]} />
        {isOptional && (
          <RegularText
            text={'(optional)'}
            textStyle={{
              fontSize: wp(4),
              color: textColor3,
              marginLeft: wp(2),
              marginBottom: hp(0.75),
            }}
          />
        )}
        {isRequired && (
          <RegularText
            text={'*'}
            textStyle={{
              fontSize: wp(4),
              color: errorColor,
              marginLeft: wp(0.2),
              marginBottom: hp(0.75),
            }}
          />
        )}
      </View>

      <View
        style={[
          styles.containerStyle,
          isError
            ? { borderWidth: 1, borderColor: errorColor }
            : isFocused
              ? { borderWidth: 1, borderColor: primaryColor2 }
              : { borderWidth: 1, borderColor: borderColor2 },
          inputContainerStyle,
        ]}>
        <Input
          ref={inputRef}
          key={key}
          maxLength={maxLength}
          value={value}
          autoFocus={autoFocus}
          keyboardType={keyboardType || 'default'}
          // containerStyle={[styles.containerStyle,isError ? {borderWidth:1,borderColor:errorColor} : isFocused ? {borderWidth:1,borderColor:primaryColor2} : {borderWidth:1,borderColor:borderColor}, inputContainerStyle]}
          inputContainerStyle={[
            styles.inputContainerStyle,
            inputInnerContainerStyle,
          ]}
          inputStyle={[styles.inputStyle, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'#D4D4D4'}
          onChangeText={onChangeText}
          errorMessage={errorMessage}
          errorStyle={styles.errorStyle}
          multiline={multiline}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          numberOfLines={numberOfLines}
        />
        {isCount && (
          <RegularText
            text={`${value?.length}/${maxLength}`}
            textStyle={[styles.countStyle, countStyle]}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: wp(4),
    color: primaryColor1,
    marginLeft: wp(2),
    marginBottom: hp(0.75),
    fontWeight:'800'
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
    fontFamily:'Urbanist'
  },
});
