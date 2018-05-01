import React from 'react';

import './Footer.sass';

class Footer extends React.Component {
  render() {
    return (
        <div className="launch-details__footer">
            <div className="footer__title">
                <h6>FOLLOW SPACEX</h6>
                <div className="footer__links">
                    <a href="https://twitter.com/spacex">TWITTER</a>
                    <a href="https://www.youtube.com/user/spacexchannel">YOUTUBE</a>
                    <a href="https://www.flickr.com/photos/spacex/">FLICKR</a>            
                    <a href="https://www.instagram.com/spacex/">INSTAGRAM</a>
                </div>
            </div>
            <div className="footer__signature">
                <h6>2018 SPACE EXPLORATION TECHNOLOGIES CORP.</h6>
            </div>
      </div>
    );
  }
}

export default Footer;
