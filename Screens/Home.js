import React from "react";
import { ImageBackground, StyleSheet, Text, View, TextInput} from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    <Text style={styles.text}>User</Text>
    <TextInput style={styles.input} />

      <Text style={styles.text}>Pass</Text>
      <TextInput style={styles.input}/>
    </ImageBackground>

   

  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
  }
});

export default App;