import React from "react";
import TodoList from "../components/TodoList";
import renderer from "react-test-renderer";

it('renders correctly', () => {
    const tree = renderer
        .create(<TodoList/>)
        .toJSON();
    expect(tree).toMatchInlineSnapshot(`
    <div className="container">
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
`);
});


