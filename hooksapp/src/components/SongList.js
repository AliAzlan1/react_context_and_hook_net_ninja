import React,{ useState, useEffect } from 'react';
import uuid from 'uuid/dist/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title:'Hym for the weekend', id:'1'},
        { title:'Let her go', id:'2'},
        { title:'Closer', id:'3'},
    ]);
    const [age, setAge] = useState(15);
    useEffect(()=>{
        console.log('useEffect() run. Songs added')
    },[songs])
    useEffect(()=>{
        console.log('useEffect() run. Age added')
    },[age])
    const addSong = (title) => {
        setSongs([...songs, { title:title, id:uuid() } ])
    }
    return(
        <div className="song-list">
            <ul>
                {
                    songs.map(song =>{ 
                        return(<li key={song.id}>{song.title}</li>)
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
            <button onClick={ () => setAge(age+1) }>Add 1 to age:{age}</button>
        </div>      
    )
}

export default SongList;