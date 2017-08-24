import React, { Component } from 'react';
import "../App.css"

class Carousel extends Component {
  render() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner" role="listbox">
          <div className="item active">
          <img src={require('../images/MD-2016.png')} alt="..."/>
          <div className="carousel-caption">
          This is a fake slide show.
        </div>
              </div>
          <div className="item">
            <img src={require('../images/Digital-thumb.png')} alt="..."/>
            <div className="carousel-caption">
              This is really fake.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;


