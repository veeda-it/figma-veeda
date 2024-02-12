import { CommonActions } from '@react-navigation/native';

const customNavigate = ({name,state,navigation}) =>{

    
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [
                { name , params:state }
            ],
        })
    );

}

export default customNavigate