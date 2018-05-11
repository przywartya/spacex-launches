import React from 'react';
import PropTypes from 'prop-types';

import './RocketMenu.sass';

class RocketMenu extends React.Component {
    static propTypes = {
        launch: PropTypes.object.isRequired,
    }
    render() {
        return (
            <div className="rocket-menu" style={{backgroundImage: `url(${require('../../assets/rocket.png')})`}}>
                <h2>MISSION LINKS</h2>
                <div className="rocket-menu__body">
                    <a href={this.props.launch.links['reddit_launch']} className="menu-link">
                        REDDIT CAMPAIGN
                    </a>
                    <a href={this.props.launch.links['presskit']} className="menu-link">
                        PRESSKIT
                    </a>
                    <a href={this.props.launch.links['video_link']} className="menu-link">
                        MISSION VIDEO
                    </a>
                </div>
            </div>
        );
    }
}

export default RocketMenu;
