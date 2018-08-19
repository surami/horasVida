import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import Cabecera from './app/Cabecera';
import InputComponent from './app/InputComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCabecera}>
          <Cabecera/>
        </View>
        <View style={styles.containerInput}>
          <InputComponent/>
        </View>
      </View>
       
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  containerCabecera: {
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    paddingTop: 40
  },
  containerInput: {
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',

    flex: 2
  },
});

