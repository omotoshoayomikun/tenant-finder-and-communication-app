import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, Pressable, Alert } from 'react-native';
import { LineInput } from '../Forms/Input';
import GlobalStyle from '../../utils/GlobalStyle';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchImageLibrary } from 'react-native-image-picker'
import { Btn } from '../Forms/Btn';
import { UserType } from '../../userContext';
import axios from 'axios';
import { Links } from '../../utils/url';


const { container, flex1, Roboto, Raleway, flex_row, ml_10, gap10, mt_20, mb_30, mt_10, mb_10, justify_center, item_center, absolute } = GlobalStyle
export default function EditProfile() {
    const navigation = useNavigation();
    const { userId } = useContext(UserType)
    const [loading, setLoading] = useState(false)

    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        password: '',
        address: '',
        state: '',
        images: []
    })

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`${Links.baseUrl}/user/${userId}`)
                setValue(response.data)
            } catch (err) {
                console.log(err)
            }

        }
        fetchUser()
    }, [navigation])


    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => (
    //             <TouchableOpacity
    //                 style={{ marginRight: 15 }}
    //             >
    //                 <Ionicons name='checkmark-sharp' color='#1e3a8a' size={26} />
    //             </TouchableOpacity>
    //         )
    //     })
    // }, [])


    const Inputs = [
        {
            id: 1,
            name: 'firstName',
            placeholder: 'First Name',
        },
        {
            id: 2,
            name: 'lastName',
            placeholder: 'Last Name',
        },
        {
            id: 3,
            name: 'phone',
            placeholder: 'Phone Number',
            keyboard: 'phone-pad',
        },
        {
            id: 10,
            name: 'state',
            placeholder: 'State',
        },
        {
            id: 7,
            name: 'address',
            placeholder: 'Address',
        },
        {
            id: 7,
            name: 'password',
            placeholder: 'password',
            secure: true,
        },
    ]

    const onChangeText = (e, name) => {
        setValue({ ...value, [name]: e })
    }

    const handlePhoto = () => {
        const option = {

        }
        launchImageLibrary(option, response => {
            return setValue({ ...value, images: response.assets })
        })
    }

    console.log(value)

    const handleUpdate = async () => {
        setLoading(true)
        const data = new FormData()
        data.append('firstName', value.firstName)
        data.append('lastName', value.lastName)
        data.append('state', value.state)
        data.append('address', value.address)
        data.append('phone', value.phone)
        data.append('email', value.email)
        data.append('toilet', value.toilet)
        value.images.forEach((img, index) => {
            data.append('images', {
                uri: img.uri,
                type: `image/${img.uri.split('.').pop()}`,
                name: `image_${index}.${img.uri.split('.').pop()}`
            })
        })

        try {
            const response = await axios.put(`${Links.baseUrl}/user/${userId}`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            setLoading(false)
            Alert.alert('Success', `Profile edited successfully`, [
                { text: 'OK' }
            ])
            const resData = response.data
            setValue({
                firstName: resData.firstName,
                lastName: resData.lastName,
                phone: resData.phone,
                email: resData.email,
                password: resData.password,
                address: resData.address,
                images: resData.images
            })
        } catch (err) {
            setLoading(false)
            Alert.alert('Error', `${err.message}`, [
                { text: 'OK' }
            ])
        }
    }

    return (
        <View style={[flex1,]}>
            <ScrollView style={{ paddingHorizontal: 15, }}>
                <View style={{ paddingBottom: 20 }}>
                    <View style={[justify_center, item_center, gap10, mb_30, mt_20]}>
                        <Image source={value.images[0]?.uri ? { uri: value.images[0]?.uri } : require('../../../assets/imgs/profile.png')} style={[styles.card_avater, ml_10]} />
                        <Pressable onPress={handlePhoto}>
                            <Text style={[{ color: '#1e3a8a', fontSize: 17 }]}>Edit picture</Text>
                        </Pressable>
                    </View>
                    <View>
                        {
                            Inputs.map((input, index) => (
                                <View key={index}>
                                    <LineInput {...input} value={value[input.name]} onChangeText={onChangeText} />
                                </View>
                            ))
                        }
                    </View>
                    <View style={[mt_20]}>
                        <Btn text='Update' handlePress={handleUpdate} loading={loading} />
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
        borderRadius: 50,
    },
})
