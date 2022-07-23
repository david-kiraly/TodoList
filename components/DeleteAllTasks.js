import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AppContext } from '../AppContext'

const DeleteAllTasks = () => {
    const { dispatch } = useContext(AppContext)

    const deleteAllTasks = () => {
        dispatch({ type: 'DELETE_ALL_TASKS'})
    }

    return (
        <TouchableOpacity onPress={deleteAllTasks} style={styles.deleteAllBadge}>
            <Text style={styles.deleteAllText}>X</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deleteAllBadge: {
        position: 'absolute',
        right: 40,
        top: 60,
        backgroundColor: 'red',
        width: 30,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 20
    },
    deleteAllText: {
        color: 'white',
        fontSize: 24
    }
})

export default DeleteAllTasks