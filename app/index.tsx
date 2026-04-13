import { StyleSheet, Text, View } from "react-native";

export default function prefiExam() {
  return (
    <View style={styles.container}>
      <Text>Edit src/app/index.tsx to edit this screen.</Text>
      <Text style={styles.content}>G-ClIFFT ROSALES INDAY. BSIT-2A</Text>
    </View>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    fontSize: 50,
    flexDirection: "coloumn",
    gap: 10,
  },
  content: {
        fontSize: 30,
        fontFamily: 'arial',
        color: "white",
  },
  
});
