import React, { Component } from 'react';
import '../App.css';
class Footer extends Component {
  render() {
    return (
      <footer className="global-footer" lang="en">
    <section className="footer-main">
        <div className="main-inner">
            <div className="mck-logo-icon">
                McKinsey&Company
            </div>
            <div className="main-section">
                <div className="subscribe">
                    <span className="title">Sign up for email alerts</span>
                    <p>Select topics and stay current with our latest insights</p>
                    <form className="form-content subscribe-form" id="subscribeForm" method="post" action="https://www.mckinsey.com/user-registration/register" data-authenticated-action="https://www.mckinsey.com/user-registration/signin">
                        <div className="col-two form-group">
                            <input type="email" id="signupemail" name="signupemail" placeholder="Email address" data-rule-required="true" data-rule-email="true" 
                                data-msg-email="Please provide a valid email address." 
                                data-msg-required="Please provide your email address."/>
                            <span className="help-block"></span>
                            <span className="mck-alert-icon"></span>
                        </div>
                        <div className="col-one">
                            <input className="" type="submit" id="Submit" value="Submit" aria-label="submit For email alerts" />
                        </div>
                    </form>
                </div>
                <ul className="social-links">
					
							<li><a href='https://www.linkedin.com/company/mckinsey-&-company' id="foot-color" target='_blank' ><i className="fa fa-linkedin"></i> LinkedIn</a></li> 
							<li><a href='https://twitter.com/McKinsey' id="foot-color" target='_blank'> <i className="fa fa-twitter"></i> Twitter</a> </li> 
							<li><a href='https://www.facebook.com/mckinsey' id="foot-color" target='_blank'> <i className="fa fa-facebook-official"></i> Facebook</a> </li> 
							<li><a href='https://www.youtube.com/mckinsey' id="foot-color" target='_blank'> <i className="fa fa-youtube-play"></i> YouTube</a> </li> 
							<li><a href='http://www.mckinsey.com/Insights/rss.aspx' id="foot-color" target='_blank'> <i className="fa fa-rss"></i> RSS</a> </li> 
                </ul>
                <ul className="utility-links">
					
                    <li><a href='http://www.mckinsey.com/contact-us' id="foot-color" >Contact us</a> </li> 
                    <li><a href='http://www.mckinsey.com/frequently-asked-questions/our-insights' id="foot-color">FAQ</a> </li> 
                    <li><a href='http://www.mckinsey.com/privacy-policy' id="foot-color">Privacy policy</a> </li> 
                    <li><a href='http://www.mckinsey.com/terms-of-use' id="foot-color">Terms of use</a> </li> 
                    <li><a href='http://www.mckinsey.com/local-language-information' id="foot-color" >Local language information</a> </li> 
                </ul>
            </div>
        </div>
    </section>
    <section className="footer">
        <div className="footer-inner">
            <div className="footer-section">
                <div className="app-links">
                    <a href="https://itunes.apple.com/us/app/id674902075?mt=8" className="app-store" target="_blank">
                        <img id="foot-image" src={require('../images/appleappstore.svg')} alt="Download on the App Store"/>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.mckinsey.mckinseyinsights" className="google-play" target="_blank">
                        <img id="foot-image" src={require('../images/google.svg')} alt="Download Android app on Google Play"/>
                    </a>
                </div>
                <div className="app-description"><strong>McKinsey Insights</strong> - Get our latest thinking on your iPhone, iPad, or Android device. </div>
                
                <div className="copyright">
                    &copy; 1996-2017 McKinsey&nbsp;&amp;&nbsp;Company
                </div>
            </div>
        </div>
    </section>
    </footer>
    );
  }
}

export default Footer;
