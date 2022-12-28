import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    useFonts,
} from "@expo-google-fonts/poppins";
import { Box, NativeBaseProvider } from "native-base";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Routes } from "./Routes";
import { theme } from "./src/theme";

export default function App() {
    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
        Poppins_400Regular,
        Poppins_600SemiBold,
    });
    if (!fontsLoaded) {
        return null;
    } else {
        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <NativeBaseProvider theme={theme}>
                    <Box bg={"primary.900"} safeAreaTop />
                    <Routes />
                </NativeBaseProvider>
            </GestureHandlerRootView>
        );
    }
}
