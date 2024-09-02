import { useState } from "react";

export function TodoList () {
    const [tasks, setTasks] = useState([
        {
            name: "do homework",
            completed: false,
        }, 
        {
            name: "eat bhaat",
            completed: false,
        },
    ]);
    const [inputTask, setinputTask] = useState(null);

    const handleInputNewTask = (e) => {
        const value = e.target.value /// user le input gareko value esma auxa
        setinputTask(value);
    };

    const handleAddNewTask = () => {
        setTasks([...tasks, { name: inputTask, completed: false }]);
    };

    const handleRemoveTask = (taskIndex) => {
        const filtered = tasks.filter((t, i) => i !== taskIndex);
        setTasks(filtered);
    }

    const handleCompleteTask = (taskIndex) => {
        const newTasks = tasks.map((task, i) => {
            if (taskIndex !== i) return task;
            return {
                ...task,
                completed: true
            };
        });
        setTasks(newTasks);
        console.log(newTasks);
    }

    return (
        <div>
            <h1>Task Manager</h1>
            <div>
                <label>
                    Enter task: 
                    <input onInput={handleInputNewTask} />
                </label>
                <button onClick={handleAddNewTask} >add task</button>
            </div>
            <ul>
                {
                    tasks.map((task, taskIndex) => {
                        return (
                            <li>
                                <span>{task.name}</span>
                                <button
                                    onClick={() => handleRemoveTask(taskIndex)}
                                >remove task</button>
                                <button
                                    onClick={() => handleCompleteTask(taskIndex)}
                                >
                                    complete task
                                </button>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}