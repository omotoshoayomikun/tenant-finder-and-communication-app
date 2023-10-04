import React, { useState, useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Alert, KeyboardAvoidingView, TextInput } from "react-native"
import { Input } from "../../components/Forms/Input"
import GlobalStyle from "../../utils/GlobalStyle"
import { Btn } from "../../components/Forms/Btn"
import { Links } from '../../utils/url'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { UserType } from '../../userContext'
const { White, mb_20, flex1, mt_50, red, headerText, textCenter, relative, px, flex_row, TextPurple } = GlobalStyle;

function Login({ navigation }) {
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState('')
    const [secure, setSecure] = useState(true)
    const { } = useContext(UserType)
    const [value, setValue] = useState({
        email: '',
        password: '',
    })

    const Inputs = [
        {
            id: 1,
            name: 'email',
            placeholder: 'Email',
        },
        {
            id: 2,
            name: 'password',
            placeholder: 'Password',
        },
    ]

    // useEffect(() => {
    //     const checkLoginStatus = async() => {
    //         try {
    //             const token = await AsyncStorage.getItem('authToken')
    //             if (token) {
    //                 navigation.replace('LayoutTabScreen')
    //             } else {

    //             }
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }

    //     checkLoginStatus()
    // }, [])

    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e.trim() })
    }

    const handleEyeclose = () => {
        setSecure(!secure)
    }

    const handleLogin = () => {
        setLoading(true)

        axios.post(`${Links.baseUrl}/login`, value).then((response) => {
            const token = response.data.token;

            AsyncStorage.setItem("authToken", token);

            setLoading(false)
            navigation.navigate('LayoutTabScreen')
        }).catch((err) => {
            setLoading(false)
            Alert.alert('Error', `${err.message}`, [
                { text: 'OK' }
            ])
        })

        // navigation.navigate('LayoutTabScreen')
    }

    return (
        <ScrollView
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={[flex1]}>
            <Image
                style={styles.img}
                source={require('../../../assets/imgs/welcome1.jpg')}
            />
            <View style={[flex1, px, styles.box_login]}>
                <Text style={[headerText, textCenter, mb_20]}>Login</Text>
                <Input placeholder='Email' name='email' value={value.email} onChangeText={onChangeText} />
                <Input placeholder='Password' name='password' value={value.password} secure={secure} onChangeText={onChangeText} />
                <View style={[mt_50]}>
                    <Btn text='Login' handlePress={handleLogin} loading={loading} />
                </View>
                <View style={[flex_row, { justifyContent: 'center', marginTop: 20, }]}>
                    <Text style={[styles.txt_acc]}>Don't have an account? </Text>
                    <Pressable
                        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                        onPress={() => navigation.navigate('Register')}

                    >
                        <Text style={[styles.txt_acc2, TextPurple]} >Sign Up</Text>
                    </Pressable>
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
