import React, {useState} from 'react';
import ToDoForm from "../components/ToDoForm";
import ToDoTask from "../components/ToDoTask";


const ToDoPage = () => {
    const [todoList, setTodoList] = useState([])
    const [deleteItem, setDeleteItem] = useState([])

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
        setTodoList([...todoList.filter((item)=> item.id !== id)])
    }

    const changeFlag = (id) => {
        setTodoList([
            ...todoList.map((item) =>
                item.id === id ? {...item, flag: !item.flag} : {...item}),
        ])
    }
    const delItem = (id) => {
        const indexDel = todoList.findIndex((item) => item.id === id)
        const item = {...todoList.splice(indexDel, 1)}
        console.log(item)
        //const itemPush = {...todoList.push(item)}

        setTodoList([...todoList, item])
        /*setTodoList([
            ...todoList, ...todoList.splice(indexDel, 1)
        ])*/
        //setTodoList([...todoList.push((item=> item.id !== id))])

    }
    /*const x = (id) => {
        changeFlag()
        delItem()
    }*/
    const countTask = {
        marginLeft: 20,
        textAlign: "center"
    }

    return (
        <div className="block-todo">
            <h1 style={countTask}>To Do: {todoList.length}</h1>
            <ToDoForm addTask={addTask}/>
            {todoList.map((item) => {
                return (
                    <ToDoTask
                        item={item}
                        key={item.id}
                        remoteTask={remoteTask}
                        changeFlag={delItem}

                    />
                )
            })}
        </div>
    )

};

export default ToDoPage;