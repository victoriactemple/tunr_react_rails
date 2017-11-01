import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import ArtistList from './components/ArtistList'
import Artist from './components/Artist'
import styled from 'styled-components';




class App extends Component {
  state = {
    artists: []
  }

    // need to 
 async componentWillMount() {
      try{ 
        const response = await axios.get('/api/artists')
        this.setState({artists: response.data})
      } catch(error) {
        console.log(error)
      }

  }

  render() {

    const ArtistListComponenet = () => (<ArtistList artist={this.state.artists}/>)
    return (
      <Router>
      <div>
        <NavBar />
        <hr />

 

        <Switch>
          <div>
        
            <Route exact path="/" render={ArtistListComponenet} />
            <Route exact path="/artists/:artist_id" component={Artist} />
            </div>
        </Switch>


      </div>
      </Router>
    );
  }
}

export default App;
