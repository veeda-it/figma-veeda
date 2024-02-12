import { View, Text, Image, SafeAreaView, TouchableOpacity, TextInput } from "react-native"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { primaryColor1, primaryColor4, primaryColor7 } from "../../Utils/Theme";
import Header from "../../Components/HeaderComponents/Header";
import HomeUser from '../../assets/HomeUser.png'
import HomeAvatar from '../../assets/HomeAvatar.png'
import ButtonComponent from "../../Components/ButtonComponents/ButtonComponent";
import { useState } from "react";

const HomeScreen = (props) => {
    const [displayAge, setDisplayAge] = useState(false)

    const renderAge = () => {
        return (
            <View>
                <View style={{ alignItems: 'center', marginTop: 24 }}>
                    <View style={{ marginTop: 20, width: '80%' }}>
                        <Text style={{ fontFamily: 'Urbanist', fontSize: wp(6), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Qual é a sua idade?</Text>
                    </View>
                </View>
                <View style={{ marginTop: 24, margin: 16 }}>
                    <Text style={{ fontFamily: 'Urbanist', fontSize: wp(4), color: primaryColor1, fontWeight: '700' }}>Idade</Text>
                    <View style={{ marginTop: 12, backgroundColor: '#9BB168', borderRadius: 24 }}>
                        <TextInput placeholder="35" style={{
                            borderColor: 'black', borderWidth: 1, borderRadius: 24, padding: 16, shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.2,
                            shadowRadius: 4, elevation: 5, backgroundColor: 'white',
                            color: primaryColor1,
                            fontFamily: 'Urbanist',
                            fontWeight: '700'
                        }} />
                    </View>
                </View>
                <View style={{ marginTop: 24, margin: 16 }}>
                    <ButtonComponent onPress={() => {
                        props.navigation.navigate('CategoriesScreen')
                    }} title={'Próximo'} textStyle={{
                        fontFamily: 'Urbanist',
                        fontWeight: '700'
                    }} />
                </View>
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F4F2' }}>
            <Header title={'Posso conhecer mais sobre você?'} />
            {
                displayAge ? (
                    renderAge()
                ) : (
                    <>
                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <View style={{ marginTop: 20, width: '80%' }}>
                                <Text style={{ fontFamily: 'Urbanist', fontSize: wp(6), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Qual é o seu gênero biológico?</Text>
                            </View>
                        </View>
                        <View style={{ margin: 16, marginTop: 40 }}>
                            <TouchableOpacity style={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', borderRadius: 32, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4, elevation: 5
                            }}>
                                <View style={{ marginLeft: 16, marginTop: 16 }}>
                                    <Text style={{ fontSize: wp(4), fontFamily: 'Urbanist', fontWeight: '700' }}>Eu sou homem</Text>
                                </View>
                                <Image source={HomeUser} />
                            </TouchableOpacity>
                            <TouchableOpacity style={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#FFFFFF', borderRadius: 32, marginTop: 20, shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.2,
                                shadowRadius: 4, elevation: 5
                            }}>
                                <View style={{ marginLeft: 16, marginTop: 16 }}>
                                    <Text style={{ fontSize: wp(4), fontFamily: 'Urbanist', fontWeight: '700' }}>Eu sou mulher</Text>
                                </View>
                                <Image source={HomeAvatar} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ margin: 16, marginTop: 24 }}>
                            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#E5EAD7', padding: 16, borderRadius: wp(12), justifyContent: 'center' }}>
                                <Text style={{ color: '#9BB168', fontFamily: 'Urbanist', fontWeight: '700', fontSize: wp(4) }}>Prefiro pular, obrigado</Text>
                                <Text style={{ color: '#9BB168', fontFamily: 'Urbanist', fontWeight: '700', fontSize: wp(4), marginLeft: 10 }}>X</Text>
                            </TouchableOpacity>
                            <View style={{ marginTop: 16 }}>
                                <ButtonComponent onPress={() => {
                                    setDisplayAge(true)
                                }} title={'Próximo'} textStyle={{
                                    fontFamily: 'Urbanist',
                                    fontWeight: '700'
                                }} />
                            </View>
                        </View>
                    </>
                )
            }

        </SafeAreaView>
    )
}

export default HomeScreen