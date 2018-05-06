import React from 'react';
import PropTypes from 'prop-types';

import './RocketMenu.sass';

class RocketMenu extends React.Component {
    static propTypes = {
        launch: PropTypes.object.isRequired,
    }
    render() {
        let backgroundImage = require('../../assets/rocket.png');
        return (
            <div className="rocket-menu" style={{backgroundImage: `url(${backgroundImage})`}}>
                <h2>MISSION LINKS</h2>
                <div className="rocket-menu__body">
                    <a href={this.props.launch.links['reddit_launch']}>
                        REDDIT CAMPAIGN
                    </a>
                    <a href={this.props.launch.links['presskit']}>
                        PRESSKIT
                    </a>
                    <a href={this.props.launch.links['video_link']}>
                        MISSION VIDEO
                    </a>
                </div>
            </div>
        );
    }
}

export default RocketMenu;
