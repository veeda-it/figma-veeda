// Importing necessary components and libraries
import React, { useEffect, useState } from 'react';
import {
    ImageBackground,
    StyleSheet,
    TouchableWithoutFeedback,
    Keyboard,
    View,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Image,
    Text
} from 'react-native';
import BoldText from '../../Components/TextComponents/BoldText';
import Button from '../../Components/ButtonComponents/ButtonComponent';
import PasswordInput from '../../Components/InputComponents/PasswordInputComponent';
import {
    DarkGray,
    primaryColor1,
    primaryColor3,
    primaryColor4,
    primaryColor5,
    primaryColor7,
    redColor2,
    textColor3,
    textColor7,
} from '../../Utils/Theme';
import RegularText from '../../Components/TextComponents/RegularText';
import { EmailValidation, Required } from '../../Utils/Validations';
import { h4, horizontalPadding, lh1, xlh1 } from '../../Utils/Styles';
import AIcon from 'react-native-vector-icons/AntDesign';
import TextInput from '../../Components/InputComponents/TextInputCompnent';
// External Imports
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Toast from 'react-native-toast-message';
import { ArrowIcon, Background, Fb, Google, Logo3 } from '../../Utils/Images';
import Header from '../../assets/header.png'

// Component function for the Login screen
export default function RegisterScreen({
    navigation: { navigate, goBack },
    navigation,
    //   route: {params},
}) {
    // State variables for user input and loading state
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        navigation.navigate('HomeScreen')

        // if (!Required('Email', email)) setEmailErr(true);
        // else if(!Required('Password',password)) setPasswordErr(true); 

    }

    return (
        <SafeAreaView onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.container}>
                <StatusBar backgroundColor={primaryColor5} barStyle={'dark-content'} />
                <View>
                    <View style={{ position: 'relative' }}>
                        <Image style={{ width: wp(100), objectFit: 'fill' }} source={Header} />
                        <Image source={Logo3} style={{ height: hp(8), width: wp(16), position: 'absolute', left: wp(40), top: hp(4) }} />

                    </View>
                </View>
                <View style={{ ...horizontalPadding }}>
                    <BoldText text={'Crie Sua Conta'} textStyle={styles.heading} />
                    <TextInput
                        label={'Email'}
                        labelStyle={{ fontSize: wp(4) }}
                        placeholder={'Informe o seu melhor email...'}
                        value={email}
                        onChangeText={val =>
                            EmailValidation(val)
                                ? (setEmail(val), setEmailErr(false))
                                : (setEmail(val), setEmailErr(true))
                        }
                        isError={emailErr}
                        errorMessage=""
                        containerStyle={{ marginTop: 24 }}
                        inputStyle={{ fontWeight: '700', paddingLeft: 16 }}
                    />
                    {/* {emailErr && (
          <RegularText
          text={
              email ? 'your email format isn’t correct' : 'Enter your email address'
            }
            textStyle={{
              color: redColor2,
              marginTop: hp(0.8),
              paddingHorizontal: wp(2),
            }}
            />
            )} */}
                    <View>
                        <PasswordInput
                            label={'Senha'}
                            placeholder={'Informe sua senha...'}
                            value={password}
                            containerStyle={{ marginTop: 24 }}

                            onChangeText={val => (setPassword(val), setPasswordErr(false))}
                            isError={passwordErr}
                            errorMessage=""
                            inputStyle={{ fontWeight: '700', paddingLeft: 16 }}
                        />
                    </View>
                    <View>
                        <PasswordInput
                            label={'Confirmação de Senha'}
                            placeholder={'Confirme sua senha...'}
                            value={password}
                            containerStyle={{ marginTop: 24 }}
                            onChangeText={val => (setPassword(val), setPasswordErr(false))}
                            isError={passwordErr}
                            errorMessage=""
                            inputStyle={{ fontWeight: '700', paddingLeft: 16 }}
                        />
                    </View>
                    <Button
                        title={'Criar Conta'}
                        buttonStyle={styles.button}
                        onPress={() => handleLogin()}
                        leftIcon={<Image source={ArrowIcon} style={{ height: hp(3), width: wp(6), marginTop: hp(0.5), marginLeft: wp(3) }} />}
                        isLoading={isLoading}
                        textStyle={{ fontFamily: 'Urbanist', fontWeight: '700' }}
                    />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('LoginScreen')
                    }} style={{ alignItems: 'center', marginTop: hp(1.5) }}>
                        <Text style={{ fontSize: hp(2), color: primaryColor4, color: primaryColor4, fontFamily: 'Urbanist' }}>Já possui uma conta? <Text style={{ color: textColor3, fontWeight: '800' }}>Faça login.</Text></Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        // width: wp(100),
        height: hp(100),
        // ...horizontalPadding,
        backgroundColor: primaryColor7,
    },
    heading: {
        fontSize: wp(7),
        fontWeight: '800',
        color: primaryColor1,
        marginTop: hp(3),
        textAlign: 'center'
    },
    button: {
        width: wp(90),
        alignSelf: 'center',
        marginTop: hp(8),
        height: hp(7),
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(5),
    },
});
