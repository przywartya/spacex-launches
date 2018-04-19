import React from 'react';
import PropTypes from 'prop-types';

import './Counter.sass';

class Counter extends React.Component {
  static propTypes = {
    minutes: PropTypes.number.isRequired,
    seconds: PropTypes.number.isRequired,
    isRunning: PropTypes.bool.isRequired,
  }
  
  timerLayout() {
    let minutes = this.props.minutes;
    let seconds = this.props.seconds;
    return ('0'  + minutes).slice(-2)+':'+('0' + seconds).slice(-2);
  }

  counterState() {
    if (this.props.isRunning) {
      return "running";
    } else {
      return "stopped";
    }
  };

  render() {
    const classNames = [
      "counter",
      this.counterState(),
    ].join(' ');
    return (
      <div className={classNames}>
          {this.timerLayout()}
      </div>
    );
  }
}
  
export default Counter;
