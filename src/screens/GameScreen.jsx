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
        "Aquí tienes un video explicativo de los productos. Cualquier duda, no dudes en consultarme vía Instagram o WhatsApp.",
    },
    { id: "1", title: "Flip", videoId: "EuD8kF4_iAs" },
    { id: "2", title: "Cacerola Cuadrada", videoId: "zCrEpCUYOiI" },
    { id: "3", title: "Sartén Express", videoId: "3AImOCdWMeg" },
    { id: "4", title: "Bifera", videoId: "luMmxD0bOHU" },
    { id: "5", title: "Linea Nuit", videoId: "tGKWufBFHDg" },
    { id: "6", title: "Baby", videoId: "Anxwc07R4-k" },
    { id: "7", title: "Wok", videoId: "CnMjuBIn3WE" },
    { id: "8", title: "Savarin", videoId: "5D-xQBC_eeQ" },
    // ... más videos
  ];

  const handleVideoPress = (videoId) => {
    setSelectedVideo(videoId);
  };

  const renderWelcomeCard = () => (
    <View style={styles.welcomeCard}>
      <Text style={styles.welcomeMessage}>
        ¡Aquí tienes un video explicativo de los productos! Cualquier duda, no
        dudes en consultarme vía Instagram o WhatsApp.
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
