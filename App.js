import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';
import PeopleList from './src/components/PeopleList';

import axios from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoples: []
    };
  }

  componentDidMount() {
    axios
      .get('https://randomuser.me/api/?nat=br&results=10')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoples: results
        });
      })
  }
  //Identar Ctrl + Shift + i
  render() {
    return (
      <View>
        <Header title="Lista de Pessoas" />
        <PeopleList peoples = {this.state.peoples}/>
      </View>
    );
  }
}
