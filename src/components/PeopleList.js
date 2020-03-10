import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
    const { peoples } = props;

    const items = peoples.map(people => {
        return (
            <PeopleListItem
                key={people.name.first}
                people={people} />
        );
    });
    return (
        <View style={style.container}>
            {items}
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
    lineText: {
        fontSize: 20,
        color: '#FFFAFA',
    }
});

export default PeopleList;
