import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
const TodoForm = ({ handleAdd }) => {
    const [title, setTitle] = useState('')

    const hangdleInput = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleAdd({
            id: uuidv4(),
            title: title,

        })
        setTitle('')
    }
    //style
    const style = {
        background: 'rgb(240, 240, 240)',
        color: 'black'
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder='nhap....' onChange={hangdleInput} value={title} required />
            <input type="submit" value="Add" style={style} />
        </form>
    )
}

export default TodoForm