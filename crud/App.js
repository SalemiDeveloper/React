import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  Switch,
} from "react-native";

export default function App() {
  const [tarefa, setTarefa] = useState(""); // input principal
  const [tarefas, setTarefas] = useState([]); // lista de tarefas
  const [editandoId, setEditandoId] = useState(null); // id da tarefa em edição
  const [novoTexto, setNovoTexto] = useState(""); // texto digitado na edição

  function adicionarTarefa() {
    if (tarefa.trim() === "") return;
    const nova = { id: Date.now().toString(), titulo: tarefa, done: false };
    setTarefas([...tarefas, nova]);
    setTarefa("");
  }

  function alternarStatus(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function removerTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function iniciarEdicao(tarefa) {
    setEditandoId(tarefa.id);
    setNovoTexto(tarefa.titulo);
  }

  function salvarEdicao(id) {
    setTarefas(
      tarefas.map((t) => (t.id === id ? { ...t, titulo: novoTexto } : t))
    );
    setEditandoId(null);
    setNovoTexto("");
  }

  function cancelarEdicao() {
    setEditandoId(null);
    setNovoTexto("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {/* Formulário para adicionar tarefas */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite uma tarefa..."
          value={tarefa}
          onChangeText={setTarefa}
        />
        <Button title="Adicionar" onPress={adicionarTarefa} />
      </View>

      {/* Contador */}
      <Text style={styles.contador}>
        Total: {tarefas.length} | Concluídas:{" "}
        {tarefas.filter((t) => t.done).length}
      </Text>

      {/* Lista de tarefas */}
      <FlatList
        data={tarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {editandoId === item.id ? (
              // Modo edição
              <>
                <TextInput
                  style={[styles.input, { flex: 1, backgroundColor: "#fff8b3" }]}
                  value={novoTexto}
                  onChangeText={setNovoTexto}
                />
                <Button title="💾" onPress={() => salvarEdicao(item.id)} />
                <Button title="❌" onPress={cancelarEdicao} />
              </>
            ) : (
              // Modo visualização
              <>
                <Switch
                  value={item.done}
                  onValueChange={() => alternarStatus(item.id)}
                />
                <Text
                  style={[styles.texto, item.done && styles.concluida]}
                >
                  {item.titulo}
                </Text>
                <Button title="✏️" onPress={() => iniciarEdicao(item)} />
                <Button title="🗑️" onPress={() => removerTarefa(item.id)} />
              </>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  form: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    elevation: 1,
    gap: 5,
  },
  texto: {
    fontSize: 18,
    flexShrink: 1, // evita overflow se o texto for grande
    marginHorizontal: 10,
  },
  concluida: {
    textDecorationLine: "line-through",
    color: "gray",
  },
  contador: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
});
