import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import api from './src/services/api';
 
export default function App() {
  const [loginGithub, setLoginGithub] = useState('');
  const [infoDev, setInfoDev] = useState();
  const [imagemPerfil, setImagemPerfil] = useState(
    'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
  );
 
  const consultarDev = async (loginGithub) => {
    const response = await api.get(login/Github);
    setInfoDev(response.data);
    setImagemPerfil(response.data.avatar_url);
  };
 
  return (
    <View styles={styles.container}>
    <Image source={{ uri: imagemPerfil }} styles={styles.foto} />
 
    <TextInput
    styles={styles.login}
    value={loginGithub}
    onChangeText={setLoginGithub}
    underlineColorAndroid="transparencet"
    />
 
    <Button title="Consultar Dev" onPress={() => consultarDev(loginGithub)}
    />
   
        <Text style={styles.info}>Id: {infoDev == null ? '' : infoDev.id}</Text>
        <Text style={styles.info}>
        Nome: {infoDev == null ? '' : infoDev.name}
        </Text>
        <Text style={styles.info}>
        Repositórios: {infoDev == null ? '' : infoDev.public_repos}
        </Text>
         <Text style={styles.info}>
        Criado em: {infoDev == null ? '' : infoDev.created_at}
        </Text>
        <Text style={styles.info}>
        Seguidores: {infoDev == null ? '' : infoDev.followers}
        </Text>
         <Text style={styles.info}>
        Seguindo: {infoDev == null ? '' : infoDev.following}
        </Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 60,
    allignsItems: 'center',
  },
  info: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
  },
  login: {
    width: 280,
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  foto: { 
    width: 200,
    height: 200,
    allignsItems: 'center',
  }
});