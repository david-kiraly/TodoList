import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './AppContext';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

export default function App() {
    return (
        <AppProvider>
            <View style={styles.container}>
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <Tasks status='todo' />
                <Tasks status='completed' />
                <AddTask />
            </View>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
        paddingHorizontal: 20
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
});
