import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleList = props => {
    const { peoples } = props;
    const textElements = peoples.map(people => {
        const { first } = people.name;
        return (
            <View key={ first } style = {style.line}>
                <Text style = {style.lineText}>
                    { first } 
                </Text>
            </View>
        );
    });

    return (
        <View style = {style.container}>
            { textElements }
        </View>
    )
};

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#1C1C1C',
        height: 40,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    line: 
    {
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 20,

        height: 40,
        borderBottomWidth: 5,
        borderBottomColor: '#1C1C1C',

        backgroundColor: '#9C9C9C',     
        borderRadius: 10,   
    },
    lineText:{
        fontSize: 20,
        color: '#FFFAFA',
    }
});

export default PeopleList;
