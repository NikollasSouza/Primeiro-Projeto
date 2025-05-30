import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Personagens() {
    const router = useRouter();
    const id = 1;
    return(
        <View>
            <Text>Calculo</Text>

            <Button
                title={`Calculo - ${id}`}
                onPress={() => router.push(`/personagens/${id}`)} 
            />
        </View>
    );
}