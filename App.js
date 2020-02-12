import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes, ViewBase } from 'react-native';
import { render } from 'react-dom';

export default class App extends React.Component{
 
render(){ 
  return (
    <View style={styles.container}>
      <Text>Funcionando</Text>
      <Text>Funcionando</Text>
      <Text>Funcionando</Text>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
