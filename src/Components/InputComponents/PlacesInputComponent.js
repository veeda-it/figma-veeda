// import React,{useState,useRef,useEffect} from 'react'
// import { View, StyleSheet, TouchableOpacity, Platform, I18nManager } from 'react-native'

// // Internal Imports
// import { primaryColor1, primaryColor2, textColor2 } from '../../Utils/Theme'
// import { googleApiKey } from '../../Utils/Constants'
// import { h4 } from '../../Utils/Styles'
// import { locationPermission } from '../../Utils/Permissions'

// // External Imports
// import { heightPercentageToDP as hp , widthPercentageToDP as wp } from 'react-native-responsive-screen'
// import Icon from 'react-native-vector-icons/Ionicons'
// import MIcon from 'react-native-vector-icons/MaterialIcons'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Geolocation from 'react-native-geolocation-service';
// import Toast from 'react-native-toast-message'
// import Geocoder from 'react-native-geocoding'
// import { useTranslation } from 'react-i18next'

// Geocoder.init(googleApiKey)

// export default function PlacesInputComponent({containerStyle,getAddress,getCoordinates,address,getPlaceId,getStreet}) {

//     const {t} = useTranslation()
//     const addressRef = useRef()
//     const [isFocused, setIsFocused] = useState(false)

//     useEffect(()=>{
//         if(address){
//             addressRef?.current?.setAddressText(address)
//         }
//     },[address])

//     const handleFocus = () =>{
//       setIsFocused(true)
//     }

//     const handleBlur = () =>{
//       setIsFocused(false)
//     }

//     const handleOnSelectLocation = async(data,details) =>{
//         const {geometry:{location}} = details
//         getPlaceId(data?.place_id)
//         getAddress(data?.description)
//         getCoordinates(details?.geometry?.location)
//         addressRef?.current?.setAddressText(data?.description)

//         const result = await Geocoder.from(location?.lat, location?.lng)
//         const {address_components} = result?.results[0]
//         const street1 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'premise'))?.map(dt=>dt.long_name) || ''
//         const street2 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'street_number'))?.map(dt=>dt.long_name) || ''
//         const street3 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'route'))?.map(dt=>dt.long_name) || ''
//         getStreet(`${street1} ${street2} ${street3}`)
//     }

//     const handleGetCurrentLocation = async() =>{
//         if(Platform.OS == 'ios'){
//            await Geolocation.requestAuthorization('always')
//            Geolocation.getCurrentPosition(
//                async position => {
//                  getCoordinates({lat:position?.coords?.latitude,lng:position?.coords?.longitude})
//                  await handleGetAddress(position?.coords?.latitude,position?.coords?.longitude)
//                },
//                error => {
//                    const {code,message} = error

//                    if(code == 1){
//                        Toast.show({
//                            type:'error',
//                            text1:t('error'),
//                            text2:t('accessDeny')
//                        })
//                    }
//                    else{
//                        Toast.show({
//                            type:'error',
//                            text1:t('error'),
//                            text2:message
//                        })
//                    }
//                },
//                {enableHighAccuracy: true, timeout: 20000,forceRequestLocation:true}
//            );
//         }
//         else{
//             locationPermission()
//             Geolocation.getCurrentPosition(
//                 async position => {
//                   getCoordinates({lat:position?.coords?.latitude,lng:position?.coords?.longitude})
//                   await handleGetAddress(position?.coords?.latitude,position?.coords?.longitude)
//                 },
//                 error => {
//                     const {code,message} = error

//                     if(code == 1){
//                         Toast.show({
//                             type:'error',
//                             text1:t('error'),
//                             text2:t('accessDeny')
//                         })
//                     }
//                     else{
//                         Toast.show({
//                             type:'error',
//                             text1:t('error'),
//                             text2:message
//                         })
//                     }
//                 },
//                 {enableHighAccuracy: true, timeout: 20000,forceRequestLocation:true}
//             );
//         }
//     }

//     const handleGetAddress = async(lat,lng) =>{

//         const result = await Geocoder.from(lat, lng)
//         if(result){
//             const {formatted_address,address_components,place_id} = result?.results[0]
//             const street1 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'premise'))?.map(dt=>dt.long_name) || ''
//             const street2 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'street_number'))?.map(dt=>dt.long_name) || ''
//             const street3 = address_components?.filter(dt=>dt?.types?.every(dat=> dat == 'route'))?.map(dt=>dt.long_name) || ''

//             getStreet(`${street1} ${street2} ${street3}`)
//             getPlaceId(place_id)
//             getAddress(formatted_address)
//             addressRef?.current?.setAddressText(formatted_address)
//         }
//     }

//     return (
//         <View style={[styles.container, isFocused ? {borderWidth:1,borderColor:primaryColor2} : {borderWidth:1,borderColor:'#eeeeee'},containerStyle]}>
//             <View style={{width:'10%'}}>
//                 <Icon name='md-search-outline' size={wp(7)} color={primaryColor1} />
//             </View>
//             <View style={{width:'80%',zIndex:1}}>
//                 <GooglePlacesAutocomplete
//                     ref={addressRef}
//                     placeholder={t('searchAddress')}
//                     GooglePlacesDetailsQuery={{fields:'geometry'}}
//                     fetchDetails={true}
//                     onPress={(data, details = null) => handleOnSelectLocation(data, details)}
//                     onFail={error => console.error(error)}
//                     query={{
//                         key: googleApiKey,
//                         language: 'en',
//                         components:'country:ae'
//                     }}
//                     textInputProps={{
//                         onFocus:handleFocus,
//                         onBlur:handleBlur
//                     }}
//                     keyboardShouldPersistTaps="handled"
//                     styles={{
//                         container:{
//                             height:'100%',
//                             zIndex:1
//                         },
//                         textInputContainer:{
//                             height:'100%',
//                             borderRadius:0
//                         },
//                         textInput:{
//                             height:'100%',
//                             borderRadius:0,
//                             ...h4,
//                             fontFamily:'SF UI Display',
//                             textAlign: I18nManager.isRTL ? 'right' : 'left'
//                         },
//                         listView:{
//                             position:'absolute',
//                             zIndex:9999,
//                             width:wp(90),
//                             top:hp(8.5),
//                             left:-wp(11),
//                             borderWidth:1,
//                             borderColor:primaryColor2
//                         },
//                     }}
//                 />
//             </View>
//             <View style={{width:'10%'}}>
//                 <TouchableOpacity onPress={handleGetCurrentLocation}>
//                     <MIcon name='my-location' size={wp(7)} color={primaryColor1} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         paddingHorizontal:wp(3),
//         flexDirection:'row',
//         alignItems:'center',
//         backgroundColor:textColor2,
//         height:hp(7),
//         borderRadius:wp(4),
//         shadowColor: "rgb(113, 113, 113)",
//         shadowOffset: {
//             width: 0,
//             height: 8,
//         },
//         shadowOpacity: 0.44,
//         shadowRadius: 10.32,

//         elevation: 16,
//     }
// })
