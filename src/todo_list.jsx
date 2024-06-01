import React, { useState } from 'react';

function TodoList() {
    const [task, setTask] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [del,setdel]=useState("");

    const handleSubmit = () => {
        if (task.trim() !== "") {
            setTodoList([...todoList, task]);
            setTask(""); // Clear the input after adding the task
        }
    };
    const handledelete=(props)=>{
        let newtodo=[];
            todoList.map((todo)=>{
                if(todo!=props){
                      newtodo.push(todo);
                }
            })
            setTodoList(newtodo);
            setdel("");
    }

    return (
        <div>
            <h1>Enter a Task</h1>
            <input 
                type='text' 
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type='button' onClick={handleSubmit}>Add a Todo</button>
            <ul>
                {todoList.map((todo) => (
                    <div>
                   <h4>{todo}</h4>  
                   <button onClick={ ()=>{handledelete(todo)}}>Done</button>                  
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
