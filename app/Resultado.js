import React from 'react';
import {StyleSheet, Text, View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import Visor from './Visor';

export default class Resultado extends React.Component {

    render() {
      const horasTotal = this.props.horasTotal;
      return(
        <View style={styles.container}>
          <Text>
          Las horas que has dedicado son:
          </Text>
          <View>
              <TextInput
              value={horasTotal}
              placeholder="Resultado"
              editable={false}
              />
          </View>
        </View>      
      );
      
    }
}

const styles = StyleSheet.create({
  resultado: {
    width: 100,
    fontSize: 30
  },
});

Resultado.propTypes = {
  horasTotal: PropTypes.string
}
