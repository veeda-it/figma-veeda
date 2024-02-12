import React from 'react'

// Internal Imports
import { primaryColor2, textColor1, textColor6 } from '../../Utils/Theme';

// External imports
import { CheckBox } from '@rneui/themed';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function RadioInput({ title, isChecked, isDisabled, onCheck, containerStyle, style }) {
    return (
        <CheckBox
            title={title}
            titleProps={{ style: [{ 
                // fontFamily: 'SF UI Display', 
                fontSize: wp(3.5), flexShrink: 1, color: textColor1 }, style] }}
            containerStyle={[{ padding: 0 }, containerStyle]}
            checkedIcon={
                <Icon
                    name="radio-button-checked"
                    color={primaryColor2}
                    size={wp(5.5)}
                    style={{ opacity: isDisabled ? 0.4 : null, marginRight: wp(2) }}
                />
            }
            uncheckedIcon={
                <Icon
                    name="radio-button-unchecked"
                    color={primaryColor2}
                    size={wp(5.5)}
                    style={{ marginRight: wp(2) }}
                />
            }
            checked={isChecked}
            onPress={onCheck}
        />
    )
}