import React, { useCallback, useEffect, useReducer, useState } from "react";
import { Dimensions } from "react-native";
import {
  Alert,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";
import Input from "../components/Input";
import donut from "../assets/foto1.jpg";
import { signUp, signIn } from "../store/actions/auth.action";
import { Linking } from "react-native";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      inputValues: updatedValues,
      inputValidities: updatedValidities,
      formIsValid: updatedFormIsValid,
    };
  }
  return state;
};

const AuthScreen = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);

  useEffect(() => {
    return () => {
      setError(null);
    };
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert("Ha ocurrido un error", error, [{ text: "Ok" }]);
      setError(null);
    }
  }, [error]);

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  const handleSignUp = () => {
    if (formState.formIsValid) {
      dispatch(
        signUp(formState.inputValues.email, formState.inputValues.password)
      )
        .then((success) => {
          if (success) {
            // Registro exitoso
            // Puedes realizar acciones adicionales si es necesario
            console.log("Usuario registrado exitosamente");
            // No mostrar ningún mensaje aquí
          } else {
            // Registro fallido
            Alert.alert(
              "Recordatorio",
              "Si tenes email registrado incia sesión, si te estas registrando la contraseña debe tener 6 o mas caracteres",
              [{ text: "Ok" }]
            );
          }
        })
        .catch((error) => {
          // Manejar cualquier error adicional aquí
          console.error("Error en el registro:", error);
        });
    } else {
      setError(null); // Limpiar el estado de error
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  const handleSignIn = () => {
    if (formState.formIsValid) {
      dispatch(
        signIn(formState.inputValues.email, formState.inputValues.password)
      ).then((success) => {
        if (success) {
          // Autenticación exitosa
        } else {
          setError("Error de usuario o contraseña");
        }
      });
    } else {
      setError(null); // Limpiar el estado de error
      Alert.alert(
        "Formulario inválido",
        "Ingresa un email y contraseña válidos",
        [{ text: "Ok" }]
      );
    }
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const handleForgotPassword = () => {
    Alert.alert(
      "Contactame para restablecer la contraseña",
      "Te olvidaste tu clave? Enviame un correo a martinurquiza07@gmail.com o contactame y a mi whatsapp con tu correo registrado y te blanqueo la clave.",
      [{ text: "Ok" }]
    );
  };

  const handleSecurityPolicy = () => {
    const securityPolicyURL =
      "https://lauroware.github.io/politicadeprivacidadtuchicoessen/";

    // Abre la URL utilizando Linking.openURL
    Linking.openURL(securityPolicyURL).catch((err) =>
      console.error("Error al abrir la URL: ", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>TU MEJOR ALIADO EN LA COCINA</Text>
          <Image style={styles.image} source={donut} />
          <View style={styles.inputContainer}>
            <Input
              id="email"
              label="Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Por favor ingresa un email válido"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              label="Contraseña"
              keyboardType="default"
              required
              password
              secureTextEntry
              autoCapitalize="none"
              errorText="Por favor ingresa una contraseña válida"
              onInputChange={onInputChangeHandler}
              initialValue=""
            />
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleSignUp}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.securityPolicyLink}
            onPress={handleSecurityPolicy}
          >
            <Text style={styles.securityPolicyText}>Política de Seguridad</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: height * 0.1,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: width,
    height: height * 0.4,
    resizeMode: "contain",
  },
  subtitle: {
    marginTop: height * 0.02,
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
  },
  inputContainer: {
    width: width * 0.9,
    marginBottom: height * 0.02,
  },
  loginButton: {
    backgroundColor: "#FF7100",
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: height * 0.035,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  registerButton: {
    backgroundColor: "#FF7100",
    width: width * 0.9,
    height: height * 0.07,
    borderRadius: height * 0.035,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: width * 0.04,
    fontWeight: "bold",
  },
  footer: {
    marginTop: height * 0.03,
    width: width * 0.9,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  forgotPasswordButton: {
    marginTop: height * 0.01,
    alignSelf: "flex-end",
    marginRight: width * 0.04,
  },
  forgotPasswordText: {
    color: "#555",
    fontSize: width * 0.04,
  },
  securityPolicyLink: {
    marginTop: height * 0.01,
    alignSelf: "center",
  },
  securityPolicyText: {
    color: "#555",
    fontSize: width * 0.03,
    textDecorationLine: "underline",
  },
});

export default AuthScreen;
