// VideoListScreen.js
import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";

const VideoListScreen = ({ navigation }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // Aquí deberías realizar una solicitud a la API de YouTube Data v3 para obtener la lista de videos.
    // Puedes usar axios, fetch u otra librería para hacer la solicitud.
    // Actualiza el estado `videos` con la respuesta de la API.
    // Ejemplo: setVideos(response.data.items);
  }, []);

  const handleVideoPress = (videoId) => {
    navigation.navigate("VideoDetail", { videoId });
  };

  return (
    <View>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleVideoPress(item.id)}>
            <Text>{item.title}</Text>
            {/* Puedes mostrar más detalles del video aquí */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default VideoListScreen;
