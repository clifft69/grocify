import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>G-ClIFFT ROSALES INDAY. BSIT-2A</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    fontSize: 50,
  },
  content: {
        fontSize: 30,
        fontFamily: 'arial',
        color: "white",
  },
  
});
