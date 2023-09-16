import { Pressable, View, Text, StyleSheet } from 'react-native'
import GlobalStyle from '../../utils/GlobalStyle'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const { TextPurple, LightPurple, Purple, LLightPurple } = GlobalStyle

export const Btn = (props) => {

    return (
        <Pressable
            onPress={props.handlePress}
            style={({ pressed }) => [
                { backgroundColor: pressed ? LightPurple : Purple, borderWidth: 2, borderColor: pressed ? LightPurple : Purple, }, styles.btn
            ]}
        >
            <Text style={[styles.text, GlobalStyle.TextWhite]}>{props.text}</Text>
        </Pressable>
    )
}
export const OutBtn = (props) => {
    return (
        // <View style={styles.container}>
        <Pressable
            onPress={props.handlePress}
            style={({ pressed }) => [
                { backgroundColor: pressed ? LLightPurple : '#ffffff', borderWidth: 2, borderColor: Purple},
                styles.btn
            ]}
        >
            <Text style={[styles.text, TextPurple]}>{props.text}</Text>
        </Pressable>
        // </View>
    )
}

export const BackBtn = (props) => {
    return (
        <Pressable
            onPress={props.handlePress}
            style={({ pressed }) => [
                { backgroundColor: pressed ? LightPurple : Purple, borderWidth: 2, borderColor: pressed ? LightPurple : Purple, }, styles.bbtn
            ]}
        >
            <Text style={[styles.text, GlobalStyle.TextWhite]}>
                <FontAwesome5 name={'angle-left'} color='#fff' size={25} />
            </Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    btn: {
        padding: 13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 17,
        fontFamily: 'Raleway',
    },
    bbtn: {
        backgroundColor: Purple,
        width: 45,
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40,
    },
})