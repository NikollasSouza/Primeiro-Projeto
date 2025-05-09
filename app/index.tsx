import CustomButton from "@/components/CustomButton";
import Example from "@/components/Example";
import Form from "@/components/Form";
import { useRouter } from "expo-router";
import React, {useState} from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const START_VALUE = 0
    const [count, setCount] = useState(START_VALUE);
    const [nome, setNome] = useState('Nikollas');
    const router = useRouter();
    
    return (
        <View style={{backgroundColor: 'blueviolet'}}>
            {/* <Text>Contador: {count}</Text>
            <Button title="Aumentar"onPress={() => {setCount(count+1)}}/>
            <Button title="Diminuir"onPress={() => {setCount(count-1)}}/>
            <Button title="Resetar"onPress={() => {setCount(count - count)}}/>

            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            
            <CustomButton 
                title="Botão vermelho"
                onPress={() => {setNome('Nikollas' + count)}}
            /> */}

            <Example example="Texto de exemplo"/>
            <Form/>
        </View>
    );
}
