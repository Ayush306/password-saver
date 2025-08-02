import { FontAwesome } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { View } from "react-native";

const TabRoot = () => {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: 'Home',
                tabBarIcon: (color) => {
                    return (
                        <FontAwesome size={28} color={color} name="home"></FontAwesome>
                    )
                }
            }} />
            <Tabs.Screen name="add" options={{
                title: 'Add', tabBarIcon: ({ size, color }) => {
                    return (
                        <View
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                backgroundColor: "blue",
                                bottom: 15,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <MaterialIcons name="add-circle-outline" size={size} color={color = "black"} />
                        </View>
                    );
                }
            }} />
            <Tabs.Screen name="profile" options={{
                title: 'Account',
                tabBarIcon: () => {
                    return (
                        <MaterialCommunityIcons name="account" size={24} color="black" />
                    )
                }
            }} />

        </Tabs>

    );
};

export default TabRoot;