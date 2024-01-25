import React, { useCallback, useEffect, useReducer, useState } from "react";
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
      "Contactarme para restablecer la contraseña",
      "Enviame un whatsapp al +00541162366175 con el correo electrónico para blanquear la clave",
      [{ text: "Ok" }]
    );
  };

  const handleSecurityPolicy = () => {
    // Aquí puedes navegar a la pantalla de política de seguridad o abrir un enlace externo.
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Tu mejor compañia en la cocina</Text>
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
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>
              ¿Olvidaste tu contraseña?
            </Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
              <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.registerButton}
              onPress={handleSignUp}
            >
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
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

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
  container: {
    paddingTop: 100,
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "40%",
    resizeMode: "contain",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
  },
  inputContainer: {
    width: "90%",
  },
  loginButton: {
    backgroundColor: "#F9A924",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#F9A924",
    width: "100%",
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    marginTop: 42,
    width: "90%",
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignSelf: "flex-end",
    marginRight: 20,
  },
  forgotPasswordText: {
    color: "#555",
    fontSize: 14,
  },
  securityPolicyLink: {
    marginTop: 10,
    alignSelf: "center",
  },
  securityPolicyText: {
    color: "#555",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default AuthScreen;
