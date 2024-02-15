import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native"
import Header from "../../Components/HeaderComponents/Header"
import { primaryColor1 } from "../../Utils/Theme"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Follow from '../../assets/follow.png'
import ButtonComponent from "../../Components/ButtonComponents/ButtonComponent";
import { useState } from "react";
import User from '../../assets/user.png'
import { ArrowIcon } from '../../Utils/Images';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"

const UserFollowScreen = (props) => {
    const [displayCategories, setDisplayCategories] = useState(false)
    const [displayDetails, setDisplayDetails] = useState(false)
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Medicamentos prescritos',
            selected: false,
            icon:<AntDesign name="book" size={24}/>
        },
        {
            id: 2,
            title: 'Suplementos Nutricionais',
            selected: false,
            icon:<Text style={{fontSize:24}}>+</Text>
        },
        {
            id: 3,
            title: 'Eu não estou tomando nenhum',
            selected: false,
            icon:<Text style={{fontFamily:'Urbanist', fontSize:24}}>-</Text>
        },
        {
            id: 4,
            title: 'Prefiro não dizer',
            selected: false,
            icon:<AntDesign name="close" size={24}/>
        }
    ])

    const renderCategories = () => {
        return (
            <View>

            </View>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F4F2' }}>
            {
                displayCategories ? (
                    <>
                        <Header title={'Acompanhamento'} navigation={props.navigation} />
                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <View style={{ marginTop: 20, width: '80%' }}>
                                <Text style={{ fontFamily: 'Urbanist', fontSize: wp(8), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Você esta tomando algum medicamento?</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', margin: 8, marginTop: 24 }}>
                            {
                                data && data.map(val => (
                                    <TouchableOpacity key={val.id} style={{
                                        backgroundColor: val?.selected ? '#9BB168' : 'white', height: hp("20%"), width: wp("45%"), padding: 16, borderRadius: 32, shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.2,
                                        shadowRadius: 4, elevation: 5,
                                        marginLeft: 4,
                                        marginRight: 4,
                                        marginBottom: 16
                                    }} onPress={() => {
                                        const updatedData = data.map(v => ({
                                            ...v,
                                            selected: v.id === val?.id ? true : false
                                        }));
                                        setData(updatedData);
                                    }} >
                                        <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                                            <View>
                                                <Text style={{color:val?.selected ? 'white' : 'black'}}>{val.icon}</Text>
                                            </View>
                                            <View>
                                                <Text style={{ color: val?.selected ? 'white' : primaryColor1, fontFamily: 'Urbanist', fontSize: wp(4), fontWeight: '700' }}>
                                                    {val.title}
                                                </Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                ))
                            }
                        </View>
                        <View style={{ margin: 16 }}>
                            <ButtonComponent onPress={() => {
                                setDisplayDetails(true)
                                setDisplayCategories(false)
                            }}  title={'Próximo'} textStyle={{
                                fontFamily: 'Urbanist',
                                fontWeight: '700'
                            }} 
                            leftIcon={<Image source={ArrowIcon} style={{ height: hp(3), width: wp(6), marginTop: hp(0.5), marginLeft: wp(3) }} />}
                            />
                        </View>
                    </>
                ) : displayDetails ? (
                    <>
                    <View>
                        <Image style={{width:'100%'}} source={User}/>
                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <View style={{ marginTop: 20, width: '80%' }}>
                                <Text style={{ fontFamily: 'Urbanist', fontSize: wp(8), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Eeba! Que bom que você chegou até aqui</Text>
                                <View style={{marginTop:24}}>
                                    <Text style={{color:primaryColor1, fontSize:wp(4), fontFamily:'Urbanist', textAlign:'center'}}>Clique em "Começar" para descobrir como podemos tornar sua jornada mais leve e divertida. Vamos juntos cultivar o humor positivo!</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ margin: 16, marginTop:24}}>
                            <ButtonComponent onPress={() => {
                                props.navigation.navigate('HomeScreen')
                            }} title={'Começar'} textStyle={{
                                fontFamily: 'Urbanist',
                                fontWeight: '700'
                            }} 
                            leftIcon={<Image source={ArrowIcon} style={{ height: hp(3), width: wp(6), marginTop: hp(0.5), marginLeft: wp(3) }} />}
                            />
                        </View>
                    </View>
                    </>
                ) : (
                    <>
                        <Header title={'Medicação'} navigation={props.navigation} />
                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <View style={{ marginTop: 20, width: '80%' }}>
                                <Text style={{ fontFamily: 'Urbanist', fontSize: wp(8), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Você está acompanhando com profissional médico?</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 24 }}>
                            <Image source={Follow} />
                        </View>
                        <View style={{ margin: 16, marginTop: 24 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 24, justifyContent: 'space-between' }}>
                                <TouchableOpacity style={{ backgroundColor: '#9BB168', width: '45%', alignItems: 'center', padding: 16, borderRadius: 24 }}>
                                    <Text style={{ color: 'white', fontFamily: 'Urbanist', fontSize: wp(4), fontWeight: '700' }}>Sim</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    backgroundColor: 'white', width: '45%', alignItems: 'center', padding: 16, borderRadius: 24, shadowColor: '#000',
                                    shadowOffset: { width: 0, height: 2 },
                                    shadowOpacity: 0.2,
                                    shadowRadius: 4, elevation: 5
                                }}>
                                    <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(4), fontWeight: '700' }}>Nao</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ margin: 16 }}>
                            <ButtonComponent onPress={() => {
                                setDisplayCategories(true)
                            }} title={'Próximo'} textStyle={{
                                fontFamily: 'Urbanist',
                                fontWeight: '700'
                            }} 
                            leftIcon={<Image source={ArrowIcon} style={{ height: hp(3), width: wp(6), marginTop: hp(0.5), marginLeft: wp(3) }} />}
                            />
                        </View>
                    </>
                )
            }

        </SafeAreaView>
    )
}


export default UserFollowScreen