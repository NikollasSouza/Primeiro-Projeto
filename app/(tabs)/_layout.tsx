import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
    return(
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color} />
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color} />
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    title: 'list',
                    tabBarIcon: ({color}) => <Ionicons name="home-outline" color={color} />
                }}
            />
        </Tabs>
    );
}