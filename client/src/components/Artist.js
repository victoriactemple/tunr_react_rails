import React, { Component } from 'react'
import axios from "axios"
import SongList from './SongList'
import styled from 'styled-components'

const BandImage = styled.div`
text-align: center;
img{
    max-width: 600px
}
`

const BandContainer = styled.div`
text-align: center;
font-family: 'Italiana', serif;

`

class Artist extends Component {

// there are many ways to retrieve this clientInformation. we are going to make api call
state = {
    // default state for an object is an empty object {}
    artist: {},
    songs: []
}

async componentWillMount(){
    try {
        // api endpoint: /api/artists/:artist_id
        const { artist_id } = this.props.match.params
        const response = await axios.get(`/api/artists/${artist_id}`)
        this.setState({artist: response.data})
        
    } catch(error) {
        console.log(error)
    }
    try {
        const { artist_id } = this.props.match.params
        const response = await axios.get(`/api/artists/${artist_id}/songs`)
        console.log(response)
        this.setState({songs: response.data})
    } catch(error) {
        console.log(error)
    }
}

    render() {
        return (
            <BandContainer>
               <h2>{this.state.artist.name}</h2>
               <h4>{this.state.artist.nationality}</h4>
               <BandImage>
               <img src={this.state.artist.photo_url} />
               </BandImage>
             
             <SongList songs={this.state.songs} />
            </BandContainer>
        );
    }
}

export default Artist;