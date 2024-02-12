import { SafeAreaView, Text, TouchableOpacity, View } from "react-native"
import Header from "../../Components/HeaderComponents/Header"
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { primaryColor1 } from "../../Utils/Theme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from "react";
import ButtonComponent from "../../Components/ButtonComponents/ButtonComponent";


const CategoriesScreen = (props) => {
    const [data, setData] = useState([
        {
            id: 1,
            icon: 'heart',
            title: 'Preciso lidar melhor com a minha Depressão',
            selected: false
        },
        {
            id: 2,
            icon: 'heart',
            title: 'Preciso lidar melhor com a minha Ansiedade',
            selected: false
        },
        {
            id: 3,
            icon: 'flag',
            title: 'Eu quero lidar com um Trauma',
            selected: false
        },
        {
            id: 4,
            icon: 'user',
            title: 'Melhorar a qualidade do meu Sono',
            selected: false
        }
    ])

    const handleCategoryPress = (id) => {
        const updatedData = data.map(val => ({
            ...val,
            selected: val.id === id ? true : false
        }));
        setData(updatedData);
    };


    const renderCategory = (val) => {
        return (
            <TouchableOpacity onPress={() => {
                handleCategoryPress(val.id)
            }} key={val?.id} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: val?.selected ? '#9BB168' : 'white', padding: 16, borderRadius: 24, marginTop: 16, borderColor: val?.selected ? primaryColor1 : 'white', borderWidth: 1 }}>
                <AntDesign name={val?.icon} size={20} color={'#C9C7C5'} />
                <View style={{ width: '80%' }}>
                    <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(4), fontWeight: '700' }}>{val?.title}</Text>
                </View>
                <View style={{ borderColor: val?.selected ? 'white' : primaryColor1, borderWidth: 2, width: 18, height: 18, borderRadius: 18 / 2, alignItems: 'center', justifyContent: 'center' }}>
                    {
                        val?.selected && (
                            <View style={{ backgroundColor: val?.selected ? 'white' : primaryColor1, width: 12, height: 12, borderRadius: 12 / 2 }}></View>
                        )
                    }
                </View>
            </TouchableOpacity>
        )
    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F4F2' }}>
            <Header title={'Vamos definir seu objetivo'} />
            <View style={{ alignItems: 'center', marginTop: 24 }}>
                <View style={{ marginTop: 20, width: '80%' }}>
                    <Text style={{ fontFamily: 'Urbanist', fontSize: wp(6), color: primaryColor1, fontWeight: '700', textAlign: 'center' }}>Vamos lá! Como o Veeda pode te ajudar?</Text>
                </View>
            </View>
            <View style={{ margin: 16 }}>
                {
                    data && data.map(val => (
                        renderCategory(val)
                    ))
                }
            </View>
            <View style={{  margin:16, marginTop: 24 }}>
                <ButtonComponent onPress={() => {
                    props.navigation.navigate('DetailsScreen')
                }} title={'Próximo'} textStyle={{
                    fontFamily: 'Urbanist',
                    fontWeight: '700'
                }} />
            </View>
        </SafeAreaView>
    )
}

export default CategoriesScreen
