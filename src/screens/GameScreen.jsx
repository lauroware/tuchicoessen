import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";

const VideoScreen = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: "0",
      title:
        "Aca tenés videos explicativos de los productos. Si querés mas info de alguno de ellos, contactame.",
    },
    { id: "1", title: "Presentación", videoId: "soPg6eIghTA" },
    { id: "2", title: "Cuadrada de 24cm", videoId: "KA51J14C5T8" },
    { id: "3", title: "Sartén Express", videoId: "4U7OHEI79xM" },
    { id: "4", title: "Bifera 23x33", videoId: "tqSskldD32A" },
    { id: "5", title: "Linea Nuit 24cm", videoId: "oefxGElNFPQ" },
    { id: "6", title: "Cacerola Baby 18cm", videoId: "EEsfxAfjyBI" },
    { id: "7", title: "Wok", videoId: "0UqQxcrIHdk" },
    { id: "8", title: "Jarrito Quick", videoId: "E_ky_5jLomg" },
    { id: "9", title: "Flip 2.1", videoId: "KrLwPYvLh80" },
    { id: "10", title: "Cacerola de 24 CM", videoId: "9iVz6qKfKlc" },
    { id: "11", title: "Sartén de 24 CM", videoId: "56Teco7mCS4" },
    { id: "12", title: "Cacerola de 18 CM", videoId: "vXL220QWSOI" },
    { id: "13", title: "Cacerola de 20 CM", videoId: "IZjIRlo8ID8" },
    // ... más videos
  ];

  const handleVideoPress = (videoId) => {
    setSelectedVideo(videoId);
  };

  const renderWelcomeCard = () => (
    <View style={styles.welcomeCard}>
      <Text style={styles.welcomeMessage}>
        ¡Aquí tienes un video explicativo de los productos! Cualquier duda,
        contactame.
      </Text>
    </View>
  );

  const renderVideoList = () => (
    <FlatList
      data={videos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={item.id === "0" ? styles.welcomeCard : styles.videoItem}
          onPress={() => handleVideoPress(item.videoId)}
        >
          <Text
            style={item.id === "0" ? styles.welcomeMessage : styles.videoTitle}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );

  const renderVideoPlayer = () => (
    <WebView
      source={{
        uri: `https://www.youtube.com/embed/${selectedVideo}?controls=1`,
      }}
      style={{ flex: 1 }}
    />
  );

  return (
    <View style={styles.container}>
      {selectedVideo ? renderVideoPlayer() : renderVideoList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
  welcomeCard: {
    backgroundColor: "#add8e6", // Color para la tarjeta de bienvenida
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
  },
  welcomeMessage: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  videoItem: {
    backgroundColor: "#ffd1dc", // Color pastel
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    alignItems: "center", // Centrar horizontalmente
  },
  videoTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default VideoScreen;
