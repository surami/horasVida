import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput
} from 'react-native';
	
export default props => (
    <View style={styles.container}>
        <Text>
        Las horas que has dedicado son:
        </Text>
        <View>
            <TextInput
            value={props.horasTotal}
            placeholder="Resultado"
            editable={false}
            />
        </View>
    </View>
)

const styles = StyleSheet.create({
    resultado: {
      width: 100,
      fontSize: 30
    },
});