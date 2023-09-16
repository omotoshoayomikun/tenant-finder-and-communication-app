import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Input } from "../../components/Forms/Input"
import GlobalStyle from "../../utils/GlobalStyle"
import { BackBtn, Btn } from "../../components/Forms/Btn"
const { White, mb_20, mt_10, flex1, mt_50, textRight, red, headerText, textCenter, relative, px, flex_row, TextPurple } = GlobalStyle;

function Login({ navigation }) {


    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    const onChangeText = (e, name) => {
        setValue({...value, [name]: e})
    }

    const handleLogin = () => {
        navigation.navigate('LayoutTabScreen')
    }

    return (
        <ScrollView style={[flex1, relative]}>
            <Image
                style={styles.img}
                source={require('../../../assets/imgs/welcome1.jpg')}
            />
            <View style={[flex1, px, styles.box_login]}>
                <Text style={[headerText, textCenter, mb_20]}>Login</Text>
                <Input placeholder='Email' name='email' onChangeText={onChangeText} />
                <Input placeholder='Password' name='password' secure={true} onChangeText={onChangeText} />
                <View>
                    <Text style={[styles.txt_forget, textRight]} onPress={() => navigation.navigate('ForgetPass')}>Forget Password ?</Text>
                </View>
                <View style={[mt_50]}>
                    <Btn text='Login' handlePress={handleLogin} />
                </View>
                <View style={[flex_row, mt_10, { justifyContent: 'center' }]}>
                    <Text style={[styles.txt_acc]}>Don't have an account? </Text>
                    <Text style={[styles.txt_acc2, TextPurple]} onPress={() => navigation.navigate('Register')}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    txt1: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Montserrat',
        marginBottom: 30,
        fontWeight: '600'
    },
    txt_forget: {
        color: red,
        fontSize: 13,
        fontFamily: 'Montserrat'
    },
    img_logo: {
        width: '100%',
        height: 200,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#009'
    },
    img: {
        position: 'absolute',
        top: -50,
        left: 0,
        width: '100%',
        height: 250,
        objectFit: 'cover',
        backgroundColor: 'red'
    },
    box_login: {
        backgroundColor: White,
        marginTop: 170,
        borderTopLeftRadius: 50,
    },
    txt_acc: {},
    txt_acc2: {},
})

export default Login
