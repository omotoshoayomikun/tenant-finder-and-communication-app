import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Alert, View, FlatList, ActivityIndicator, RefreshControl, ScrollView } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { Card } from '../components/Forms/Card'
import { UserType } from '../userContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Links } from '../utils/url'
import { EmptyList } from '../components/Forms/EmptyList'

function Home({ navigation }) {

    const { userId, setUserId } = useContext(UserType)
    const [pageLoading, setPageLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchToken = async () => {
            const token = await AsyncStorage.getItem("authToken")
            const decodeToken = jwtDecode(token);
            const userId = decodeToken.userId
            setUserId(userId)
        }
        fetchToken()
    }, [])

    useEffect(() => {
        const fetchHouses = async () => {
            try {
                const response = await axios.get(`${Links.baseUrl}/housetorent`)
                setData(response.data)
                setPageLoading(false)
            } catch (err) {
                setPageLoading(false)
                Alert.alert('Error', 'Check your network connection', [
                    { text: 'OK' }
                ])
            }
        }
        fetchHouses()
    }, [navigation])

    const handleRefresh = async () => {
        setRefreshing(true)
        try {
            const response = await axios.get(`${Links.baseUrl}/housetorent`)
            setData(response.data)
            setRefreshing(false)
        } catch (err) {
            setRefreshing(false)
            Alert.alert('Error', 'Check your network connection', [
                { text: 'OK' }
            ])
        }
    }


    const [showDetails, setShowDetails] = useState(false)



    const { flex1, justify_center, item_center } = GlobalStyle

    const handleHouseDetail = (houseId) => {
        navigation.navigate('HouseDetails', { houseId })
        // setShowDetails(true)
    }

    const handleChat = async (receiverId) => {
        // console.log(receiverId)
        // const senderId = userId
        // try {
            // const response = await axios.get(`${Links.baseUrl}/check-friend/${senderId}/${receiverId}`)
            navigation.navigate('ChatStackScreen', { secreen: 'ChatMessages' })
        // } catch (err) {
            // Alert.alert('Error', 'Check your internet connection', [
                // { text: 'OK' }
            // ])
            // console.log(err)
        // }
    }

    if (pageLoading) {
        return (
            <View style={[flex1, item_center, justify_center]}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    return (
        <View style={[flex1, {}]}>
            {
                data.length > 0 ? (
                    <FlatList
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                        }
                        data={data}
                        renderItem={(item) => (
                            <Card {...item} handleShow={handleHouseDetail} handleChat={handleChat} />
                        )}
                        keyExtractor={(item, i) => i}
                    />
                ) : (
                    <ScrollView
                        refreshControl={
                            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
                        }
                        style={[flex1, { backgroundColor: '#ffffff' }]}
                    >
                        <View style={[flex1, justify_center, item_center]}>
                        <EmptyList />
                        </View>
                    </ScrollView>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    topBg: {
        width: '100%',
        height: 190,
        backgroundColor: '#701a75',
        position: 'absolute',
        top: 0,
    },
    cvd: {
        gap: 10,
        // padding: 15,
        paddingLeft: 15,
        paddingRight: 15,
        // rowGap: 10,
    }
})

export default Home
