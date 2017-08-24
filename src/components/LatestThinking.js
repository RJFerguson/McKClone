import React, { Component } from 'react';
import '../App.css';
class LatestThinking extends Component {
  render() {
    return (
      <div>
        <section className="up latest-thinking" role="region">
          <h2 className="section-header" id="latest-thinking-title">Featured insights</h2>
            <article className="item featured-thought text-xl">
               <div className="image">
                  <a className="item-title-link" href="http://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-roots-of-organic-growth">
                  <img alt="The roots of organic growth" src={require('../images/Roots.jpg')} />
                  </a>
              </div>
            
            <div className="text-wrapper">
                <div className="eyebrow">
                    Article
                      - McKinsey Quarterly  
                </div>

                <a className="item-title-link" href="http://www.mckinsey.com/business-functions/marketing-and-sales/our-insights/the-roots-of-organic-growth">
                    <h3 className="headline">The roots of organic growth</h3>
                 </a>
                <div className="-light description">
                    
                        <time>August 2017 &ndash; </time>
                    There are many paths to growth, and high performers take more than one—supported by reinforcing capabilities such as advanced analytics and digital customer-experience management.
               </div>
           </div>
        </article>
        <a href='http://www.mckinsey.com/featured-insights' className='cta   -arrow' >Read all of our featured insights</a>

</section>
      </div>
    );
  }
}

export default LatestThinking;



