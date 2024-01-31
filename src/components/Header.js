import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Martín Cocina</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000000",
    height: 90,
    flexDirection: "row", // Agregamos flexDirection para alinear elementos en fila
    justifyContent: "flex-end", // Alineamos los elementos al final del eje principal (derecha)
    alignItems: "flex-end", // Alineamos los elementos al final del eje secundario (abajo)
    paddingRight: 10, // Agregamos un espacio en la derecha para separar el texto del borde
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Header;
