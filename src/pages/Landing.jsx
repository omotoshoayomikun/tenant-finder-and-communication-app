import React, { useEffect } from 'react'
import {
    View,
    Text,
    StyleSheet,

} from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { useNavigation } from '@react-navigation/native';
function Landing() {
    const navigation = useNavigation();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Login')
        }, 3000)

        return () => clearTimeout(timer)
    }, [])

    const { flex1, w_full, h_full, item_center, justify_center, Raleway, TextPurple, TextBlack, mb_10 } = GlobalStyle

    return (
        <View style={[flex1, item_center, justify_center, { backgroundColor: '#ffffff' }]}>
            <View>
                <Text style={[Raleway, TextBlack, { fontSize: 25 }]}>Group 8</Text>
            </View>
            <View>
                <Text style={[Raleway, TextBlack, { fontSize: 19 }]}>Tenant Fin<Text style={[TextPurple]}>der and Com</Text>munication</Text>
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
