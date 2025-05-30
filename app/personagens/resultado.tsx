import React from "react";
import { Text, View } from "react-native";

// Define o tipo dos parâmetros da rota
type RouteParams = {
  numero1: number;
  numero2: number;
};

export default function Resultado({ route }: { route: { params: RouteParams } }) {
  // Obtém os parâmetros da rota
  console.log("Route params:", route.params);
  const { numero1, numero2 } = route.params;

  // Calcula a multiplicação
  const resultado = numero1 * numero2;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Multiplicação: {numero1} x {numero2} = {resultado}
      </Text>
    </View>
  );
}