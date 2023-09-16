import React from 'react'
import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GlobalStyle from '../utils/GlobalStyle'


const { flex_row, justify_between, mb_10, mt_10, item_center, Raleway, Roboto, padding_20, flex1, mt_20, gap10, mb_30 } = GlobalStyle

function HouseDetails() {
    return (
        <View style={styles.centered_view}>
            <ScrollView style={[styles.view_log]}>
                <View style={{ padding: 20, paddingLeft: 0, }}>
                    <Text style={[{ fontSize: 24 }, Roboto]}>House Detail</Text>
                </View>
                <View>
                    <Image source={require('../../assets/imgs/welcome1.jpg')} style={styles.detail_image} />
                </View>
                <View style={[]}>
                    <View style={[flex_row, justify_between, mb_10, mt_10, item_center]}>
                        {/* <Text style={[Raleway, { fontSize: 17 }]}>Modern Apartment</Text> */}
                        <Text style={[Raleway, { fontSize: 17 }]}>₦100,000</Text>
                        <FontAwesome name='bookmark-o' size={17} />
                    </View>
                    <View style={[flex_row, mb_10, { alignItems: 'baseline' }]}>
                        <Text style={[{ fontSize: 17 }]}>Title: </Text>
                        <Text style={[{ fontSize: 13, fontWeight: '400' }]}>
                            Beautiful 3-Bedroom House
                        </Text>
                    </View>
                    <View style={[flex_row, justify_between, mt_10, mb_10]}>
                        <View style={[styles.bor_righ, flex1]}>
                            <View style={[flex_row]}>
                                <Text style={[{ fontSize: 20 }]}>3</Text>
                                <Ionicons name='bed-outline' size={25} />
                            </View>
                            <Text style={[Raleway, { fontSize: 12 }]}>Bedrooms</Text>
                        </View>
                        <View style={[styles.bor_righ, flex1, { alignItems: 'center' }]}>
                            <View style={[flex_row]}>
                                <Text style={[{ fontSize: 20 }]}>3</Text>
                                <MaterialCommunityIcons name='toilet' size={25} />
                            </View>
                            <Text style={[Raleway, { fontSize: 12 }]}>Toilet</Text>
                        </View>
                        <View style={[flex1, { alignItems: 'flex-end' }]}>
                            <View style={[flex_row]}>
                                <Text style={[{ fontSize: 20 }]}>3</Text>
                                <MaterialIcons name='window' size={25} />
                            </View>
                            <Text style={[Raleway, { fontSize: 12 }]}>Windows</Text>
                        </View>
                    </View>
                    <View style={[flex_row, mt_10, mb_10]}>
                        <Ionicons name='location-outline' size={20} />
                        <Text style={[{ fontSize: 13, fontWeight: '400' }]}>Ibeju Lekki phase one off </Text>
                    </View>
                    <View>
                        <Text style={[{ fontSize: 17 }]}>Description:</Text>
                        <Text style={[{ fontSize: 12 }]}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur saepe nemo aliquam repudiandae ipsam mollitia!
                        </Text>
                    </View>
                    <View style={[flex_row, gap10, mt_20, mb_30, {paddingRight: 8}]}>
                        <TouchableOpacity style={styles.btn_view}>
                            <AntDesign name='message1' size={20} />
                            <Text style={[{ fontSize: 6 }]}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btn_view, flex_row]}>
                            <FontAwesome name='cc-mastercard' size={20} />
                            <Text style={[Raleway, { fontSize: 15 }]}>Pay</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    centered_view: {
        flex: 1,
        backgroundColor: '#ffffff',
        // justifyContent: 'center',
        // alignItems: 'center',
        // padding: 15,
        // paddingTop: 20,
        // paddingBottom: 20,
    },
    view_log: {
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        // paddingBottom: 25,
        // width: '90%',
        // height: '90%',
        // borderRadius: 20,
    },
    detail_image: {
        width: '100%',
        height: 250,
    },
    bor_righ: {
        borderRightWidth: 2,
        borderRightColor: '#e5e7eb',
        paddingRight: 10,
        marginRight: 10,
    },

    btn_view: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#9ca3af',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 9
    }
})

export default HouseDetails
