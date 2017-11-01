import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Title = styled.p`
text-align: center;
font-family: 'Over the Rainbow', cursive;
font-size: 50px;
`


const Band = styled.div`
cursor: pointer;
a {
    color: black;
    font-family: "Scope One", cursive;
    text-decoration: none;
}
display: flex;
flex-direction: row-wrap;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
border: solid black;
border-radius: 1px; 
width: 400px;
height: 200px
`
const BandContainer = styled.div`
display: flex;
justify-items: flex-start;
flex-direction: row;
padding-left: 70px;
padding-right: 70px;
`

const ArtistList = (props) => {
    return (
        <div>

<Title>Tunr</Title>
        
        <BandContainer>
           
            {
                props.artist.map((artist) => {
                    return (
                    
                   <Band> 
                       <Link to={`/artists/${artist.id}`}>{artist.name}</Link>
                    </Band>
                    )
                })
            }

        </BandContainer>
        </div>
    );
};

export default ArtistList;