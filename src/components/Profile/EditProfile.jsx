import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LineInput } from '../Forms/Input';
import GlobalStyle from '../../utils/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function EditProfile() {
    const navigation = useNavigation();
    const { container, flex1, Roboto, Raleway, flex_row, ml_10, gap10, mt_20, mb_30, mt_10, mb_10, justify_center, item_center, absolute } = GlobalStyle


    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',

    })

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                    style={{ marginRight: 15 }}
                >
                    <Ionicons name='checkmark-sharp' color='#1e3a8a' size={26} />
                </TouchableOpacity>
            )
        })
    }, [])


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
            keyboard: 'phone-pad',
        },
        {
            id: 7,
            name: 'password',
            placeholder: 'password',
            secure: true,
        },
    ]

    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }

console.log(value)

    return (
        <View style={[flex1,]}>
            <ScrollView style={ { paddingHorizontal: 15, }}>
                <View style={[justify_center, item_center, gap10, mb_30, mt_20]}>
                    <Image source={require('../../../assets/imgs/welcome1.jpg')} style={[styles.card_avater, ml_10]} />
                    <Text style={[{ color: '#1e3a8a' }]}>Edit picture </Text>
                </View>
                <View>
                    {
                        Inputs.map((input) => (
                            <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    card_avater: {
        width: 85,
        height: 85,
        borderRadius: 50,
    },
})
