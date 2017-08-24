import React, { Component } from 'react';
import "../App.css"


class Trending extends Component {
  render() {
    return (
      <div >
        <aside className="trending-topics -no-overlap" role="complementary" aria-labelledby="trending-header">
    <header id="trending-header" className="box-title">Trending Topics</header>

    <ul className="block-list trending-list">
        <li id="main_0_latest_thinking_0_link1Container">
            <a href='http://www.mckinsey.com/global-themes/sectors-without-borders' className='-arrow' >Sectors Without Borders</a>
        </li>
        <li id="main_0_latest_thinking_0_link2Container">
            <a href='http://www.mckinsey.com/global-themes/internet-of-things/our-insights' className='-arrow' >Internet of Things</a>
        </li>
        <li id="main_0_latest_thinking_0_link3Container">
            <a href='http://www.mckinsey.com/global-themes/employment-and-growth' className='-arrow' >Employment & Growth</a>
        </li>
    </ul>
</aside>

      </div>
    );
  }
}

export default Trending;
