import React, { useState, useEffect, useContext } from 'react'
import { StyleSheet, Alert, View, FlatList, Modal } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { Card } from '../components/Forms/Card'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import HouseDetails from './HouseDetails'
import { UserType } from '../userContext'
import AsyncStorage from '@react-native-async-storage/async-storage'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Links } from '../utils/url'

function Home({ navigation }) {

    const { userId, setUserId } = useContext(UserType)
    const [pageLoading, setPageLoading] = useState(true)
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
                console.log(err)
            }

        }
        fetchHouses()
    }, [navigation])


    const [showDetails, setShowDetails] = useState(false)



    const { flex1, relative, headerText, White, mb_20, padding_20, justify_between, fz16, mr_10, flex_row, mb_10 } = GlobalStyle

    const handleHouseDetail = (houseId) => {
        navigation.navigate('HouseDetails', {houseId})
        // setShowDetails(true)
    }

    if(pageLoading) {
        return (
            <View></View>
        )
    }

    return (
        <View style={[flex1, {}]}>
            <FlatList
                data={data}
                renderItem={(item) => (
                    <Card {...item} handleShow={handleHouseDetail} />
                )}
                keyExtractor={(item, i) => i}
            />
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
