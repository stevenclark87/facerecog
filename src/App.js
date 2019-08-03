import React, { Component } from 'react';
import Navigation from './components/navigation/navigation'
import Logo from './components/logo/logo'
import Rank from './components/rank/rank'
import FaceRecognition from './components/FaceRecognition/facerecognition'
import ImageLinkForm from './components/imagelinkform/imagelinkform'
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '0bb1dee1c71a4de7badc6201000b3de0'
 });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageURL: ''
    }
  }

  onInputChange = (event) => {
      this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageURL: this.state.input})
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", this.state.input).then(
    function(response) {
      console.log(response);
    },
    function(err) {
      // there was an error
    }
  );
  }
  render() {
  return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
      <FaceRecognition imageURL={this.state.imageURL} />
    </div>
  );
}
}

export default App;
