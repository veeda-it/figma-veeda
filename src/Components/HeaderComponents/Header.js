import { View, Text, Image, TouchableOpacity } from "react-native"
import ChevronLeft from '../../assets/Icons/ChevronLeft.png'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { primaryColor1 } from "../../Utils/Theme";

const Header = ({ title, navigation }) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
            <TouchableOpacity onPress={() => {
                navigation.pop()
            }} style={{ borderColor: '#4F3422', borderWidth: 1, width: 40, height: 40, borderRadius: 50 / 2, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={{ width: 28, height: 28 }} source={(ChevronLeft)} />
            </TouchableOpacity>
            <View style={{ marginLeft: 12 }}>
                <Text style={{ fontFamily: 'Urbanist', fontSize: wp(4.5), fontWeight: '700', color: primaryColor1 }}>{title}</Text>
            </View>
        </View>
    )
}

export default Header