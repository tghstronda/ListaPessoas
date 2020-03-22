import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import { apisAreAvailable } from 'expo';
// import { KeyboardAvoidingView } from 'react-native';


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
        backgroundColor: '#1C1C1C',
        alignItems: 'center',
        height: 70,
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    title: {
        fontSize: 30,
        justifyContent: 'center',
        alignItems: 'center',
        color: "#fff",
    }
});


export default Header;
