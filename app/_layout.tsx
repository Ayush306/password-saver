import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {
                backgroundColor: "black"
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold"
            }
        }}
        >
            <Stack.Screen name="(tab)" options={{ headerShown: false }} />
            {/* <Stack.Screen name="about" /> */}

        </Stack>
    );
}

export default RootLayout;