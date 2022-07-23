import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AppContext } from '../AppContext';

const Task = props => {
    const { dispatch } = useContext(AppContext)
    const markTaskAsCompleted = () => {
        dispatch({ type: 'MARK_TASK_AS_COMPLETED', payload: props.task.id})
    }
    const markTaskAsTodo = () => {
        dispatch({ type: 'MARK_TASK_AS_TODO', payload: props.task.id})
    }
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <TouchableOpacity onPress={props.status == 'todo' ? markTaskAsCompleted : markTaskAsTodo} style={styles.square}></TouchableOpacity>
            </View>
            <Text style={styles.itemText}>{props.task.text}</Text>
            <View style={styles.circular}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'space-between'
    },
    itemText: {
        width: '80%'
    },
    circular: {
        height: 12,
        width: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
})

export default Task;