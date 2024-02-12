import React, { useState } from 'react';
import {
  TouchableOpacity,
  FlatList,
  View,
  TextInput,
  StyleSheet,
  Platform,
  I18nManager,
} from 'react-native';

// Internal Imports
import {
  textColor1,
  primaryColor3,
  errorColor,
  primaryColor2,
  borderColor,
  textColor3,
  textColor7,
  DarkGray,
  borderColor2,
} from '../../Utils/Theme';
import countries from '../../Utils/CountriesList.json';
import BoldText from '../TextComponents/BoldText';
import RegularText from '../TextComponents/RegularText';
import { h3, h4, h5 } from '../../Utils/Styles';

// External Imports
import Modal from 'react-native-modal';
import { Divider, Input } from '@rneui/themed';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function CountryPicker({
  placeholder,
  label,
  onSelectData,
  onChangeText,
  value,
  disabled,
  errorMessage,
  autoFocus,
  isError,
  phoneInputContainerStyle,
  containerStyle,
  inputContainerStyle,
  inputInnerContainerStyle,
  length,
  inputStyle,
  keyboardType,
  ...props
}) {
  const [modalVisible, setModalVisible] = useState(props.modalVisible);
  const [countrCode, setCountryCode] = useState(
    props.initialValue.split(' ')[0],
  );
  const [countryFlag, setCountryFlag] = useState(
    props.initialValue.split(' ')[1],
  );
  const [country_with_Flag, setCountry_with_Flag] = useState(
    props.initialValue,
  );
  const [data, setData] = useState(countries);
  const [hideFavorite, setHideFavorite] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  function renderData(data) {
    return (
      <TouchableOpacity
        onPress={() => {
          onSelectData(data.item.dial_code);
          setCountryCode(data.item.dial_code);
          setCountryFlag(data.item.flag);
          setCountry_with_Flag(data.item.flag + data.item.dial_code);
          setModalVisible(false);
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: hp(1),
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <BoldText
            text={data.item.flag}
            textStyle={{ marginRight: 10, ...h3 }}
          />
          <RegularText
            text={data.item.dial_code}
            textStyle={{ color: textColor1, ...h5 }}
          />
        </View>

        <RegularText
          numberOfLines={1}
          text={I18nManager.isRTL ? data.item.nameArabic : data.item.name}
          textStyle={{ color: textColor1, ...h5 }}
        />
      </TouchableOpacity>
    );
  }

  function openModal() {
    const hanldeSearch = val => {
      if (val.length > 0) {
        setHideFavorite(false)
        const newData = countries.filter(dt =>
          dt.name.toLowerCase().includes(val.toLowerCase()),
        );
        setData(newData);
      } else {
        setHideFavorite(true)
        setData(countries);
      }
    };
    const datacount = data?.filter(dt => dt?.code == "AE")
    console.log("data>>>>", datacount);
    return (
      <Modal
        style={{ margin: 0 }}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0}
        hideModalContentWhileAnimating={true}
        isVisible={modalVisible}
        animationInTiming={500}
        animationOutTiming={500}
        onBackdropPress={() => (setModalVisible(false), setData(countries))}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 10,
            backgroundColor: primaryColor3,
            borderTopLeftRadius: wp(5),
            borderTopRightRadius: wp(5),
            height: Platform.OS == 'android' ? hp(70) : hp(60),
            padding: wp(5),
          }}>

          {/* <View style={{ borderWidth: 2, width: '20%', }} ></View> */}
          <TextInput
            placeholder={'Search'}
            style={{
              borderWidth: 1,
              borderColor: borderColor,
              paddingHorizontal: 10,
              borderRadius: 30,
              ...h5,
              // fontFamily: 'SF UI Display',
              height: hp(6),
              // paddingTop:10,
              color: textColor1,
            }}
            inputStyle={{ textAlign: I18nManager?.isRTL ? 'right' : 'left' }}
            onChangeText={hanldeSearch}
          />

          {hideFavorite && <View style={{ borderBottomWidth: 1, borderBottomColor: borderColor2 }}>
            <BoldText text={'Favourite'} textStyle={{ fontSize: wp(4.5), color: DarkGray, fontWeight: '700' }} />
            <TouchableOpacity
              onPress={() => {
                onSelectData(datacount[0]?.dial_code);
                setCountryCode(datacount[0]?.dial_code);
                setCountryFlag(datacount[0]?.flag);
                setCountry_with_Flag(datacount[0]?.flag + datacount?.dial_code);
                setModalVisible(false);
              }}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: hp(1),
              }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <BoldText
                  text={datacount[0]?.flag}
                  textStyle={{ marginRight: 10, ...h3 }}
                />
                <RegularText
                  text={datacount[0]?.dial_code}
                  textStyle={{ color: textColor1, ...h5 }}
                />
              </View>

              <RegularText
                numberOfLines={1}
                text={datacount[0]?.name}
                textStyle={{ color: textColor1, ...h5 }}
              />
            </TouchableOpacity>
          </View>}
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderData}
          />
        </View>
      </Modal>
    );
  }

  return (
    <View style={phoneInputContainerStyle}>
      <RegularText text={label} textStyle={styles.labelStyle} />
      <View
        style={[
          styles.containerStyle,
          isError
            ? { borderWidth: 1, borderColor: errorColor }
            : isFocused
              ? { borderWidth: 1, borderColor: primaryColor2 }
              : { borderWidth: 1, borderColor: borderColor },
        ]}>
        <TouchableOpacity
          onPress={() => {
            if (!props.isVan) {
              setModalVisible(true);
            }
          }}
          style={styles.inputCodeContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <BoldText text={countryFlag} textStyle={{ marginRight: 5, ...h4 }} />
            <RegularText
              text={countrCode}
              textStyle={{ color: textColor7, ...h4 }}
            />
          </View>
          <Icon name="keyboard-arrow-down" color={textColor3} size={wp(5)} />
        </TouchableOpacity>
        <Divider
          orientation="vertical"
          style={{ marginHorizontal: wp(1), backgroundColor: '#eeeeee' }}
        />
        <Input
          keyboardType="phone-pad"
          maxLength={length ? 9 : 13}
          value={value}
          // style={{ fontFamily: 'SF UI Display' }}
          autoFocus={autoFocus}
          containerStyle={[styles.inputMainContainerStyle, inputContainerStyle]}
          inputContainerStyle={[
            styles.inputContainerStyle,
            inputInnerContainerStyle,
          ]}
          inputStyle={[styles.inputStyle, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={'#D4D4D4'}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
        />
        {openModal()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelStyle: {
    ...h5,
    color: textColor3,
    marginLeft: wp(2),
    marginBottom: hp(0.75),
    textAlign: Platform.OS == 'ios' && I18nManager.isRTL ? 'left' : 'left',
  },
  containerStyle: {
    padding: 0,
    backgroundColor: primaryColor3,
    flexDirection: 'row',
    height: hp(7),
    paddingLeft: wp(2),
    paddingRight: wp(4),
    borderRadius: wp(10),
    // shadowColor: 'rgb(113, 113, 113)',
    // shadowOffset: {
    //   width: 0,
    //   height: 8,
    // },
    // shadowOpacity: 0.44,
    // shadowRadius: 10.32,

    // elevation: 16,
  },
  inputCodeContainer: {
    height: '100%',
    width: '30%',
    borderTopLeftRadius: wp(4),
    borderBottomLeftRadius: wp(4),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(2),
  },
  inputMainContainerStyle: {
    borderBottomWidth: 0,
  },
  inputContainerStyle: {
    padding: 0,
    height: hp(7),
    borderBottomWidth: 0,
  },
  inputStyle: {
    height: hp(7),
    ...h4,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
});
