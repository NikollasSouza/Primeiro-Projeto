import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen() {
    const router = useRouter();
    return(
        <View>
            <Button title="Stack navigation" onPress={() => router.push('/navigation/stack')}></Button>
            <Button title="Tabs navigation" onPress={() => router.push('/navigation/tabs')}></Button>
            <Button title="Drawer navigation" onPress={() => router.push('/navigation/drawer')}></Button>
        </View>
    );
}