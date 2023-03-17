import { createContext, useEffect, useState } from "react";
import {nanoid} from 'nanoid';
import { tasks as taskData } from "../data/tasksDB";

export const TaskContent = createContext();

export function TaskContentProvider(props) {

    // Load data
    const [tasks, setTasks] = useState([]);

    useEffect( ()=> {
        setTasks(taskData)
    }, []);

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter( (item) => item.id !== id));
    };

    // Create Task
    const createTask = ({title, description}) => {

        if (!title || !description) return console.log('falta title o description');

        const newTask = {
            title,
            description,
            id : nanoid(3)
        }

        setTasks([newTask, ...tasks]);
    };

    // Context value
    const contextValue = {
        tasks,
        deleteTask,
        createTask
    }

    return (
        <TaskContent.Provider value ={contextValue}>
            {props.children}
        </TaskContent.Provider>
    )

};
