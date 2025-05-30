import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";

export default function Personagem() {
  const router = useRouter();

  // Estado para os dois números
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");

  // Função para navegar para a próxima tela com os parâmetros
  const handleNavegar = () => {
    // Verifica se ambos os campos estão preenchidos
    if (!numero1 || !numero2) {
      alert("Por favor, insira dois números.");
      return;
    }

    // Converte os valores para números
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    // Navega para a próxima tela com os parâmetros
    router.push({
      pathname: "/personagens/resultado",
      params: { numero1: num1, numero2: num2 },
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Digite o primeiro número"
        keyboardType="numeric"
        value={numero1}
        onChangeText={setNumero1}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <TextInput
        placeholder="Digite o segundo número"
        keyboardType="numeric"
        value={numero2}
        onChangeText={setNumero2}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />
      <Button title="Calcular Multiplicação" onPress={handleNavegar} />
    </View>
  );
}