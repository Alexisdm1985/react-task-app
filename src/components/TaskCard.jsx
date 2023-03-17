const TaskCard = ({title, description, deleteTask}) => {

    return (
        <div className="task-card">
            <h1>{title}</h1>
            <p>{description}</p>
            <button
                onClick={deleteTask}
            >
                Remove Task
            </button>
        </div>
    )
};

export default TaskCard;