import React, { createContext, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AppReducer = (state, action) => {

    let newState = null

    switch (action.type) {
        case 'SET_STATE':
            newState = action.payload
            persistData(newState)
            return newState

        case 'ADD_TASK':
            newState = {
                ...state,
                tasks: {
                    ...state.tasks,
                    todo: [...state.tasks.todo, action.payload]
                }
            };
            persistData(newState)
            return newState

        case 'MARK_TASK_AS_COMPLETED':
            const [taskToBeCompleted] = state.tasks.todo.filter(task => task.id == action.payload)

            newState = {
                ...state,
                tasks: {
                    ...state.tasks,
                    todo: state.tasks.todo.filter(task => task.id !== action.payload),
                    completed: [...state.tasks.completed, taskToBeCompleted]
                }
            };
            persistData(newState)
            return newState

        case 'MARK_TASK_AS_TODO':
            const [taskToBeTodo] = state.tasks.completed.filter(task => task.id == action.payload)

            newState = {
                ...state,
                tasks: {
                    ...state.tasks,
                    todo: [...state.tasks.todo, taskToBeTodo],
                    completed: state.tasks.completed.filter(task => task.id !== action.payload)
                }
            };
            persistData(newState)
            return newState

        default:
            newState = { ...state }
            persistData(newState)
            return newState;
    }
}

const persistData = async state => {
    await AsyncStorage.setItem('TASKS', JSON.stringify(state))
}

export const AppContext = createContext()

const initialStateHardCoded = {
    tasks: {
        todo: [],
        completed: []
    }
}

export const AppProvider = props => {

    const initialState = { ...initialStateHardCoded }

    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        try {
            AsyncStorage.getItem('TASKS')
                .then(tasksJSON => {
                    if (tasksJSON !== null) {
                        const tasks = JSON.parse(tasksJSON);
                        dispatch({ type: 'SET_STATE', payload: tasks })
                    }
                    else {
                        dispatch({ type: 'SET_STATE', payload: initialStateHardCoded })
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }, []);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    )
}