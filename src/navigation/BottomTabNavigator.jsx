import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Linking } from "react-native";

// Asegúrate de importar ShopNavigator
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import OrdersNavigator from "./OrdersNavigator";

const BottomTabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const openWhatsApp = () => {
    Linking.openURL("whatsapp://send?phone=+5491151457232");
  };

  const openInstagram = () => {
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
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={openWhatsApp}>
              <Ionicons name="logo-whatsapp" size={size} color="green" />
            </TouchableOpacity>
          ),
        }}
      />
      <BottomTabs.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity onPress={openInstagram}>
              <Ionicons name="logo-instagram" size={size} color="fuchsia" />
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
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
    height: 65,
    position: "relative",
    shadowColor: "#333",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    bottom: 0,
  },
});

export default BottomTabNavigator;
