import {
    View,
    Text,
    StyleSheet,
    Image,
    StatusBar

} from 'react-native'
import { Input } from '../components/Forms/Input'
import { Btn, OutBtn } from '../components/Forms/Btn'
import GlobalStyle from '../utils/GlobalStyle'
function Landing({ navigation }) {

    const { container, w_full, h_full, item_center, justify_around, TextBlack, mb_10 } = GlobalStyle

    return (
        <View style={[container, justify_around, item_center]}>
            {/* <StatusBar
                backgroundColor="#701a75"
            /> */}
            {/* <View style={[styles.img_cont]}>
                <Image
                    source={require('../../assets/imgs/welcome.jpg')}
                    style={[w_full, h_full]}
                // resizeMode='cover'
                />
            </View> */}
            <View>
                <Text style={[styles.text, TextBlack]}>Hello! Let's assist you.</Text>
            </View>
            <View>
                <Text style={[styles.text2, TextBlack]}>Choosing suicide is not the solution; please reach out to us so we can offer you assistance and support.</Text>
            </View>
            <View style={w_full}>
                <View style={[mb_10]}>
                    <Btn text='Login' handlePress={() => navigation.navigate('Login')} />
                </View>
                <View>
                    <OutBtn text='Sign Up' handlePress={() => navigation.navigate('PersonalQues')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img_cont: {
        width: '100%',
        height: 150,
        // padding: 10,
    },
    text: {
        fontFamily: 'Raleway',
        fontSize: 24,
        fontWeight: '600'
    },
    text2: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Raleway',
    }
})

export default Landing
