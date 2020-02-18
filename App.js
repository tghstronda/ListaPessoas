import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

import Header from './src/components/Header';

export default class App extends React.Component {
  renderList(){
      const names = 
      [
        'James Rosa de Lima',
        'Rodrigo Santoro',
        'Daniela Mercuri',
        'Pericles de Souza',
      ];

      const textElements = names.map(name => {
        return <Text key = {name}>{name}</Text>
      });
      return textElements;
  }

  render(){ 
    return (
      <View>
        <Header title = "Lista de Pessoas"/>
        {this.renderList()}
      </View>
    );
  }
  /**Há diversos momentos quando você está desenvolvendo uma aplicação Web 
   * que podem necessitar consumir e exibir dados de uma API.
   *  Há várias maneiras de se fazer isso, mas a maneira mais popular é usando axios */
}
