import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'vc1' },
        { id: 2, title: 'vc2' },
        { id: 3, title: 'vc3' },
        { id: 4, title: 'vc4' },

    ])

    const handleAdd = (item) => {
        setTodos([...todos, item])
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }


    return (
        <div className="todo-list">
            <TodoForm handleAdd={handleAdd}></TodoForm>
            <ul>
                {todos.map(item => (
                    <TodoItem key={item.id} todo={item} handleDelete={handleDelete} ></TodoItem>
                ))}
            </ul>

        </div>
    )
}

export default Todo