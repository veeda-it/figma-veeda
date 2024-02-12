import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Logo2, Welcome, ArrowIcon } from '../../Utils/Images';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import RegularText from '../../Components/TextComponents/RegularText';
import BoldText from '../../Components/TextComponents/BoldText';
import Button from '../../Components/ButtonComponents/ButtonComponent';
import { navigate } from '../../Utils/rootNavigation';
import { DarkGray, primaryColor1, primaryColor3, primaryColor4, textColor3 } from '../../Utils/Theme';

const GetStartedScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Set the status bar style and color */}
      <StatusBar barStyle="dark-content" backgroundColor={primaryColor3} />

      {/* Logo */}
      <View style={styles.innerContainer}>
        <Image source={Logo2} style={{ height: hp(8.5), width: wp(18.5), marginVertical: hp(4) }} />
        {/* Text Content */}
        <View style={styles.textView}>
          {/* Heading */}
          <BoldText
            text={'Olá eu sou o Veeda!'}
            textStyle={{
              color: primaryColor1,
              fontSize: hp(3),
              marginBottom: hp(2),
              fontWeight: '700',
            }}
          />
          {/* Description */}
          <RegularText
            text={'Seu aliado de saúde mental consciente, sempre presente onde você estiver 🍃'}
            textStyle={{ color: primaryColor4, fontSize: hp(2.4), paddingHorizontal: wp(2) }}
          />
        </View>
        <Image source={Welcome} style={{ height: hp(40), width: wp(80) }} />
        {/* Sign up Button */}
        <Button
          title={'Começar Agora   '}
          buttonStyle={{
            height: hp(7),
            borderColor: DarkGray,
            width: '60%',
            paddingHorizontal: wp(7),
            fontWeight: '800',
            marginVertical: hp(5),
          }}
          textStyle={{
            fontWeight: '700',
            fontFamily: 'Urbanist'
          }}
          leftIcon={<Image source={ArrowIcon} style={{ height: hp(3), width: wp(6), marginTop: hp(0.5), marginLeft: wp(3) }} />}
          onPress={() => navigate('SignupScreen')}
        />
        <Text style={{ fontFamily: 'Urbanist', fontSize: wp(4), fontWeight: '700', color: primaryColor4 }}>Já possui uma conta?<Text style={{ color: textColor3 }} onPress={() => navigate('LoginScreen')}> Faça login.</Text>
        </Text>
      </View>

    </SafeAreaView>
  );
};

export default GetStartedScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFC',
    flex: 1,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    marginTop: hp(5),
    paddingHorizontal: wp(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textView: {
    //   paddingHorizontal: wp(6),
    alignItems: 'center'
  },
});
