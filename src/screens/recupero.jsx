import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import auth from "@react-native-firebase/auth";

const ResetPasswordScreen = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = async () => {
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert(
        "Correo enviado",
        "Se ha enviado un correo para restablecer la contraseña."
      );
    } catch (error) {
      console.error("Error al restablecer la contraseña:", error.message);
      Alert.alert(
        "Error",
        "Hubo un error al intentar restablecer la contraseña. Verifica el correo electrónico e intenta nuevamente."
      );
    }
  };

  return (
    <View>
      <Text>Ingresa tu correo electrónico para restablecer la contraseña:</Text>
      <TextInput
        placeholder="Correo electrónico"
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Button title="Restablecer Contraseña" onPress={handleResetPassword} />
    </View>
  );
};

export default ResetPasswordScreen;
