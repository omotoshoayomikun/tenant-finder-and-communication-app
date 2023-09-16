import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"
import { Input, SelectDropdown } from "../../../components/Forms/Input"
import GlobalStyle from "../../../utils/GlobalStyle"
import { BackBtn, Btn } from "../../../components/Forms/Btn"
const { White, mb_20, mt_10, flex1, mt_30, textRight, red, headerText, textCenter, relative, px, flex_row, TextPurple } = GlobalStyle;

function Register({ navigation }) {


    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        gender: 'Select Gender',
        state: 'Select State',
        category: 'Select Category',
        password: '',
        confirmPassword: ''

    })

    const Inputs = [
        {
            id: 1,
            name: 'firstName',
            placeholder: 'First Name',
        },
        {
            id: 2,
            name: 'lastName',
            placeholder: 'Last Name',
        },
        {
            id: 3,
            name: 'phone',
            placeholder: 'Phone Number',
        },
        {
            id: 4,
            name: 'email',
            placeholder: 'Email',
        },
        {
            id: 5,
            name: 'gender',
            placeholder: 'Select Gender',
            data: [
                { index: '1', label: 'Male' },
                { index: '2', label: 'Female' },
                { index: '3', label: 'Others' },
            ]
        },
        {
            id: 6,
            name: 'state',
            placeholder: 'Select State',
            data: [
                { index: '1', label: 'Kwara' },
                { index: '2', label: 'Lagos' },
                { index: '3', label: 'Oyo' },
            ]
        },
        {
            id: 7,
            name: 'category',
            placeholder: 'Select Category',
            data: [
                { index: '1', label: 'Landlord' },
                { index: '2', label: 'Tenant' },
            ]
        },
        {
            id: 7,
            name: 'password',
            placeholder: 'password',
            secure: true,
        },
        {
            id: 7,
            name: 'confirmPassword',
            placeholder: 'confirm password',
            secure: true,
        }
    ]

    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }

    const handleSelect = (e, name) => {
        setValue({ ...value, [name]: e })
    }


    const handleLogin = () => {

        // if()

        navigation.navigate('LayoutTabScreen')
    }



    return (
        <ScrollView style={[flex1, relative]}>
            <Image
                style={styles.img}
                source={require('../../../../assets/imgs/welcome1.jpg')}
            />
            <View style={[flex1, px, styles.box_login]}>
                <Text style={[headerText, textCenter, mb_20]}>Register</Text>
                {
                    Inputs.map((input, i) => (
                        <View key={i}>
                            <Input {...input} value={value[input.name]} onChangeText={onChangeText} />
                        </View>
                    )).slice(0, 4)
                }
                {
                    Inputs.map((input, i) => (
                        <View key={i}>
                            <SelectDropdown
                                {...input}
                                value={value[input.name]}
                                onChange={handleSelect}
                            />
                        </View>
                    )).slice(4, 7)
                }
                {
                    Inputs.map((input, i) => (
                        <View key={i}>
                            <Input {...input} value={value[input.name]} onChangeText={onChangeText} />
                        </View>
                    )).slice(7, 9)
                }
                <View style={[mt_30]}>
                    <Btn text='Register' handlePress={handleLogin} />
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

export default Register
