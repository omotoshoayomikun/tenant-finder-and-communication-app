import React, { useState, useRef, useContext } from 'react'
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Pressable, Alert, ToastAndroid } from 'react-native';
import { LineInput } from '../Forms/Input';
import GlobalStyle from '../../utils/GlobalStyle';
import { Btn } from '../Forms/Btn';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { launchImageLibrary } from 'react-native-image-picker'
import axios from 'axios';
import { Links } from '../../utils/url';
import { UserType } from '../../userContext';

const { flex1, flex_row, gap10, mb_30, mb_20, mt_10, relative } = GlobalStyle;
export default function AddHouseToRent({ navigation }) {

    const { userId } = useContext(UserType)

    const [value, setValue] = useState({
        price: null,
        title: '',
        location: '',
        description: '',
        state: '',
        bedroom: null,
        toilet: null,
        square: null,
        images: [],
        userId: userId
    })

    const Inputs = [
        {
            id: 2,
            name: 'title',
            placeholder: 'title',
        },
        {
            id: 4,
            name: 'description',
            placeholder: 'Description',
        },
        {
            id: 10,
            name: 'state',
            placeholder: 'State',
        },
        {
            id: 3,
            name: 'location',
            placeholder: 'Location',
        },
        {
            id: 1,
            name: 'price',
            placeholder: 'Price',
            keyboard: 'numeric'
        },
        {
            id: 5,
            name: 'bedroom',
            placeholder: 'Bedrooms',
            keyboard: 'numeric'
        },
        {
            id: 6,
            name: 'toilet',
            placeholder: 'Toilet',
            keyboard: 'numeric'
        },
        {
            id: 7,
            name: 'square',
            placeholder: 'Square Ft',
            keyboard: 'numeric'
        },
    ]

    const [loading, setLoading] = useState(false)


    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }

    const handlePhotos = () => {
        const option = {
            selectionLimit: 5,
            mediaType: 'photo',
            title: 'Select Images',
        }
        launchImageLibrary(option, response => {
            response.assets.map(res => {
                value.images.push(res.uri)
                return setValue({ ...value })
            }
            )
            // value.images.push(response.assets)
            // setValue({ ...value })
            // console.log(value.images)
            // console.log(response.assets)
        })
    }

    const handleDeletePhoto = (fileName) => {
        const photoIndex = value.images.findIndex((photo) => photo.fileName === fileName)
        value.images.splice(photoIndex)
        setValue({ ...value })
    }

    // const getImageMimeType = (uri) => {
    //     const extension = uri.split('.').pop()
    //     console.log(extension)
    // }


    const handleAddHouse = async () => {
        const data = new FormData()
        data.append('title', value.title)
        data.append('price', value.price)
        data.append('location', value.location)
        data.append('description', value.description)
        data.append('bedroom', value.bedroom)
        data.append('toilet', value.toilet)
        data.append('state', value.state)
        data.append('square', value.square)
        data.append('userId', value.userId)
        value.images.forEach((uri, index) => {
            data.append('images', {
                uri,
                type: `image/${uri.split('.').pop()}`,
                name: `image_${index}.${uri.split('.').pop()}`
            })
        })

        setLoading(true)

        try {
            const response = await axios.post(`${Links.baseUrl}/housetorent`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setLoading(false)
            // ToastAndroid.show('House to rent created successfully', ToastAndroid.SHORT)
            setValue({
                price: null,
                title: '',
                location: '',
                description: '',
                state: '',
                bedroom: null,
                toilet: null,
                square: null,
                images: [],
                userId: userId,
            })
            Alert.alert('Success', 'House created successfully', [
                {text: 'OK'}
            ])
            // navigation.replace('Profile')
        } catch (err) {
            setLoading(false)
            console.log(err.message)
            Alert.alert('Error', `${err.message}`, [
                { text: 'OK' }
            ])
        }
    }

    return (
        <View style={[flex1,]}>
            <ScrollView>
                <View style={[{ paddingHorizontal: 15, marginTop: 30 }]}>
                    <View>
                        {
                            Inputs.map((input, i) => (
                                <View key={i}>
                                    <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                                </View>
                            )).slice(0, 5)
                        }
                    </View>
                    <View style={[flex_row, gap10]}>
                        {
                            Inputs.map((input, i) => (
                                <View style={[flex1]} key={i}>
                                    <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                                </View>
                            )).slice(5)
                        }
                    </View>
                    <Pressable style={[mb_20]} onPress={handlePhotos}>
                        <Text style={{ color: 'blue' }}>Choose Images </Text>
                    </Pressable>
                    <ScrollView horizontal={true}>
                        <View style={[gap10, flex_row, mb_20]}>
                            {
                                value.images.length > 0 && (
                                    value.images.map((uri, i) => (
                                        <View key={i} style={[relative, { height: 85, width: 85 }]}>
                                            <TouchableOpacity style={styles.cancel_btn} onPress={() => handleDeletePhoto(photo.fileName)}>
                                                <MaterialIcons name='cancel' size={22} color='#dc2626' />
                                            </TouchableOpacity>
                                            <Image source={{ uri: uri }} style={[styles.card_avater,]} />
                                        </View>
                                    ))
                                )
                            }
                        </View>
                    </ScrollView>
                    <View style={[mb_30, mt_10]}>
                        <Btn text='Add' handlePress={handleAddHouse} loading={loading} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    card_avater: {
        width: 85,
        height: 85,
        borderRadius: 5,
    },
    cancel_btn: {
        position: 'absolute',

        margin: 'auto',
        top: 2,
        right: 2,
        // backgroundColor: 'red',
        // width: '100%',
        // height: '100%',
        zIndex: 1
    }
})
