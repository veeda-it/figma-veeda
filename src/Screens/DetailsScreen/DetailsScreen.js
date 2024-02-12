import { SafeAreaView, View, Text, Image, ScrollView } from "react-native"
import ChevronLeft from '../../assets/Icons/ChevronLeft.png'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { primaryColor1 } from "../../Utils/Theme";
import Details from '../../assets/details.png'
import Border from '../../assets/border.png'
import ButtonComponent from "../../Components/ButtonComponents/ButtonComponent";

const DetailsScreen = (props) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F7F4F2' }}>
            <ScrollView>

                <View style={{ backgroundColor: '#4F3422', height: hp(30), borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
                        <View style={{ borderColor: '#4F3422', borderWidth: 1, width: 40, height: 40, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center' }}>
                            <Image style={{ width: 28, height: 28 }} source={(ChevronLeft)} />
                        </View>
                        <View style={{ marginLeft: 12 }}>
                            <Text style={{ fontFamily: 'Urbanist', fontSize: wp(4.5), fontWeight: '700', color: 'white' }}>Ansiedade</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 24, marginLeft: 16, width: '80%' }}>
                        <Text style={{ fontFamily: 'Urbanist', fontSize: wp(8), fontWeight: '700', color: 'white' }}>Transtorno de Ansiedade Generalizada (TAG)</Text>
                    </View>
                </View>
                <View style={{ margin: 16 }}>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(5), fontWeight: '700' }}>Definição</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ color: '#736B66', fontFamily: 'Urbanist', fontSize: wp(4) }}>
                                O Transtorno de Ansiedade Generalizada (TAG) é uma condição psiquiátrica caracterizada pela presença persistente e excessiva de ansiedade
                                e preocupação em relação a várias áreas da vida, que vai além das preocupações comuns do dia a dia. Essa ansiedade é desproporcional à
                                situação e difícil de controlar, interferindo significativamente na vida cotidiana.
                            </Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                        <Image style={{ borderRadius: 24 }} source={Details} />
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(5), fontWeight: '700' }}>Epidemiologia</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ color: '#736B66', fontFamily: 'Urbanist', fontSize: wp(4) }}>
                                O TAG é uma das formas mais comuns de transtorno de ansiedade, afetando pessoas de todas as idades. Estima-se que a prevalência
                                ao longo da vida seja em torno de 5-7%, sendo mais comum em mulheres do que em homens. Geralmente, tem início na juventude e pode persistir ao longo da vida se não for devidamente tratado.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(5), fontWeight: '700' }}>Características Clínicas</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ color: '#736B66', fontFamily: 'Urbanist', fontSize: wp(4) }}>
                                As características clínicas do TAG incluem
                                preocupação excessiva e crônica em diversas áreas da vida, como saúde, finanças, trabalho e relacionamentos. Outros sintomas comuns incluem inquietação, fadiga, dificuldade de concentração, irritabilidade, tensão muscular
                                e distúrbios do sono. Os sintomas costumam perdurar por pelo menos seis meses e podem variar em intensidade.
                            </Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={{ color: primaryColor1, fontFamily: 'Urbanist', fontSize: wp(5), fontWeight: '700' }}>Tratamento</Text>
                        <View style={{ marginTop: 8 }}>
                            <Text style={{ color: '#736B66', fontFamily: 'Urbanist', fontSize: wp(4) }}>
                                O tratamento do TAG geralmente envolve uma abordagem combinada que inclui psicoterapia e, em alguns casos, medicação. A terapia cognitivo-comportamental (TCC) tem se mostrado eficaz no tratamento do TAG, ajudando os indivíduos a identificar e modificar padrões de pensamento prejudiciais.
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ backgroundColor: '#9BB168', position:'relative', marginTop:24 }}>
                <View style={{position:'absolute', top:-14, width:'100%'}}>
                    <Image style={{width:'100%'}} source={Border}/>
                </View>
                <View style={{alignItems:'center', padding:16, paddingTop:24}}>
                    <Text style={{fontFamily:'Urbanist', fontSize:wp(6), color:'white', fontWeight:'700'}}>Nós podemos te ajudar!</Text>
                </View>
                    <View style={{ margin: 16, paddingBottom:24 }}>
                        <ButtonComponent onPress={() => {
                            props.navigation.navigate('UserFollowScreen')
                        }} title={'Próximo'} textStyle={{
                            fontFamily: 'Urbanist',
                            fontWeight: '700'
                        }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DetailsScreen