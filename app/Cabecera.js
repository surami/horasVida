import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const state = {
    titleText: "Horas de Vida",
    descriptionText: "Esta aplicación te muestra las horas de vida que has usado para una tarea en concreto."
}

export default class Cabecera extends React.Component {

    render() {
        return (
        <View style={styles.container}>
            <Text style={styles.titleText}>{state.titleText}</Text>
            <Text style={styles.descriptionText}>{state.descriptionText}</Text>

        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 0,
      },
    titleText: {
        fontSize: 30,
        textAlign: "center",
    },
    descriptionText: {
        fontSize: 10,
        marginLeft: 10,
    }
});