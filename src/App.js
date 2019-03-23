import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import axois from 'axios';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Card } from 'react-bootstrap';

const URL = "https://swapi.co/api/species";

class App extends Component {
  constructor(prop){
    super(prop)
    this.state = {data : {}}
  }

  componentDidMount(){
    axois.get(URL)
    .then(response => {
      this.setState( {data : response.data.results})
      console.log(response.data)
    })
  }

  renderSpecies(){
    return _.map(this.state.data , spechies => {
      return(
        <div class = "container" >
          <Card  bg="dark" text="white">
          <Card.Header ><strong>{spechies.name}</strong></Card.Header>
          <Card.Body>
            <Card.Text><strong>classification : </strong>{spechies.classification}</Card.Text>
            <Card.Text><strong>designation : </strong>{spechies.designation}</Card.Text>
            <Card.Text><strong>average_height : </strong>{spechies.average_height}</Card.Text>
            <Card.Text><strong>eye_colors : </strong>{spechies.eye_colors}</Card.Text>
            <Card.Text><strong>skin_colors : </strong>{spechies.skin_colors}</Card.Text>
            <Card.Text><strong>language : </strong>{spechies.language }</Card.Text>
          </Card.Body>
        </Card>
        <br></br>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <img src="http://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG32.png"/>;
        {this.renderSpecies()}
      </div>
    );
  }
}

export default App;
