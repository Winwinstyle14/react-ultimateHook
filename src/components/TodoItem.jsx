import React from 'react'

const TodoItem = ({ todo, handleDelete }) => {
    // const todo = props.todo
    //style
    const style = {
        background: 'rgb(240, 240, 240)',
        color: 'black'
    }
    return (
        <li onClick={() => { handleDelete(todo.id) }} style={style}>{todo.title}</li>
    )
}

export default TodoItem