import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export const EmptyList = () => {
    return (
        <View>
            <Image source={require('../../../assets/imgs/empty-list.jpg')} style={styles.empty_img} />
            <Text style={styles.empty_txt}>Nothing to show yet</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    empty_img: {
        width: 180,
        height: 180,
    },

    empty_txt: {
        textAlign: 'center',
        fontSize: 18,
        color: '#0F0F0F',
    }
})