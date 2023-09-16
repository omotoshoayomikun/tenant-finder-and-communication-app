import React from 'react'
import { Image, Modal, StyleSheet, Text, View } from 'react-native'
import GlobalStyle from '../../utils/GlobalStyle'
import { Btn } from './Btn'


const { container, mt_40, mb_10, flex1, item_center, justify_center, headerText, mb_20 } = GlobalStyle

export default function Model({ navigation, handlePressLogin, visible }, props) {
    return (
        <Modal
        visible={visible}
        >
            <View style={[container]}>
                <View style={[flex1, justify_center, item_center]}>
                    <View style={[mb_20]}>
                        <Image source={require('../../../assets/imgs/check_icon.png')} />
                    </View>
                    <Text style={[headerText]}>Congratulation!</Text>
                    <Text style={[headerText]}>Your account has been created successfully.</Text>
                </View>
                <View style={[flex1, { justifyContent: 'flex-end' }]}>
                    <Btn text='Take me to Login' handlePress={handlePressLogin} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({

})
