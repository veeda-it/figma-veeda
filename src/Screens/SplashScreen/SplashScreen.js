import React, { useEffect, useRef } from 'react';
import {
    ImageBackground,
    StyleSheet,
    Animated,
    StatusBar,
    I18nManager,
    View,
    Image,
    Platform,
    SafeAreaView,
    Text
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { ZenYellow, ZenYellowLight, primaryColor1, primaryColor2, primaryColor3 } from '../../Utils/Theme';
import { horizontalPadding } from '../../Utils/Styles';
import customNavigate from '../../Utils/CustomNavigate';
import { Logo } from '../../Utils/Images';
import RegularText from '../../Components/TextComponents/RegularText';

export default function SplashScreen({ navigation }) {

    const handleChange = () => {
        setTimeout(() => {
            navigation.navigate('GetStartedScreen')
        },3000)    
    }

    useEffect(() => {
        handleChange()
    },[])


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor={ZenYellowLight} />

            <View style={styles.contentContainer}>

                <Image source={Logo} style={{ width: wp(20), height: hp(10), marginTop: wp(3), alignSelf: 'center' }} resizeMode="cover" />
                <Text style={styles.textStyle}>Vooda.<Text style={{color:primaryColor2}}>mood</Text></Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ZenYellowLight
        },
    contentContainer: {
        height:'100%',
        ...horizontalPadding,
        justifyContent: 'center',
        alignItems:'center',
    },
    textStyle:{
    fontFamily:'Urbanist',
    fontSize:hp(3),
    fontWeight:'800',
    color:primaryColor1,
    marginTop:hp(1)
    }


})
