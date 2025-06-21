import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ route, navigation }) {
    const user = route?.params?.user || 'Guest';

    const handleLogout = async () => {
        await AsyncStorage.removeItem('user');
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, {user}!</Text>
            <Button title="Log Out" onPress={handleLogout} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    text: {
        fontSize: 24, marginBottom: 20,
    },
});
