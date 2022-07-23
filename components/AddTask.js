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
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        padding: 15,
        width: 250,
        backgroundColor: '#fff',
        borderRadius: 5,
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#c0c0c0',
        borderWidth: 1,
    },
    addText: {}
})

export default AddTask