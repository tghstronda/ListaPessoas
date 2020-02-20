import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { apisAreAvailable } from 'expo';
import { KeyboardAvoidingView } from 'react-native';

const Header = (props) => (

    <View style={style.container} behavior="padding" enabled>
        <Text style={style.title} behavior="padding" enabled>
            {props.title}
        </Text>
    </View>
);

const style = StyleSheet.create({
    Header: {
        backgroundColor: '#008b8b',
    },
    container: {
        marginTop: 30,
        //flex: 1,
        backgroundColor: '#008b8b',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
    }
});


export default Header;
