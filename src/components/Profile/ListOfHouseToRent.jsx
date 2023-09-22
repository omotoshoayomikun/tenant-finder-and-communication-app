import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import GlobalStyle from '../../utils/GlobalStyle'
import { BoxCard, Card } from '../Forms/Card'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { Links } from '../../utils/url';
import { UserType } from '../../userContext';

const { flex_row, justify_between, absolute, justify_center, item_center } = GlobalStyle
export default function ListOfHouseToRent() {
    const navigation = useNavigation()
    const { userId } = useContext(UserType)
    const [house, setHouse ] = useState([])

    useEffect(() => {
        const fetchListOfHouse = async () => {
            try {
                const response = await axios.get(`${Links.baseUrl}/listofhousetoresnt/${userId}`)
                setHouse(response.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchListOfHouse()
    })

    const handlePressed = (houseId) => {
        navigation.navigate('EditHouseToRent', {
            houseId
        })
    }

    return (
        <View>
            <View style={[flex_row, { flexWrap: 'wrap', gap: 2 }]}>
                {
                    house.map((item, i) => (
                        <BoxCard key={i} {...item} handlePressed={handlePressed} />
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})
