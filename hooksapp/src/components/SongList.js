import React,{ useState } from 'react';
import uuid from 'uuid/dist/v1';

const SongList = () => {
    const [songs, setsongs] = useState([
        { title:'Hym for the weekend', id:'1'},
        { title:'Let her go', id:'2'},
        { title:'Closer', id:'3'},
    ]);
    const addSong = () => {
        setsongs([...songs, { title:'New song added', id:uuid() } ])
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
            <button onClick={addSong}>Add new song</button>
        </div>      
    )
}

export default SongList;