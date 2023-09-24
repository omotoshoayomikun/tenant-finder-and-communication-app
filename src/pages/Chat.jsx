import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GlobalStyle from '../utils/GlobalStyle';
import axios from 'axios';
import { Links } from '../utils/url';
import { UserType } from '../userContext';

const { Raleway } = GlobalStyle
export default function Chat() {
    const navigation = useNavigation()
    const { userId } = useContext(UserType)
    const [friends, setFriends] = useState([])
    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                null
            )
        })
    }, [])

    // useEffect(() => {
    //     const fetchFriends = async () => {
    //         try {
    //             const response = await axios.get(`${Links.baseUrl}/friends/${userId}`)
    //             setFriends(response.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchFriends()
    // }, [navigation])

    const handleChat = () => {
        navigation.navigate('ChatMessages', {})
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
