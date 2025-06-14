import { useRouter } from "expo-router";
import React from "react";
import { Button, View } from "react-native";

export default function HomeScreen(){
const router = useRouter()

    return(
        <View>
            <Button title="Tabs" onPress={() => router.push('/navigation/tabs')}/>
            <Button title="Tabs" onPress={() => router.push('/personagens/')}/>
            <Button title="Tabs" onPress={() => router.push('/navigation/drawer')}/>
            <Button title="Tabs" onPress={() => router.push('/navigation/stack')}/>
        </View>
    );
}