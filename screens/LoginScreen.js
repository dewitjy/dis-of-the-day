import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (username && password) {
            await AsyncStorage.setItem('user', username);
            navigation.navigate('Home', { user: username });
        } else {
            Alert.alert('Please enter both username and password');
        }
    };

    const handleGuest = async () => {
        await AsyncStorage.setItem('user', 'Guest');
        navigation.navigate('Home', { user: 'Guest' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome</Text>
            <TextInput
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                style={styles.input}
            />
            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Login" onPress={handleLogin} />
            <View style={{ marginTop: 10 }} />
            <Button title="Continue as Guest" onPress={handleGuest} />
            <Button title="Create Account" onPress={() => navigation.navigate('SignUp')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', padding: 20,
    },
    title: {
        fontSize: 32, marginBottom: 40, textAlign: 'center',
    },
    input: {
        borderWidth: 1, padding: 10, marginBottom: 15, borderRadius: 5,
    },
});
