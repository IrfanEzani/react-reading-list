import React, { useState } from 'react'

const NewSongsForm = ({addSongs}) => {
    const [title, setTitle] = useState('')
    
    const handleSubmit = e => {
        e.preventDefault();
        addSongs(title)
    }
        return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}

export default NewSongsForm
