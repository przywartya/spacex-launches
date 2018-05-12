import React from 'react';
import PropTypes from 'prop-types';
import parse from 'date-fns/parse';
import { format } from 'date-fns';

import './TimelineItem.sass';
import Arrow from '../Arrow';

class TimelineItem extends React.Component {
  static propTypes = {
    direction: PropTypes.string.isRequired,
    launch: PropTypes.object.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  render() {
    const launch = this.props.launch;
    const onClick = this.props.onLaunchClick;
    return (
      <div className="timeline-item">
          <h5>
            {format(parse(this.props.launch.launch_date_utc), "DD MMMM YYYY").toUpperCase()}
          </h5>
          <Arrow direction={this.props.direction}/>
          <div onClick={onClick} className="timeline-item__description">
            <h6 className="timeline-item__description__rocket">ROCKET:
              <span style={{color: "white"}}> {launch.rocket.rocket_name.toUpperCase()}</span>
            </h6>
            <h6 className="timeline-item__description__launch-site">LAUNCH SITE:
              <span style={{color: "white"}}> {launch.launch_site.site_name_long.toUpperCase()}</span>
            </h6>
        </div>
      </div>
    );
  }
}

export default TimelineItem;
