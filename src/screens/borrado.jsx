<TouchableOpacity style={styles.imageContainer} onPress={navigateToTeam}>
  <Image
    style={styles.image}
    source={require("../assets/emprendeconmigo.jpeg")}
  />
  <Text style={styles.imageText}>Mandame tu comida</Text>
</TouchableOpacity>;

<TouchableOpacity style={styles.imageContainer} onPress={navigateToProducts}>
  <Image style={styles.image} source={require("../assets/logoessen.bmp")} />
  <Text style={styles.imageText}>Productos</Text>
</TouchableOpacity>;
