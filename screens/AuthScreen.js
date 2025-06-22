import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AuthScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        // TODO: Replace this with Firebase auth later
        if (username && password) {
            await AsyncStorage.setItem('user', username);
            navigation.navigate('Home', { user: username });
        } else {
            Alert.alert('Please enter both username and password.');
        }
    };

    const handleGuestLogin = async () => {
        await AsyncStorage.setItem('user', 'Guest');
        navigation.navigate('Home', { user: 'Guest' });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Log In</Text>

            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <Button title="Log In" onPress={handleLogin} />
            <View style={{ height: 10 }} />
            <Button title="Continue as Guest" onPress={handleGuestLogin} color="#555" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', paddingHorizontal: 30,
    },
    title: {
        fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center',
    },
    input: {
        borderWidth: 1, borderColor: '#ccc', padding: 10,
        marginBottom: 15, borderRadius: 5,
    },
});
