import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyle from "../../utils/GlobalStyle"
import { BackBtn } from '../../components/Forms/Btn'

function ForgetPass({ navigation }) {
    const { container } = GlobalStyle

    return (
        <View style={[container]}>
            <View>
                <BackBtn handlePress={() => navigation.goBack()} />
            </View>
            <Text>Forget Password</Text>
        </View>
    )
}

export default ForgetPass
