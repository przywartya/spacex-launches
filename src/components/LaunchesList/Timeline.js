import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.sass';
import TimelineItem from './TimelineItem';
import { observer, inject } from 'mobx-react';


@inject('mainStore')
@observer
class Timeline extends React.Component {
  static propTypes = {
    mainStore: PropTypes.object,
  };

  render() {
    return (
      <div className="timeline">
        <div className="timeline__vertical-line"></div>
        {this.props.mainStore.listState.filteredLaunches.map((launch, index) => {
        return <TimelineItem launch={launch} key={index} onLaunchClick={this.props.mainStore.handleLaunchClick}
          direction={index % 2 === 0 ? 'right': 'left' }/>;
        })}
      </div>
    );
  }
}

export default Timeline;
