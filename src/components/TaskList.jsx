import { useContext } from "react"
import { TaskContent } from "../context/taskContent"
import TaskCard from "./TaskCard";

export default function TaskList(){

    const {tasks, deleteTask} = useContext(TaskContent);

    if (tasks.length < 1) {
        return <h1>You don't have any tasks !</h1>
    }

    return (
        <div className="task-list">
            {tasks.map( ({id, title, description}) => (
                <TaskCard key={id} title={title} description={description} deleteTask={() => deleteTask(id)}/>
            ))}
        </div>
    )
};