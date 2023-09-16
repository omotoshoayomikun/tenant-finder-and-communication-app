import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle'
import { BoxCard, Card } from '../Forms/Card'
import { useNavigation } from '@react-navigation/native';

export default function ListOfHouseToRent() {

    const navigation = useNavigation()

    const { flex_row, justify_between, absolute, justify_center, item_center } = GlobalStyle

    const data = [
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },
        {
            price: '200',
            image: '',
            avatar: '',
            name: '',
            bedroom: '',
            bath: ''
        },

    ]

    const handlePressed = () => {
        navigation.navigate('EditHouseToRent')
    }

    return (
        <View>
            <View style={[flex_row, justify_between, { flexWrap: 'wrap', gap: 5 }]}>
                {
                    data.map((item, i) => (
                        <BoxCard key={i} handlePressed={handlePressed} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})
