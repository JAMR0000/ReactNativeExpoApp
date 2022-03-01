import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';

export default function Grados() {

    const [numero1, setNumero1] = useState('');

    function convertir() {
        let con = Number(numero1) + 274.15;
        Alert.alert('Alert', 'Kelvin:  ' + con);
    }
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Conversor de °C a K</Text>
            <Text></Text>
            <TextInput
                placeholder="0"
                onChangeText={numero => setNumero1(numero)}
                defaultValue={numero1}
            />
           

            <Button onPress={convertir} title="Convertir" />

        </View>
    )
}






