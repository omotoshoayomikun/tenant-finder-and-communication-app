import React from 'react'
import { View, StyleSheet, Text, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../../utils/GlobalStyle'
import { BoxCard, Card } from '../Forms/Card'

export default function Bookmark() {
    const { flex_row, justify_between, absolute, justify_center, item_center } = GlobalStyle

    return (
        <View>
            {/* <View style={[flex_row, justify_between, { flexWrap: 'wrap', gap: 2 }]}>
                {
                    data.map((item, i) => (
                        <BoxCard key={i} {...item}  />
                    ))
                }
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({

})
