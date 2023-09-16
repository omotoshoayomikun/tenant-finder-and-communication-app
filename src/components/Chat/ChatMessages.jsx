import React from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalStyle from '../../utils/GlobalStyle';

export default function ChatMessages() {
    const { flex1, flex_row, item_center } = GlobalStyle
    return (
        <View style={[flex1, { backgroundColor: '#F0F0F0' }]}>
            <ScrollView></ScrollView>
            <View style={[flex_row, item_center, { padding: 10, borderTopWidth: 1, borderTopColor: '#dddddd', }]}>
                <Entypo name='emoji-happy' color='grey' size={24} style={{marginRight: 5}} />
                <TextInput style={styles.input} placeholder='Type your message ...' />
                <Entypo name='camera' color='grey' size={24} style={{marginHorizontal: 8}} />
                <Pressable
                style={[styles.send_btn]}
                >
                    <Text style={{color: 'white', fontWeight: 'bold'}}>Send</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#dddddd',
        borderRadius: 20,
        paddingHorizontal: 10,

    },
    send_btn: {
        backgroundColor: '#007bff',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 20,
    }
})