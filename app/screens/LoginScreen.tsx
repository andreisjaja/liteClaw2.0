import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '../types';
import { auth } from '../utils/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';


type LoginScreenNavigationProp = NavigationProp<RootStackParamList, 'LoginScreen'>;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();
  
  const onSubmit = () => {
    if (!email || !password) {
      setError("Por favor, ingrese su usuario y contraseña.");
      return;
    }

    setError("");
    
    // Utiliza el método correcto para la versión más reciente de Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigation.navigate('BibliotecaScreen');
      })
      .catch((err: any) => { // Especificar tipo 'any' o un tipo más específico si lo conoces
        setError(err.message);
      });
  };



  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/gato.png')} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#ebeaeb',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: 'Louis',
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    borderRadius: 50,
    alignSelf: 'center',
  },
  input: {
    borderColor: '#754b73',
    backgroundColor: '#ece1eb',
    borderWidth: 1,
    padding: 10,
    width: 300,
    marginBottom: 16,
    borderRadius: 20,
    alignSelf: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#754b73',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
