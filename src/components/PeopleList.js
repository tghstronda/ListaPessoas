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
        //height: 40,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
    }
});

export default PeopleList;
