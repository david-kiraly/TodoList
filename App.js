import React from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AppProvider } from './AppContext';
import AddTask from './components/AddTask';
import DeleteAllTasks from './components/DeleteAllTasks';
import Tasks from './components/Tasks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function App() {
    return (
        <AppProvider>
            <View style={styles.container}>
                <DeleteAllTasks />
                <Text style={styles.sectionTitle}>Today's tasks</Text>
                <KeyboardAwareScrollView
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                >
                    <Tasks status='todo' />
                    <Tasks status='completed' />
                </KeyboardAwareScrollView>
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
        marginTop: 60
    }
});
