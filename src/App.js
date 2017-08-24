import React, { Component } from 'react';
import TopBar from './components/topBar.js'
import Carousel from './components/Carousel.js'
import Trending from './components/Trending.js'
import LatestThinking from './components/LatestThinking.js'
import MostPopular from './components/MostPopular.js'
import New_At from './components/New_At.js'
import JoinMck from './components/JoinMck.js'
import Footer from './components/footer.js'
import './index.css';
class App extends Component {
  render() {
    return (
      <div >
        <TopBar />
        <Carousel /> 
        <Trending /> 
        <LatestThinking /> 
        <MostPopular /> 
        <New_At /> 
        <JoinMck /> 
        <Footer /> 
      </div>
    );
  }
}

export default App;
