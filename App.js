import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header';

import Axio from 'axios';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      peoople: []
    };
  }

  componentDidMount() {
    Axio
      .get('https://randomuser.me/api/?nat=br&results=5')
      .then(response => {
        const { results } = response.data;
        this.setState({
          peoople: results
        });
      });
  }
  renderList() {
  }
  render() {
    return (
      <View>
        <Header title="Lista de Pessoas" />

      </View>
    );
  }
}
