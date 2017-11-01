import React from 'react';
import { Link } from 'react-router-dom'
import Song from './Song'

const SongList = (props) => {
    return (
        <div>
            {
                props.songs.map((song) => {
                    return (
                        <Song song={song}  />
                    
                    )
                })
            }
            
        </div>
    );
};

export default SongList