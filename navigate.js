import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTranslation } from "react-i18next";
import "./i18n";

import Drilling from "./components/Drilling";
import Milling from "./components/Milling";
import Boring from "./components/Boring";
import Tolerance from "./components/Tolerance/Tolerance";
import MainScreen from "./components/MainScreen";
import Taping from "./components/Taping/Taping";

const Stack = createStackNavigator();

export default function Navigate() {
  const { t, i18n } = useTranslation();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            title: t("nameMainPage"),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Drilling"
          component={Drilling}
          options={{
            title: t("drilling"),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Milling"
          component={Milling}
          options={{
            title: t("milling"),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Boring"
          component={Boring}
          options={{
            title: t("boring"),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Tolerance"
          component={Tolerance}
          options={{
            title: t("tolerance"),
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="Taping"
          component={Taping}
          options={{
            title: t("tapping"),
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
