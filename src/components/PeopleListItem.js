import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import { CapitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
    const { people } = props;
    const { title, first, last } = people.name;
    return (
        < TouchableOpacity onPress={() => console.log('clicou em mim!!!', first)}>
            <View style={styles.line}>
                <Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
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
        </TouchableOpacity>
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
        paddingLeft: 10,
        flex: 8,

        //wflex nesse cso vai dividir o container em partes sendo 8 para o LineTexT e 1 para o avatar
    },
    avatar: {
        aspectRatio: 1,
        //height:30, Não faz mais efeito devido ao flex
        borderRadius: 10,
        //aspectRadio não deixa deconfigurar a qualidade da imagem ao mudar de device

        marginLeft: 5,
        flex: 1,
    }
});

export default PeopleListItem;
//TouchableOpacity deixa as coisas clicaveis