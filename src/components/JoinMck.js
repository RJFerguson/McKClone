import React, { Component } from 'react';
import '../App.css';
class JoinMck extends Component {
  render() {
    return (
      <section className="up one-up up-left">
    <h2 id="" className="section-header ">
        Join McKinsey
    </h2>
    <article className="text-xl block-list -no-dek">
        <div className="item">
            
            <div className="image">
                <img alt="Explore McKinsey" src={require('../images/karabo.jpg')} />
            </div>
            
            <div className="text-wrapper">
                <h3 className="headline">Explore McKinsey</h3>
                <div className="description">Come to McKinsey to do the best work, with the best teams and truly be at your best.</div>

                
                        <div className="cta-wrapper">
                        <a href='http://www.mckinsey.com/careers/home' className='cta   -arrow' >Careers</a>
                         <a href='http://www.mckinsey.com/careers/search-jobs' className='cta   -arrow' >Search and apply</a>
                         
                        </div>
                 
            </div>
        </div>
    </article>
</section>
    );
  }
}

export default JoinMck;
