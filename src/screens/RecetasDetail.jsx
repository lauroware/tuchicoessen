import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Linking } from "react-native";

const RecetasDetail = ({ route }) => {
  const { title, ingredientes, receta, instagramLink } = route.params;

  const handleInstagramLink = () => {
    if (instagramLink) {
      Linking.openURL(instagramLink).catch((err) =>
        console.error("Error al abrir el enlace de Instagram", err)
      );
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.label}>Ingredientes:</Text>
          <Text style={styles.text}>{ingredientes}</Text>
          <Text style={styles.label}>Receta:</Text>
          <Text style={styles.text}>{receta}</Text>
          {instagramLink && (
            <TouchableOpacity onPress={handleInstagramLink}>
              <Text style={styles.instagramLink}>Ver en Instagram</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  instagramLink: {
    color: "blue",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default RecetasDetail;
