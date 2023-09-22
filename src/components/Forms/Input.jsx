import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Pressable } from "react-native"
import GlobalStyle from "../../utils/GlobalStyle"
import Feather from 'react-native-vector-icons/Feather'
import { Dropdown } from "react-native-element-dropdown"

export const Input = (props) => {
    const { relative } = GlobalStyle


    return (
        <View style={[styles.container, relative]}>
            <TextInput
                // onChangeText={(value) => props.onChangeText(value)}
                placeholder={props.placeholder}
                style={[styles.input, { borderColor: props.error ? 'red' : '#0E0E240D' }]}
                secureTextEntry={props.secure === true ? true : false}
                onChangeText={(value) => props.onChangeText(value, props.name)}
                keyboardType={props.keyboard ? `${props.keyboard}` : 'default'}
            />
            {
                props.name === 'password' && (
                    <Pressable style={[styles.secure_icon]} onPress={() => props.handleEyeclose()}>
                        <Feather name={props.secure ? 'eye-off' : 'eye'} size={22} />
                    </Pressable>
                )
            }
            {/* {
                props.name === 'confirmPassword' && (
                    <Pressable style={[styles.secure_icon]} onPress={() => props.handleEyeclose()}>
                        <Feather name={props.secure ? 'eye-off' : 'eye'} size={22} />
                    </Pressable>
                )
            }
            {
                props.name === 'email' && (
                    <Pressable style={[styles.secure_icon]}>
                        <Feather name='mail' size={22} />
                    </Pressable>
                )
            } */}
        </View>
    )
}

export const LineInput = (props) => {

    return (
        <View key={props.id}>
            <Text style={[{ fontSize: 12, paddingVertical: 0 }]}>{props.placeholder}</Text>
            <TextInput
                // onChangeText={(value) => props.onChangeText(value)}
                // placeholder={props.placeholder}
                style={[styles.line_input, { color: props.editable === false ? '#000000' : '#000000' }]}
                secureTextEntry={props.secure === true ? true : false}
                onChangeText={(value) => props.onChangeText(value, props.name)}
                keyboardType={props.keyboard ? `${props.keyboard}` : 'default'}
                editable={props.editable}
                value={props.value}
            />
        </View>
    )
}

export const SelectDropdown = (props) => {

    const [isFocus, setIsFocus] = useState(false);

    return (
        <Dropdown
            style={[styles.dropdown, {}]}
            placeholderStyle={[styles.placeholderStyle, { color: props?.value === props?.placeholder ? '#9ca3af' : '#000000' }]}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}

            data={props.data}
            value={props.value}
            maxHeight={300}
            labelField="label"
            valueField="index"
            placeholder={!isFocus ? `${props.value}` : '...'}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={
                (item) => {
                    props.onChange(item.label, props.name)
                    setIsFocus(false);
                }
            }
        />
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    input: {
        backgroundColor: '#f6f7f8',
        // backgroundColor: '#0E0E240D',
        borderWidth: 2,
        // borderColor: '#0E0E240D',
        borderRadius: 5,
        // height: 50,
        padding: 12.5,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        marginBottom: 15,
    },
    line_input: {
        borderBottomWidth: 1,
        borderColor: '#9ca3af',
        fontSize: 14,
        marginBottom: 15,
        paddingVertical: 2,
    },
    dropdown: {
        paddingLeft: 12,
        paddingVertical: 9,
        fontSize: 18,
        // height: 50,
        // fontFamily: 'RobotoCondensed-Regular',
        borderWidth: 1.5,
        borderRadius: 5,
        paddingHorizontal: 8,
        marginBottom: 15,
        borderColor: '#0E0E240D',
        backgroundColor: '#f6f7f8',
    },
    placeholderStyle: {
        // fontFamily: 'RobotoCondensed-Regular',
        fontSize: 16,

    },
    selectedTextStyle: {
        fontSize: 18,
        // fontFamily: 'RobotoCondensed-Regular',
        // color: '#211E8A',
    },
    secure_icon: {
        position: 'absolute',
        right: 15,
        top: 17
    }
})

