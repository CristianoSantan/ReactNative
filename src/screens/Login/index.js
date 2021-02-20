import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";

import styles from "./styles";

const apiUsuario = {
  id: 1,
  email: "cris@test.com",
  senha: "123"
}

export default function Login({navigation}) {

  function autenticacao() {
    if(apiUsuario.email === usuario && apiUsuario === senha) {
      navigation.navigate("Tarefas")
    }else {
      alert("Usuario ou senha invalidos")
    }
  }

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastro = () => {
    alert(nome);
    alert(sobrenome);
    alert(email);
    alert(senha);
  };

  return (
    <View>
      <ImageBackground style={styles.container} source={require("../../../assets/fundo.jpg")}>
        <StatusBar hidden />
        <Image
          source={require("../../../assets/iron.jpg")}
          style={styles.logo}
        />
        <Text style={(styles.bold, styles.cor)}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Seu nome..."
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu sobrenome..."
          onChangeText={(text) => setSobrenome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Seu email..."
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          placeholder="Sua senha..."
          onChangeText={(text) => setSenha(text)}
        />
        <TouchableOpacity style={styles.btnCadastro} onPress={() => cadastro()}>
          <Text style={{ color: "white", textAlign: "center" }}>
            CADASTRAR!
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
