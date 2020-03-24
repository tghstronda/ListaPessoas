import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import {CapitalizeFirstLetter} from '../util';

const PeopleListItem = props => {
    const { people } = props;
    const { title, first, last } = people.name;

    return (
        <View style={styles.line}>
            <Image style={styles.avatar} source={{uri: people.picture.thumbnail}} />
            <Text style={styles.lineText}>
                {`${
                    CapitalizeFirstLetter(title)
                } ${
                    CapitalizeFirstLetter(first)
                } ${
                    CapitalizeFirstLetter(last)
               }`}
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
        paddingLeft: 20,
    },
    avatar: {
        aspectRatio:1,
        height:30,
        borderRadius: 10,
        //aspectRadio não deixa deconfigurar a qualidade da imagem
    }
});

export default PeopleListItem;
