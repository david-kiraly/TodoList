import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppContext } from '../AppContext'
import Task from './Task'

const Tasks = props => {
    const { state } = useContext(AppContext)
    return (
        <View style={styles.tasksWrapper}>
            <View style={styles.items}>
                {props.status == 'todo'
                    ?
                    (
                        <View>
                            <Text style={styles.subTitle}>Todo</Text>
                            {state.tasks.todo.map(task => <Task key={task.id} status='todo' task={task} />)}
                        </View>
                    )
                    :
                    (
                        <View>
                            <Text style={styles.subTitle}>Completed</Text>
                            {state.tasks.completed.map(task => <Task key={task.id} status='completed' task={task} />)}
                        </View>
                    )
                }
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