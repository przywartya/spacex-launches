import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.sass';
import TimelineItem from './TimelineItem';

class Timeline extends React.Component {
  static propTypes = {
    filteredLaunches: PropTypes.array.isRequired,
    onLaunchClick: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="launches-timeline">
        <div className="launches-timeline__vertical-line"></div>
        {this.props.filteredLaunches.map((launch, index) => {
        return <TimelineItem launch={launch} onLaunchClick={this.props.onLaunchClick}
          direction={index % 2 === 0 ? 'right': 'left' }/>;
        })}
      </div>
    );
  }
}

export default Timeline;
