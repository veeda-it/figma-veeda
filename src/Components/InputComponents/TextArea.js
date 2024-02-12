import {
    StyleSheet,
    View,
    TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { borderColor2, primaryColor3 } from '../../Utils/Theme';

const TextArea = ({ editable, inputStyle, placeholder, icon, keyboardType, value, onChange, rows }) => {
    return (
        <View style={[styles.textArea, inputStyle]}>
            <TextInput
                value={value}
                multiline={true}
                numberOfLines={rows}
                editable={editable}
                onChangeText={onChange}
                keyboardType={keyboardType}
                style={{
                    width: '100%',
                    color: '#000',
                    backgroundColor: primaryColor3,
                    textAlignVertical: 'top'
                }}
                placeholder={placeholder}
            />
        </View>
    )
}

export default TextArea

const styles = StyleSheet.create({
    textArea: {
        width: '100%',
        borderWidth: 1,
        paddingHorizontal: 10,
        borderColor: borderColor2,
        flexDirection: 'row',
        // alignItems: 'center',
        marginVertical: hp(1.5),
        height: hp(15),
        borderRadius: 15,
        backgroundColor: primaryColor3,
    }
})