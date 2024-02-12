import React, { useRef, useState } from 'react'
import { StyleSheet } from 'react-native'

// Internal Imports
import { borderColor2, primaryColor1, primaryColor2, primaryColor5 } from '../../Utils/Theme';
import { h2, h3, h4 } from '../../Utils/Styles';

// External Imports
import { Input } from "@rneui/themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons'


export default function PasswordInputComponent({ placeholder, onChangeText, containerStyle, keyboardType, IconColor }) {

    let inputRef = useRef()
    const [isFocused, setIsFocused] = useState(false)


    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return (

        <Input
            ref={inputRef}
            keyboardType={keyboardType || 'default'}
            containerStyle={[styles.containerStyle, isFocused ? { borderWidth: 1, borderColor: borderColor2 } : { borderWidth: 1, borderColor: '#eeeeee' }, containerStyle]}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            placeholder={placeholder}
            placeholderTextColor={'#D4D4D4'}
            onChangeText={onChangeText}
            onFocus={handleFocus}
            onBlur={handleBlur}
            leftIcon={<Icon name='md-search-outline' size={wp(6)} color={IconColor ? IconColor : '#D4D4D4'} />}
        />
    )
}

const styles = StyleSheet.create({
    containerStyle: {
        padding: 0,
        backgroundColor: 'white',
        height: hp(7),
        borderRadius: wp(4),
    },
    inputContainerStyle: {
        padding: 0,
        height: hp(7),
        borderBottomWidth: 0
    },
    inputStyle: {
        height: hp(7),
        ...h4
    }
})