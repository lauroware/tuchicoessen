import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const IndexScreen = ({ navigation }) => {
  const navigateToBread = () => {
    navigation.navigate("Recetas");
  };

  const navigateToLista = () => {
    navigation.navigate("Lista");
  };

  const navigateToTeam = () => {
    navigation.navigate("Team");
  };

  const navigateToGame = () => {
    navigation.navigate("Game");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.presentationContainer}>
        <Image
          style={styles.presentationImage}
          source={require("../assets/imageninicio.jpg")}
        />
      </View>
      <View style={styles.welcomeCard}>
        <Text style={styles.welcomeMessage}>
          ¡Bienvenido a nuestra aplicación de cocina! Descubre recetas, crea tu
          lista de compras, gestiona tus productos y obtén consejos útiles.
        </Text>
      </View>

      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.image} onPress={navigateToBread}>
          <Image
            style={styles.image}
            source={require("../assets/Misrecetas.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.image} onPress={navigateToLista}>
          <Image
            style={styles.image}
            source={require("../assets/Listadesupermercado.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.image} onPress={navigateToGame}>
          <Image
            style={styles.image}
            source={require("../assets/Misproductos.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.image} onPress={navigateToTeam}>
          <Image style={styles.image} source={require("../assets/Tips.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  welcomeCard: {
    width: "100%",
    backgroundColor: "#add8e6", // Color de la tarjeta de bienvenida
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
  },
  welcomeMessage: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  presentationContainer: {
    width: "100%",
    aspectRatio: 2, // 2:1 ratio
    marginBottom: 10,
  },
  presentationImage: {
    width: "100%",
    height: undefined,
    aspectRatio: 2, // 2:1 ratio
    resizeMode: "cover",
    borderRadius: 10,
  },
  imageContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: screenWidth * 0.8,
    height: undefined,
    aspectRatio: 16 / 9, // Ajusta a la relación de aspecto original de las imágenes
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 10,
    alignItems: "center", // Centrar verticalmente
  },
});
