import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import Resultado from './Resultado';

var result = {
  horas: '',
  anos: ''
};
export default class InputComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        horas:'',
        anos: '',
        horasTotal: ''
    };
    this.calcularHoras = this.calcularHoras.bind(this);

  }
  changeHoras(horas) {
    this.setState({horas});
  }
  changeAnos(anos){
    this.setState({anos});
  }
  calcularHoras() {
    let resultado = 0;
    let dias = 0;
    if(this.state.anos && this.state.horas){
      let anos = parseFloat(this.state.anos);
      for(ano = 0; ano < anos; ano ++){
        let fecha = new Date();
        let anoActual = fecha.getFullYear();
        let ano = anoActual - ano;
        let diasAno = 0;
        if(this.esBisiestro(ano)){
          diasAno = 364;
        } else {
          diasAno = 365;
        }
        dias = dias + diasAno;
      }
      resultado = parseInt(this.state.horas) * dias;
    } else {
      Alert.alert('Datos incorrectos');
    }
    this.setState({ horasTotal: resultado.toString()});
  }
  esBisiestro(year){
    return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
  }
  render() {

    return (
      <View style={styles.container}>
        <View style={styles.containerInputHoras}> 
          <Text style={styles.labelHoras}>Introduce las horas diarias: </Text>
          <TextInput
            style={styles.input}
            keyboardType = 'numeric'
            onChangeText={(horas) => this.changeHoras(horas)}
            value={this.state.horas}/>
        </View>
        <View style={styles.containerInputAnos}> 
          <Text style={styles.labelHoras}>Introduce los años: </Text>
          <TextInput
            style={styles.input}
            keyboardType = 'numeric'
            onChangeText={(anos) => this.changeAnos(anos)}
            value={this.state.anos}/>
        </View>
        <View style={styles.containerButton}>
          <Button
            onPress={this.calcularHoras}
            title="Calcular"
            color="#841584"
            accessibilityLabel="Calcula las horas totales"
          />
        </View> 
        <View style={styles.containerResultado}>
           <Resultado horasTotal = {this.state.horasTotal}/>      
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 15,
    paddingRight: 15
  },
  containerInputHoras: {
    flex:1,
    marginTop:10
  },
  containerInputAnos: {
    flex:1,
    marginTop:30
  },
  labelHoras: {
    marginLeft: 10,
    marginBottom: 30,
  },
  containerResultado: {
    alignItems: 'center',
    justifyContent: 'center',
    flex:2
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  containerButton: {
    flex: 1,
    marginTop: 20
  },
});
