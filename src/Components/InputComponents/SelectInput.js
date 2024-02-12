import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons'
import { borderColor2, primaryColor1, primaryColor7, textColor7 } from '../../Utils/Theme';

export const SelectInput = ({ inputStyle, icon, label, placeholder, open, items, value, setOpen, setValue, schema, testID, setItems, searchable, min, max, closeAfterSelecting, onChangeValue, onSelectItem, listMode, multiple, disabled, showArrowIcon, containerStyle, selectContainer, isError }) => {
  return (
    <View style={[styles.container, inputStyle]}>
      {/* <IconWrapper icon={icon} style={{ width: hp(2.5), aspectRatio: 1, marginLeft: hp(2.5) }} /> */}
      <DropDownPicker
        schema={schema}
        testID={testID}
        placeholder={placeholder}
        placeholderStyle={{ color: textColor7 }}
        searchable={searchable}
        showArrowIcon={showArrowIcon}
        dropDownDirection="BOTTOM"
        multiple={multiple}
        min={min}
        max={max}
        disabled={disabled}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onChangeValue={onChangeValue}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={onSelectItem}
        hideSelectedItemIcon={true}
        listMode={"MODAL"}
        closeAfterSelecting={closeAfterSelecting}
        style={styles.selectMainWrapperContainer}
        // textStyle={styles.selectTextStyle}
        TickIconComponent={({ style }) => <Icon size={wp(6)} color={primaryColor1} name='check' style={style} />}
        // dropDownContainerStyle={{borderColor:borderColor}}
        // searchContainerStyle={{borderBottomColor:borderColor}}
        // searchTextInputStyle={{borderColor:borderColor,fontSize:wp(4),color:textColor3,height:hp(5)}}
        // searchPlaceholderTextColor={textColor3}
        searchPlaceholder="Serach here..."
      />
    </View>
  )
}

export default SelectInput

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    height: hp(7),
    borderColor: borderColor2,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1.5),
    borderRadius: 50,
    backgroundColor: primaryColor7,
    // paddingHorizontal:wp(5)
  },
  selectMainWrapperContainer: {
    width: '90%',
    borderWidth: 1,
    // height: hp(6) ,
    borderColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: hp(1.5),
    borderRadius: 50,
    backgroundColor: 'transparent',
    paddingHorizontal: wp(5),
    marginLeft: -hp(2)
  },
})