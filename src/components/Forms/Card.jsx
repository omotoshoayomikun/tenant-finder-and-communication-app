import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from '../../utils/GlobalStyle';

const { flex_row, flex1, justify_between, Roboto, item_center, ml_10, mb_10, mt_10, mt_20, Raleway, gap10, relative, absolute } = GlobalStyle

export const Card = ({ handleShow }) => {

    return (
        <View style={styles.card}>
            <View style={[flex_row, styles.card_hed]}>
                <Image source={require('../../../assets/imgs/welcome1.jpg')} style={styles.card_avater} />
                <View style={[ml_10,]}>
                    <Text style={[Roboto, { fontSize: 15, fontWeight: '600' }]}>Omotosho Ayomikun</Text>
                    <Text style={[Raleway, { fontSize: 12, fontStyle: 'italic' }]}>Lagos</Text>
                </View>
            </View>
            <View>
                <Image source={require('../../../assets/imgs/welcome1.jpg')} style={styles.card_image} />
            </View>
            <View style={[flex_row, justify_between, mb_10, mt_10, item_center]}>
                {/* <Text style={[Raleway, { fontSize: 17 }]}>Modern Apartment</Text> */}
                <Text style={[Raleway, { fontSize: 17 }]}>₦100,000</Text>
                <FontAwesome name='bookmark-o' size={17} />
            </View>
            <View style={[flex_row, justify_between, mt_10]}>
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
            <View style={[flex_row, mt_10]}>
                <Ionicons name='location-outline' size={20} />
                <Text style={[Raleway, { fontSize: 12 }]}>Ibeju Lekki phase one off </Text>
            </View>
            <View style={[flex_row, gap10, mt_20, mb_10]}>
                <TouchableOpacity
                    onPress={handleShow}
                    style={styles.btn_view}
                >
                    <Text style={[Raleway, { fontSize: 15 }]}>View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn_view}>
                    <AntDesign name='message1' size={20} />
                    <Text style={[{ fontSize: 6 }]}>Chat</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export const BoxCard = (props) => {

    return (
        <Pressable key={props.i} style={[styles.border_box, relative]} onPress={props.handlePressed}>
            <Image source={require('../../../assets/imgs/welcome1.jpg')} style={styles.box_img} />
            <View style={styles.vic_icon}>
                <Text>
                    <Ionicons name='images' size={20} />
                </Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 5,
        // borderRadius: 20,
        // shadowColor: '#555',
        // shadowOffset: { width: 2, height: 2 },
        // shadowOpacity: 0.3,
        // shadowRadius: 4,
        // elevation: 5,
        fontFamily: 'Montserrat',
        width: 'auto',
        flex: 1,
        padding: 15,
        marginBottom: 7,
        // borderWidth: 0.5,
        // borderColor: '#d1d5db',
    },
    card_avater: {
        width: 40,
        height: 40,
        borderRadius: 50,
    },
    card_image: {
        width: '100%',
        height: 150,
        marginTop: 15,
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        // borderRadius: 50,
    },
    bor_righ: {
        borderRightWidth: 2,
        borderRightColor: '#e5e7eb',
        paddingRight: 10,
        marginRight: 10,
    },
    card_hed: {
        // borderWidth: 0.5,
        // paddingTop: 9,
        // paddingBottom: 9,
        // borderTopLeftRadius: 10,
        // borderTopRightRadius: 10,
        // paddingLeft: 12,
        // borderColor: '#d1d5db'
    },
    border_box: {
        width: '32%',
        height: 100,
    },
    box_img: {
        width: '100%',
        height: '100%',
    },
    vic_icon: {
        position: 'absolute',
        right: 5
    },
    text_help1: {
        fontSize: 18,
        // fontFamily: 'Montserrat',
        // fontWeight: '900'
    },
    text_help2: {
        fontSize: 12,
        fontFamily: 'RaleWay',
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