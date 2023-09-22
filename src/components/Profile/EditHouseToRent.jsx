import React, { useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { LineInput } from '../Forms/Input';
import GlobalStyle from '../../utils/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Btn } from '../Forms/Btn';
import axios from 'axios';
import { Links } from '../../utils/url';
import Swiper from 'react-native-swiper';
import { launchImageLibrary } from 'react-native-image-picker'




const { container, flex1, Roboto, Raleway, flex_row, ml_10, gap10, mt_20, mb_30, mt_10, mb_10, justify_center, item_center } = GlobalStyle;

export default function EditHouseToRent({ navigation, route }) {
    const { houseId } = route.params;
    const [loading, setLoading] = useState(false)
    const [editable, setEditable] = useState(false)
    const [value, setValue] = useState({
        price: '',
        title: '',
        location: '',
        state: '',
        description: '',
        bedroom: '',
        toilet: '',
        square: '',
        images: []

    })

    const Inputs = [
        {
            id: 1,
            name: 'price',
            placeholder: 'Price',
            keyboard: 'numeric',
            editable: editable
        },
        {
            id: 2,
            name: 'title',
            placeholder: 'Title',
            editable: editable
        },
        {
            id: 10,
            name: 'state',
            placeholder: 'State',
            editable: editable
        },
        {
            id: 3,
            name: 'location',
            placeholder: 'Location',
            editable: editable
        },
        {
            id: 4,
            name: 'description',
            placeholder: 'Description',
            editable: editable
        },
        {
            id: 5,
            name: 'bedroom',
            placeholder: 'Bedrooms',
            keyboard: 'numeric',
            editable: editable
        },
        {
            id: 6,
            name: 'toilet',
            placeholder: 'Toilet',
            keyboard: 'numeric',
            editable: editable
        },
        {
            id: 7,
            name: 'square',
            placeholder: 'Square Ft',
            keyboard: 'numeric',
            editable: editable
        },
    ]

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={[flex_row, gap10]}>
                    <TouchableOpacity
                        style={[{ marginRight: 15, }, item_center]}
                        onPress={() => setEditable(true)}
                    >
                        <Feather name='edit' color='green' size={22} />
                        <Text style={[{ fontSize: 6 }]}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[{ marginRight: 15 }, item_center]}
                        onPress={() => Alert.alert('Warning', 'Are you sure you want to delete this data?', [
                            { text: 'Yes', onPress: handleDelete },
                            { text: 'No' }
                        ])}
                    >
                        <Ionicons name='trash-outline' color='tomato' size={22} />
                        <Text style={[{ fontSize: 6 }]}>Delete</Text>
                    </TouchableOpacity>

                </View>
            )
        })
    }, [])

    useEffect(() => {
        const fetchHouse = async () => {
            setEditable(false)
            try {
                const response = await axios.get(`${Links.baseUrl}/house/${houseId}`)
                const data = response.data
                setValue(
                    {
                        price: `${data.price}`,
                        title: data.title,
                        location: data.location,
                        state: data.state,
                        description: data.description,
                        bedroom: `${data.bedroom}`,
                        toilet: `${data.toilet}`,
                        square: `${data.square}`,
                        images: data.images

                    }
                )

            } catch (err) {
                console.log(err)
            }
        }
        fetchHouse()
    }, [navigation])


    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }


    const handleAddImage = () => {
        const option = {
            mediaType: 'photo',
            title: 'Select Images',
            selectionLimit: 5,
        }
        launchImageLibrary(option, response => {
            response.assets.map(res => {
                value.images.push(res)
                return setValue({ ...value })
            })
        })
    }

    const handleDeleteImage = (image) => {
        const img = value.images.findIndex(img => img == image)
        value.images.splice(img, 1)
        setValue({ ...value })
    }

    const handleUpdate = async () => {
        setLoading(true)
        const data = new FormData()
        data.append('title', value.title)
        data.append('price', value.price)
        data.append('location', value.location)
        data.append('description', value.description)
        data.append('bedroom', value.bedroom)
        data.append('toilet', value.toilet)
        data.append('state', value.state)
        data.append('square', value.square)
        value.images.forEach((img, index) => {
            data.append('images', {
                uri: img.uri,
                type: `image/${img.uri.split('.').pop()}`,
                name: `image_${index}.${img.uri.split('.').pop()}`
            })
        })


        try {
            const response = await axios.put(`${Links.baseUrl}/housetorent/${houseId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            Alert.alert('Success', 'House updated successfully', [
                { text: 'OK' }
            ])
            const updateData = response.data
            setValue({
                price: `${updateData.price}`,
                title: updateData.title,
                location: updateData.location,
                state: updateData.state,
                description: updateData.description,
                bedroom: `${updateData.bedroom}`,
                toilet: `${data.toilet}`,
                square: `${updateData.square}`,
                images: updateData.images
            })
            setLoading(false)
            setEditable(false)
        } catch (err) {
            setLoading(false)
            console.log(err)
        }
        // navigation.goBack()
    }

    const handleDelete = async () => {
        try {
            const response = await axios.delete(`${Links.baseUrl}/housetorent/${houseId}`)
            navigation.replace('Profile')
        } catch (err) {
            Alert.alert('Error', 'Check your internet connection', [
                { text: 'OK' }
            ])
        }
    }



    return (
        <View style={[flex1,]}>
            <ScrollView>
                <View style={[{ paddingBottom: 20 }]}>
                    <View style={[justify_center, item_center, gap10]}>
                        {
                            value.images && (
                                <Swiper style={[styles.wrapper, { height: 250 }]}>
                                    {value.images.map((image, index) => (
                                        <View key={index} style={styles.slide}>
                                            <Image source={{ uri: image.uri }} style={[styles.card_avater]} />
                                            {
                                                editable && (
                                                    <Pressable style={styles.cancel_btn} onPress={() => handleDeleteImage(image)}>
                                                        <MaterialIcons name='cancel' size={27} color='#dc2626' />
                                                    </Pressable>
                                                )
                                            }
                                        </View>
                                    ))}
                                </Swiper>
                            )
                        }
                        {/* <Image source={require('../../../assets/imgs/sitting1.jpg')} style={[styles.card_avater]} /> */}
                        {
                            editable && (
                                <Pressable onPress={handleAddImage} style={[flex_row]}>
                                    <MaterialIcons name='add-box' size={20} color={'blue'} />
                                    <Text style={[{ color: 'blue' }]}>Add More Images </Text>
                                </Pressable>
                            )
                        }
                    </View>
                    <View style={[{ paddingHorizontal: 15, marginTop: 20 }]}>
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
                        {
                            editable && (
                                <View style={[mt_20]}>
                                    <Btn text='Update' handlePress={handleUpdate} loading={loading} />
                                </View>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    card_avater: {
        width: '100%',
        height: 250,
        // borderRadius: 50,
    },
    cancel_btn: {
        position: 'absolute',

        margin: 'auto',
        top: 5,
        right: 5,
        // backgroundColor: 'red',
        // width: '100%',
        // height: '100%',
        zIndex: 1
    }
})
