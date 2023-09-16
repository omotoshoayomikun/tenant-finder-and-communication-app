import React, { useLayoutEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../utils/GlobalStyle';

export default function Chat() {
    const { Raleway } = GlobalStyle
    
    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                null
            )
        })
    }, [])

    const handleChat = () => {
        navigation.navigate('ChatMessages')
    }

    return (
        <View>
            <ScrollView>
                <Pressable style={[styles.chat_box]} onPress={handleChat}>
                    <Image
                        style={{ width: 50, height: 50, borderRadius: 25, resizeMode: 'cover' }}
                        source={require('../../assets/imgs/welcome1.jpg')}
                    />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: '500', fontSize: 15, }}>Ayomikun</Text>
                        <Text style={[{ fontWeight: '500', color: 'grey', marginTop: 5 }, Raleway]}>last message comes here</Text>
                    </View>
                    <View>
                        <Text style={[{ fontWeight: '400', color: '#585858', fontSize: 11, }]}>3:00pm</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    chat_box: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderBottomWidth: 0.7,
        borderColor: '#D0D0D0',
        padding: 10,
    }
})
