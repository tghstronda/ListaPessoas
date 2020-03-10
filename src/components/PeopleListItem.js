import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PeopleListItem = props => {
    const { people } = props;
    const { first, last } = people.name;

    return (
        <View style={styles.line}>
            <Text style={styles.lineText}>
                {first}
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
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

export default PeopleListItem;
