import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Fragment } from "react";
import { Home } from "./src/screens/Home";
import { Register } from "./src/screens/Register";
import { Resume } from "./src/screens/Resume";
import { Splash } from "./src/screens/Splash";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const Routes = () => {
    return (
        <Fragment>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="Home" component={Home} />
                    <Tab.Screen name="Register" component={Register} />
                    <Tab.Screen name="Resume" component={Resume} />
                </Stack.Navigator>
            </NavigationContainer>
        </Fragment>
    );
};
