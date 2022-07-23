import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AppContext } from '../AppContext';

const AddTask = () => {
    const { dispatch } = useContext(AppContext)
    const [text, setText] = useState('')
    const handleAddTask = () => {
        const newTask = {
            id: Math.floor(Math.random() * 1000),
            text
        }

        dispatch({ type: 'ADD_TASK', payload: newTask })

        setText('')
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.writeTaskWrapper}
        >
            <TextInput value={text} style={styles.input} placeholder='Add a task' onChangeText={newText => setText(newText)} />
            <TouchableOpacity onPress={handleAddTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    writeTaskWrapper: {
        position: 'relative',
        bottom: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        padding: 15,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1
    },
    addText: {
        fontSize: 30,
        color: '#c0c0c0',
    }
})

export default AddTask