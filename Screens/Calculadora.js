import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import React,{useState} from 'react'
export default function Calculadora() {

  const [numero1,setNumero1]=useState('');
  const [numero2,setNumero2]=useState('');


  function sumar() {
    let suma = Number(numero1) + Number(numero2);
    Alert.alert('Resultado: ', 'Suma: ' + suma);
  }

  function restar() {
    let resta = Number(numero1) - Number(numero2);
    Alert.alert('Resultado: ', 'Resta: ' + resta);
  }

  function multiplicar() {
    let multiplica = Number(numero1) * Number(numero2);
    Alert.alert('Resultado: ', 'Multiplicación: ' + multiplica);
  }

  function dividir() {
    let divide = Number(numero1) / Number(numero2);
    Alert.alert('Resultado: ', 'División: ' + divide);
  }

  return (
    <View style={styles.container}>
      
      <Text style={{fontSize: 40, fontWeight: 'bold'}}>

      <Text>Calculadora</Text>
      </Text>

      <Text>{"\n"}</Text>  

<TextInput style={{ borderWidth: 1, borderColor: '#777', padding: 5, margin: 10, width: 100 }}
                    placeholder='0'
                    onChangeText={numero=>setNumero1(numero)} />


<TextInput style={{ borderWidth: 1, borderColor: '#777', padding: 5, margin: 10, width: 100 }}
                    placeholder='0'
                    onChangeText={numero=>setNumero2(numero)} />

            <Text>{"\n"}</Text>

      <Button onPress={sumar} title='Suma' />
      
      <Text>{"\n"}</Text>
 

      <Button onPress={restar} title='Resta' />
      
      <Text>{"\n"}</Text>

      <Button onPress={multiplicar} title='Multiplicación' />
      
      <Text>{"\n"}</Text>
     
      <Button onPress={dividir} title='División' />

      <Text>{"\n"}</Text>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 30,
    fontWeight: 'bold'
  },
});