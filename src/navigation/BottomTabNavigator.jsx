import CartNavigator from "./CartNavigator";
import ShopNavigator from "./ShopNavigator";
import OrdersNavigator from "./OrdersNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Linking } from "react-native";

const BottomTabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {
  const openWhatsApp = () => {
    // Cambia 'whatsapp://send?phone=XXXXXXXXX' al número de teléfono o enlace de WhatsApp que desees.
    Linking.openURL("whatsapp://send?phone=+5491151457232");
  };

  const openInstagram = () => {
    // Cambia 'https://www.instagram.com/tu_usuario/' al enlace de tu perfil de Instagram.
    Linking.openURL("https://www.instagram.com/tuchicoessen/");
  };

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name="ShopNavigator"
        component={ShopNavigator}
        options={{
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={20} color="white" />
            </View>
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={openWhatsApp}>
              <Ionicons name="logo-whatsapp" size={20} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: () => (
            <TouchableOpacity onPress={openInstagram}>
              <Ionicons name="logo-instagram" size={20} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#333",
    paddingTop: 5,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    heigth: 85,
    position: "absolute",
    shadowColor: "#333",
    shadowOffset: { width: 0, heigth: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    bottom: -10,
  },
});
