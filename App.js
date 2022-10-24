import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  FontFamily,
} from "react-native";

export default function App() {
  return (
    // View, text Component
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Test app</Text>
      </View>

      {/* Flexbox layout */}
      <View style={styles.jumbotron}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Left</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Right</Text>
        </View>
      </View>

      {/* Image component */}
      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      <Image style={styles.tinyLogo} source={require("./assets/favicon.png")} />

      <View style={styles.button}>
      {/* button component */}
      <Button title="Button" onPress={() => Alert.alert("Button pressed")} />
      </View>
      {/* touchable opacity component */}
      <TouchableOpacity
        style={styles.resolvedContainerStyle}
        onPress={() => Alert.alert("TouchableOpacity pressed")}
      >
        <Text style={styles.textStyle}>Touchable opacity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#bc8f8f",
  },
  header: {
    borderBottomWidth: 2,
    padding: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: "courier",
  },
  jumbotron: {
    flexDirection: "row",
    margin: 20,
  },
  tinyLogo: {
    marginLeft: 70,
    marginBottom: 30,
    width: 30,
    height: 30,
  },
  resolvedContainerStyle: {
    margin: 20,
    backgroundColor: "black",
    padding: 20,
  },
  textStyle: {
    fontSize: 20,
    fontFamily: "courier",
    color: "white",
    
  },
  subtitle:
  {marginTop: 5,
  marginLeft:50,
    width: 100,
     fontWeight: 'bold',
     fontStyle: "italic",
     textDecorationLine: 'underline',
     fontFamily: "courier",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  }
});
