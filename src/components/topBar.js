import React, { Component } from 'react';
class TopBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
  
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
      <a className="navbar-brand" href="#">McKinsey&Company</a>
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Industries</a>
          <ul className="dropdown-menu">
            <li><a href="#">Advanced Electronics</a></li>
            <li><a href="#">Aerospace & Defense</a></li>
            <li><a href="#">Automotive & Assembly</a></li>
            <li><a href="#">Capital Projects & Infrastructure</a></li>
            <li><a href="#">Chemicals</a></li>
            <li><a href="#">Consumer Packaged Goods</a></li>
            <li><a href="#">Electric Power & Natural Gas</a></li>
            <li><a href="#">Financial Services</a></li>
            <li><a href="#">Healthcare Systems & Services</a></li>
            <li><a href="#">Capital Projects & Infrastructure</a></li>
            <li><a href="#">High Tech</a></li>
            <li><a href="#">Media & Entertainment</a></li>
            <li><a href="#">Metals & Mining</a></li>
            <li><a href="#">Oil & Gas</a></li>
            <li><a href="#">Paper & Forest Products</a></li>
            <li><a href="#">Healthcare Systems & Services</a></li>
            <li><a href="#">Capital Projects & Infrastructure</a></li>
            <li><a href="#">Pharmaceuticals & Medical Products</a></li>
            <li><a href="#">Private Equity & Principal Investors</a></li>
            <li><a href="#">Public Sector</a></li>
            <li><a href="#">Retail</a></li>
            <li><a href="#">Semiconductors</a></li>
            <li><a href="#">Social Sector</a></li>
            <li><a href="#">Telecommunications</a></li>
            <li><a href="#">Travel, Transport & Logistics</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Business Functions</a>
          <ul className="dropdown-menu">
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Implementation</a></li>
            <li><a href="#">Learning Programs for CLients</a></li>
            <li><a href="#">Marketing & Sales </a></li>
            <li><a href="#">Operations</a></li>
            <li><a href="#">Organizations</a></li>
            <li><a href="#">Recovery</a></li>
            <li><a href="#">Risk</a></li>
            <li><a href="#">Strategy</a></li>
            <li><a href="#">High Tech</a></li>
            <li><a href="#">Sustainability</a></li>
            
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Global Themes</a>
          <ul className="dropdown-menu">
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Design</a></li>
            <li><a href="#">Implementation</a></li>
            <li><a href="#">Learning Programs for CLients</a></li>
            <li><a href="#">Marketing & Sales </a></li>
            <li><a href="#">Operations</a></li>
            <li><a href="#">Organizations</a></li>
            <li><a href="#">Recovery</a></li>
            <li><a href="#">Risk</a></li>
            <li><a href="#">Strategy</a></li>
            <li><a href="#">High Tech</a></li>
            <li><a href="#">Sustainability</a></li>
          </ul>
        </li>
        <li><a href="#">Locations</a></li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">Careers</a>
          <ul className="dropdown-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Learning Programs for CLients</a></li>
            <li><a href="#">Marketing & Sales </a></li>
            <li><a href="#">Operations</a></li>
          </ul>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#">About Us</a>
          <ul className="dropdown-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Search</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Learning Programs for CLients</a></li>
            <li><a href="#">Marketing & Sales </a></li>
            <li><a href="#">Operations</a></li>
          </ul>
        </li>
      </ul>
      
    </div>
    
  </div>
  
</nav>
  
    );
  }
}

export default TopBar;
