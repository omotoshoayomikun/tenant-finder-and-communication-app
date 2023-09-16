import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'

function Setting() {

    const { container } = GlobalStyle

    return (
        <View style={[container]}>
            <View>
                <Text>Setting</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})

export default Setting
