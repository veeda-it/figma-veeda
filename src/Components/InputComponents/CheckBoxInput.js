import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import RegularText from '../TextComponents/RegularText'
import { CheckBox } from '@rneui/themed'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OIcon from 'react-native-vector-icons/Octicons'
import { borderColor2, primaryColor1, primaryColor3, textColor2 } from '../../Utils/Theme';


const CheckBoxInput = ({ name, onSelect, isSelected, nameStyle }) => {
    return (
        <View style={{ flexDirection: 'row'}}>
            <CheckBox
                checkedIcon={
                    <View style={styles.checkedView}>
                        <OIcon name='check' color={textColor2} size={wp(4.5)} style={{ zIndex: 9999 }} />
                    </View>
                }
                uncheckedIcon={<View style={styles.unCheckedView} />}
                checked={isSelected}
                containerStyle={styles.checkBoxContainer}
                onPress={onSelect}
            />
            <RegularText text={name} textStyle={nameStyle} />
        </View>
    )
}

export default CheckBoxInput

const styles = StyleSheet.create({
    checkBoxContainer: {
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0,
        marginLeft: wp(1)
    },
    unCheckedView: {
        width: wp(5),
        height: wp(5),
        backgroundColor: 'transparent',
        borderRadius: wp(1),
        borderWidth: 1.5,
        borderColor: '#0D5953'
    },
    checkedView: {
        width: wp(5),
        height: wp(5),
        backgroundColor: primaryColor1,
        borderRadius: wp(1),
        justifyContent: 'center',
        alignItems: 'center'
    }
})