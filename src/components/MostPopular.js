import React, { Component } from 'react';
import '../App.css';
class MostPopular extends Component {
  render() {
    return (
      <div className="homepage-top-rail rail">
    <section className="up">
        
    <h3 className="section-header rail-header" id="most-popular-title">Most Popular</h3>

    <div className="block-list text-s">
        

        <div className="item rail-article" id="rail-article-0">
             

            <div className="text-wrapper">

                <span className="eyebrow">
                    Article
                    
                     - McKinsey Quarterly
                            
                </span>

                <a className="item-title-link" href="http://www.mckinsey.com/global-themes/leadership/whats-missing-in-leadership-development">
                    <h4 className="headline" id="rail-article-title-0">What&rsquo;s missing in leadership development?</h4>
                 </a>

                

            </div>
        </div>

        <div className="item rail-article" id="rail-article-1">
            <div className="text-wrapper">
                <span className="eyebrow">
                    Article

                    - McKinsey Quarterly
                </span>
                <a className="item-title-link" href="http://www.mckinsey.com/global-themes/leadership/what-ceos-are-reading-in-2017">
                    <h4 className="headline" id="rail-article-title-1">What CEOs are reading in 2017</h4>
                 </a>
            </div>
        </div>
        <div className="item rail-article" id="rail-article-2">
            <div className="text-wrapper">

                <span className="eyebrow">
                    Article
                    
                     - McKinsey Quarterly
                            
                </span>

                <a className="item-title-link" href="http://www.mckinsey.com/business-functions/digital-mckinsey/our-insights/culture-for-a-digital-age">
                    <h4 className="headline" id="rail-article-title-2">Culture for a digital age</h4>
                 </a>

                

            </div>
        </div>
        <div className="item rail-article" id="rail-article-3">
            <div className="text-wrapper">

                <span className="eyebrow">
                    Article
                    
                     - McKinsey Quarterly
                            
                </span>

                <a className="item-title-link" href="http://www.mckinsey.com/business-functions/organization/our-insights/the-ceos-guide-to-competing-through-hr">
                    <h4 className="headline" id="rail-article-title-3">The CEO’s guide to competing through HR</h4>
                 </a>

                

            </div>
        </div>

        
        </div>
    </section>
    </div>
    );
  }
}

export default MostPopular;
