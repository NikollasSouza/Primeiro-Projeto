import CustomButton from "@/components/CustomButton";
import React, {useState} from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const START_VALUE = 0
    const [count, setCount] = useState(START_VALUE);
    
    return (
        <View style={{backgroundColor: 'blueviolet'}}>
            <Text>{count}</Text>
            <Button title="Aumentar"onPress={() => {setCount(count+1)}}/>
            <Button title="Diminuir"onPress={() => {setCount(count-1)}}/>
            <Button title="Voltar"onPress={() => {setCount(START_VALUE)}}/>
                <CustomButton title="Teste"/>
             
        </View>
    );
}
