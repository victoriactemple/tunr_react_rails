import React from 'react'
import styled from 'styled-components'

const SongContainer = styled.div`
text-align: center
`


const Song = (props) => {
    return (
        <SongContainer>
            
           <p>{props.song.title}</p>
           <div><audio controls src = {props.song.preview_url} /></div>

        </SongContainer>
    );
};

export default Song;