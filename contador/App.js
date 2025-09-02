/*
useState(0) -> cria o estado do contador, começando em 0.
    contador -> valor atual.
    setContador -> função para atualizar contador.

<Button onPress={...} /> -> dispara a função quando clicamos.
    setContador(contador + 1) -> atualiza o valor.
    O React re-renderiza a tela automaticamente.
*/

import { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
    // estado inicial = 0
    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={[styles.valor, contador >= 0 ? { color: "green" } : { color: "red" }]}>
                {contador}
            </Text>
            <Button title="Incrementar" onPress={() => setContador(contador + 1)} />
            <Button title="Incremementar+10" onPress={() => setContador(contador + 10)}/>
            <Button title="Decrementar" onPress={() => setContador(contador -1)} />
            <Button title="Zerar" onPress={() => setContador(0)} />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#d4cacaff",
        alignItems: "center",
        justifyContent: "center",
        gap: 10, // espeaço entre os botões
    },
    valor: {
        fontsize: 40,
        marginBottom: 20,
    },
});


/*
EXERCÍCIOS:
 1. Adicione um botão "+10" que incrementa o contador em 10.
 2. Troque a cor de fundo (backgroundcolor) do app para um cinza claro.
 3. Desafio: faça o número ficar vermelho se for negativo e verde se for positivo.
*/ 
