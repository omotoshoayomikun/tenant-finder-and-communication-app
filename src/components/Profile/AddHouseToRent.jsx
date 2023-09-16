import React, { useState } from 'react'
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { LineInput } from '../Forms/Input';
import GlobalStyle from '../../utils/GlobalStyle';
import { Btn } from '../Forms/Btn';

const { container, flex1, Roboto, Raleway, flex_row, ml_10, gap10, mt_20, mb_30, mt_10, mb_10, justify_center, item_center, absolute } = GlobalStyle;
export default function AddHouseToRent() {
    const [value, setValue] = useState({
        price: '',
        title: '',
        location: '',
        description: '',
        bedrooms: '',
        toilet: '',
        window: '',

    })

    const Inputs = [
        {
            id: 1,
            name: 'price',
            placeholder: 'Price',
            keyboard: 'numeric'
        },
        {
            id: 2,
            name: '',
            placeholder: 'title',
        },
        {
            id: 3,
            name: 'location',
            placeholder: 'Location',
        },
        {
            id: 4,
            name: 'description',
            placeholder: 'Description',
        },
        {
            id: 5,
            name: 'bedroom',
            placeholder: 'Bedrooms',
            keyboard: 'numeric'
        },
        {
            id: 6,
            name: 'toilet',
            placeholder: 'Toilet',
            keyboard: 'numeric'
        },
        {
            id: 7,
            name: 'window',
            placeholder: 'Windows',
            keyboard: 'numeric'
        },
    ]


    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }
    return (
        <View style={[flex1,]}>
            <ScrollView>
                <View style={[{ paddingHorizontal: 15, }]}>
                    <View style={[justify_center, item_center, gap10]}>
                        <Image source={require('../../../assets/imgs/welcome1.jpg')} style={[styles.card_avater, ml_10]} />
                        <Text>Edit picture </Text>
                    </View>
                    <View>
                        {
                            Inputs.map((input, i) => (
                                <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                            )).slice(0, 4)
                        }
                    </View>
                    <View style={[flex_row, gap10]}>
                        {
                            Inputs.map((input, i) => (
                                <View style={[flex1]} key={i}>
                                    <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                                </View>
                            )).slice(4)
                        }
                    </View>
                    <View style={[mb_30, mt_10]}>
                        <Btn text='Add' />
                    </View>
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
