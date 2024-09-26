import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, TextInput, Button, Appbar } from 'react-native-paper';

export default function Usuario({ navigation }) {
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
   
    if (nome && senha) {
      navigation.navigate('Cliente');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <View style={{ flex: 1 , backgroundColor: '#fff'}}>
      <Appbar.Header>
        <Appbar.Content title="Login de Usuário" />
      </Appbar.Header>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 }}>
        <Text style={{ marginBottom: 20, fontSize: 20 }}>Bem-vindo!</Text>

        <TextInput
          label="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={{ width: '20%', marginBottom: 20 }}
          mode="outlined"
        />

        <TextInput
          label="Senha"
          value={senha}
          onChangeText={text => setSenha(text)}
          secureTextEntry
          style={{ width: '20%', marginBottom: 20 }}
          mode="outlined"
        />

        <Button
          mode="contained"
          onPress={handleLogin}
          style={{ marginTop: 20, paddingVertical: 10, borderRadius: 50, width: '5%', backgroundColor: '#696969', color: '#fff' }}
        >
          Entrar
        </Button>
      </View>
    </View>
  );
}
