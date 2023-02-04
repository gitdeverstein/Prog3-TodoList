import React, { useState } from "react";
import './TodoList.css'
function TodoList() {
    const [todoTasks, setTodoTasks] = useState([]);
    const [doneTasks, setDoneTasks] = useState([]);
    const [taskInput, setTaskInput] = useState("");

    const handleTaskInput = (event) => {
        setTaskInput(event.target.value);
    };

    const handleAddTask = () => {
        if (!taskInput) {
            return;
        }

        setTodoTasks([...todoTasks, taskInput]);
        setTaskInput("");
    };

    const handleTaskComplete = (index) => {
        setDoneTasks([...doneTasks, todoTasks[index]]);
        setTodoTasks(todoTasks.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="adding">
                <input type="text" value={taskInput} onChange={handleTaskInput} />
                <button onClick={handleAddTask}>Add</button>
            </div>
            <div className="todo">
                <h2>Todo</h2>
                <ul>
                    {todoTasks.map((task, index) => (
                        <li key={index}>
                            <input type="checkbox" onClick={() => handleTaskComplete(index)} />
                            {task}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="done">
                <h2>Done</h2>
                <ul>
                    {doneTasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
