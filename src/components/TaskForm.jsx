import { createRef, useContext } from "react";
import { TaskContent } from "../context/taskContent";


const TaskForm = () => {

    const {createTask} = useContext(TaskContent);
    const inputRef = createRef();
    const areaRef = createRef();

    const handleSumit = (e) => {
        
        e.preventDefault();
        const formData = new FormData(e.target);
        const taskObject = {}
        
        formData.forEach( (value, key) => taskObject[key] = value);
        const {title, description } = taskObject;
        
        if (!title || !description) return alert('Falta titulo o descripcion');
        inputRef.current.value = '';
        areaRef.current.value = '';
        inputRef.current.focus();
        createTask(taskObject);
    };


    return (
        <form onSubmit={ handleSumit }>
            <div className="input-section">
                <input type="text" placeholder="Write your task"
                    autoFocus
                    name="title"
                    ref={inputRef}
                    
                    />
                <button 
                    type="submit"
                    disabled={inputRef && areaRef ? false : true}
                    >
                    Save
                </button>
            </div>
            
            <textarea placeholder="Write your description"
                name="description"
                ref={areaRef}
                >

            </textarea>
        </form>
    )
};

export default TaskForm;