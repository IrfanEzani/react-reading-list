import React, {useState} from 'react'
import NewSongsForm from './NewSongsForm'
const SongList = () => {

    const [songs, setSongs] = useState([
        {title : 'ssss'},
        {title : 'dddd'},
        {title : 'aaaa'},
    ])

    const addSongs = (title) => {
        setSongs([...songs, {title}])
    }
    return (
        <div className="song-list">
        <ul>
            {songs.map((song, idx) => {
               return <li key={idx}>{song.title}</li>
            })}
        </ul>
        <NewSongsForm addSongs={addSongs}/>
        </div>
    )
}

export default SongList
