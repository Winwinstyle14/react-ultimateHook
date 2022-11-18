import React, { useState } from 'react'
import TodoItem from './TodoItem'

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, title: 'vc1' },
        { id: 2, title: 'vc2' },
        { id: 3, title: 'vc3' },
        { id: 4, title: 'vc4' },

    ])


    return (
        <div className="todo-list">
            <ul>
                {todos.map(item => (
                    <TodoItem todo={item}></TodoItem>
                ))}
            </ul>

        </div>
    )
}

export default Todo