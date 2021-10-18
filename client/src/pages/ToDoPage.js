import React, {useState} from 'react';
import ToDoForm from "../components/ToDoForm";
import ToDoTask from "../components/ToDoTask";

const ToDoPage = () => {
    const [todoList, setTodoList] = useState([])

    const addTask = (userInput) => {
        if(userInput) {
            const newTask = {
                id: Math.random().toString(36).substr(2, 9),
                task: userInput,
                flag: false
            }
            setTodoList([...todoList, newTask])
            console.log(newTask)
        }
    }
    const remoteTask = (id) => {
        setTodoList([...todoList.filter((list)=> list.id !== id)])
    }

    const changeFlag = (id) => {
        setTodoList([
            ...todoList.map((list) =>
                list.id === id ? {...list, flag: !list.flag}: {...list}
            )
        ])
    }
    return (
        <div>
            <h1>To Do: {todoList.length}</h1>
            <ToDoForm addTask={addTask}
            />
            {todoList.map((list) => {
                return (
                    <ToDoTask
                        list={list}
                        key={list.id}
                        remoteTask={remoteTask}
                        changeFlag={changeFlag}
                    />
                )
            })}
        </div>
    )

};

export default ToDoPage;