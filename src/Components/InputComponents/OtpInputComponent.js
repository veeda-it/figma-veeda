import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  I18nManager,
  Platform,
} from 'react-native';

// Internal Imports
import TextInput from './TextInputCompnent';
import {
  LightGrey,
  borderColor,
  errorColor,
  primaryColor2,
  textColor3,
  textColor6,
} from '../../Utils/Theme';

// External Imports
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const CELL_COUNT = 4;
export default function OtpInputComponent({ containerStyle, setCode }) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  setCode(value);

  return (
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginTop: 60,
    flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  },
  cell: {
    width: wp(17),
    height: hp(8),
    lineHeight: hp(8),
    fontSize: wp(7),
    color: textColor6,
    borderWidth: 1,
    borderColor: LightGrey,
    textAlign: 'center',
    backgroundColor: Platform?.OS == 'android' ? 'white' : '',
    borderRadius: Platform.OS=='ios' ? wp(8) : wp(10),
  },
  focusCell: {
    borderWidth: 1,
    borderColor: primaryColor2,
  },
});
