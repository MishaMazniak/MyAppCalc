import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Drilling from "./components/Drilling";
import Milling from "./components/Milling";
import MainScreen from "./components/MainScreen";

const Stack = createStackNavigator();

export default function Navigate() {

    return (<NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MainScreen"
                component={MainScreen}
                options={{
                    title: "Kalkulator CNC",
                    headerTitleAlign: "center"
                }} />
            <Stack.Screen name="Drilling"
                component={Drilling}
                options={{
                    title: "Drilling",
                    headerTitleAlign: "center"
                }} />
            <Stack.Screen name="Milling"
                component={Milling}
                options={{
                    title: "Milling",
                    headerTitleAlign: "center"
                }} />
        </Stack.Navigator>
    </NavigationContainer>
    );
}