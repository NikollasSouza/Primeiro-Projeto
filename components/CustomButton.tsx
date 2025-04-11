import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    title: string;
    onPress: () => void;
}

export default function CustomButton({ title, onPress }: Props) {
    return (
        <TouchableOpacity style={styleS.button} onPress={onPress}>
            <Text style={styleS.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styleS = StyleSheet.create({
    button: {
        backgroundColor: "red",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        minWidth: 150,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
    },
    text: {
        fontWeight: 'bold',
        color: "white",
        fontSize: 16,
        textAlign: "center",
    }
});
