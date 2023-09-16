import React, { useState } from 'react'
import { StyleSheet, ScrollView, Image, Text, View, FlatList, Modal } from 'react-native'
import GlobalStyle from '../utils/GlobalStyle'
import { Card } from '../components/Forms/Card'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import HouseDetails from './HouseDetails'

function Home() {

    const [showDetails, setShowDetails] = useState(false)


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
    ]

    const { flex1, relative, headerText, White, mb_20, padding_20, justify_between, fz16, mr_10, flex_row, mb_10 } = GlobalStyle

    const handleHouseDetail = () => {
        setShowDetails(true)
    }

    return (
        <View style={[flex1, { }]}>
            <FlatList
                // numColumns={2}
                // columnWrapperStyle={styles.cvd}
                data={data}
                renderItem={(item) => (
                    <Card handleShow={handleHouseDetail} />
                )}
                keyExtractor={(item, i) => i}
            />
            <Modal
                transparent
                visible={showDetails}
                onRequestClose={() => setShowDetails(false)}
            >
                <HouseDetails />
            </Modal>
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
