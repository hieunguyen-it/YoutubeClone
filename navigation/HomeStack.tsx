import React from "react";
import { View, Image, SafeAreaView, Platform } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";
const logo = require("../assets/images/logo.png");
import { TabOneParamList } from "../types";

const HomeStack = createStackNavigator<TabOneParamList>();

function CustomHeader() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#141414",
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 5,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ width: 100, height: 25 }}
          source={logo}
        />

        <View
          style={{
            flexDirection: "row",
            width: 150,
            justifyContent: "space-between",
          }}
        >
          <Feather name="cast" size={28} color="white" />
          <AntDesign name="bells" size={28} color="white" />
          <AntDesign name="search1" size={28} color="white" />
          <FontAwesome name="user-circle-o" size={28} color="white" />
        </View>
      </View>
    </SafeAreaView>
  );
}

function HomeStackComponent() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        header: () => <CustomHeader />,
      }}
    >
      <HomeStack.Screen
        name="TabOneScreen"
        component={HomeScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </HomeStack.Navigator>
  );
}

export default HomeStackComponent;
