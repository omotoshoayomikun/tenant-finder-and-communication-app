import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import GlobalStyle from '../../utils/GlobalStyle';
import EmojiSelector from 'react-native-emoji-selector';

const { flex1, flex_row, item_center } = GlobalStyle
export default function ChatMessages() {
    const [showEmoji, setShowEmoji] = useState(false)
    const [message, setMessage] = useState('')
    const handleEmojiPress = () => {
        setShowEmoji(!showEmoji)
    }


    return (
        <View style={[flex1, { backgroundColor: '#F0F0F0' }]}>
            <ScrollView></ScrollView>
            <View style={[flex_row, item_center, { padding: 10, borderTopWidth: 1, borderTopColor: '#dddddd', }]}>
                <Entypo name='emoji-happy' color='grey' size={24} style={{ marginRight: 5 }}  onPress={handleEmojiPress} />
                <TextInput value={message} onChangeText={(value) => setMessage(value)} style={styles.input} placeholder='Type your message ...' />
                <Pressable style={{ marginHorizontal: 8 }} onPress={handleEmojiPress} >
                    <Entypo name='camera' color='grey' size={24} />
                </Pressable>
                <Pressable
                    style={[styles.send_btn]}
                >
                    <Text style={{ color: 'white', fontWeight: 'bold' }}>Send</Text>
                </Pressable>
            </View>
            {
                showEmoji && (
                    <EmojiSelector style={{ height: 250 }} onEmojiSelected={(emoji) => setMessage(previous => previous + emoji)} />
                )
            }
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