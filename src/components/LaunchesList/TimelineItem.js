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

  get timelineContent() {
    const launch = this.props.launch;
    const direction = this.props.direction;
    const onClick = this.props.onLaunchClick;
    return (
      <div onClick={onClick} style={{"cursor": "pointer"}}>
        <h5>
          {format(parse(launch.launch_date_utc), "DD MMMM YYYY").toUpperCase()}
        </h5>
        <Arrow direction={direction}/>
        <div className="timeline-item__description">
          <h6 className="timeline-item__description__rocket">ROCKET: 
          <span style={{color: "white"}}>{
            this.add3Dots(launch.rocket.rocket_name.toUpperCase(), "20")
          }</span></h6>
          <h6 className="timeline-item__description__launch-site">LAUNCH SITE: 
          <span style={{color: "white"}}>{
            this.add3Dots(launch.launch_site.site_name_long.toUpperCase(), "20")
          }</span></h6>
        </div>
      </div>
    );
  };

  add3Dots(string, limit)
  {
    const dots = "...";
    if(string.length > limit)
    {
      string = string.substring(0,limit) + dots;
    }
    return string;
  }

  render() {
    return (
      <div className="timeline-item">
        {this.props.direction === 'right' ? this.timelineContent : <div></div>}
        {this.props.direction === 'right' ? <div></div> : this.timelineContent}
      </div>
    );
  }
}

export default TimelineItem;
