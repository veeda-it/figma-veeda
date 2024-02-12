import {StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import OverpassRegular from '../TextWrappers/OverpassRegular';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {IconWrapper} from '../Icon/Icon';
// import Calendar from '../../Assets/Images/calendar-line.png'
import RegularText from '../TextComponents/RegularText';
import {DarkGray, borderColor2, primaryColor7} from '../../Utils/Theme';

const DateInput = ({
  inputStyle,
  placeholder,
  val,
  setVal,
  isExpiry,
  editable,
  maximumDate,
}) => {
  const [modalStatus, setModalStatus] = useState(false);
  const [date, setDate] = useState(`${new Date().toLocaleDateString()}`);

  const [dateChanged, setDateChanged] = useState(false);

  const showDateModal = async () => {
    setModalStatus(true);
  };

  const handleConfirm = async date => {
    setDateChanged(true);
    setDate(`${date.toLocaleDateString()}`);
    setVal(`${date.toLocaleDateString()}`);
    setModalStatus(false);
  };

  const hideDatePicker = () => {
    setModalStatus(false);
  };

  function deltaDate(input, days, months, years) {
    return new Date(
      input.getFullYear() + years,
      input.getMonth() + months,
      Math.min(
        input.getDate() + days,
        new Date(
          input.getFullYear() + years,
          input.getMonth() + months + 1,
          0,
        ).getDate(),
      ),
    );
  }

  return (
    <TouchableOpacity
      style={[styles.dobInput, inputStyle]}
      activeOpacity={0.9}
      onPress={editable ? showDateModal : null}>
      <AntDesign
        name="calendar"
        size={20}
        style={{marginHorizontal: hp(1)}}
        color={DarkGray}
      />
      {/* <IconWrapper icon={Calendar} style={{width:hp(2.5) , aspectRatio:1 , marginLeft:hp(2)}}  /> */}
      {dateChanged ? (
        <RegularText
          text={date}
          textStyle={{marginLeft: hp(1), color: DarkGray}}
        />
      ) : (
        <RegularText
          text={placeholder}
          textStyle={{marginLeft: hp(1), color: DarkGray}}
        />
      )}

      <DateTimePickerModal
        // minimumDate={deltaDate(new Date(), 0, 0, -16)}
        isVisible={modalStatus}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        maximumDate={deltaDate(new Date(), 0, 0, -16)}
      />
    </TouchableOpacity>
  );
};

export default DateInput;

const styles = StyleSheet.create({
  dobInput: {
    width: '100%',
    borderWidth: 1,
    borderColor: borderColor2,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(1.5),
    height: hp(7),
    borderRadius: 50,
    backgroundColor: primaryColor7,
  },
});
