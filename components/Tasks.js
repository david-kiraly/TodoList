import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../AppContext'
import Task from './Task'

const Tasks = props => {
    const { state } = useContext(AppContext)
    return (
        <View style={styles.tasksWrapper}>
            <View style={styles.items}>
                <Text style={styles.subTitle}>{props.status}</Text>
                {state.tasks[props.status].map(task => <Task key={task.id} status={props.status} task={task} />)}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    tasksWrapper: {
        paddingTop: 40,
        paddingHorizontal: 20
    },
    items: {
        marginTop: 30
    },
    subTitle: {
        fontSize: 20,
        marginBottom: 20
    }
})

export default Tasks