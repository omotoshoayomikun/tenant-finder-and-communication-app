import React, { useState } from 'react'
import { Text, View, StyleSheet } from "react-native"
import { BackBtn, Btn } from "../../../components/Forms/Btn"
import GlobalStyle from "../../../utils/GlobalStyle"
import { Input } from '../../../components/Forms/Input'
import Model from '../../../components/Forms/Model'

const { container, mt_40, mb_10, flex1, headerText, mb_20, mb_30 } = GlobalStyle
function PasswordSet({ navigation }) {

    const [value, setValue] = useState({})

    const [modelDisplay, setModelDisplay] = useState(false)

    const Inputs = [
        {
            id: 1,
            placeholder: 'password',
            secure: true
        },
        {
            id: 2,
            placeholder: 'comfirm password',
            secure: true
        },
    ]

    const handleContinue = () => {
        setModelDisplay(true)
    }



    return (
        <View style={[container,]}>
            <View style={[mb_30]}>
                <BackBtn handlePress={() => navigation.goBack()} />
            </View>
            <View style={[flex1]}>
                <View style={[mb_20]}>
                    <Text style={[headerText]}>Set your</Text>
                    <Text style={[headerText]}>password</Text>
                </View>
                {
                    Inputs.map((input) => (
                        <View key={input.id} style={[mb_10]}>
                            <Input placeholder={input.placeholder} secure={input.secure} />
                        </View>
                    ))
                }
            </View>
            <View style={[mt_40]}>
                <Btn text='Finish Setup' handlePress={handleContinue} />
            </View>
            {
                modelDisplay && (
                    <Model visible={modelDisplay} handlePressLogin={() => navigation.navigate('Login')} />
                )
            }
        </View>
    )
}

export default PasswordSet
