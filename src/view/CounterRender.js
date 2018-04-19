import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import BouncingDoggo from './BouncingDoggo';

import './CounterForm.sass';

// default ball style, CSS in JS
const style = {
    display: 'block',
    position: 'relative',
    width: 50,
    height: 50,
    borderRadius: '50%',

    backgroundColor: '#00CFFF',
};

// renders a Ball at a certain height
const Ball = ({ y }) => (
    <div
        style={{
        ...style,
        top: y,
        backgroundImage: `url(${"https://avatars0.githubusercontent.com/u/10532199?s=400&v=4"})`,
        backgroundSize: 'cover',
        transform: 'scaleX(-1)',
        }}
    />
);

class CounterRender extends React.Component {
  static propTypes = {
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
  }

  state = {
    minutes: Number.parseInt(this.props.from),
    seconds: 0,
    isRunning: true,
    isFinished: false,
  };

  componentDidMount() {
    this.counter = setInterval(
      () => this.tick(), 1000
    );
  };

  componentWillUnmount() {
    clearInterval(this.counter);
  };

  tick() {
    if (this.state.isRunning) {
      this.setState((prevState, props) => {
        let resultSeconds = prevState.seconds + 1;
        let resultMinutes = prevState.minutes;
        if (resultSeconds == 60) {
          resultSeconds = 0;
          resultMinutes += 1;
        }
        return {
          minutes: resultMinutes,
          seconds: resultSeconds,
        };
      });
      if (this.state.minutes == this.props.to) {
        this.setState({
            isRunning: false,
            isFinished: true,
        });
        this.props.onSuccess && this.props.onSuccess();
      }
    }
  };

  switchTimer() {
    if (this.state.isFinished) {
        this.setState((prevState, props) => {
            return {
                minutes: Number.parseInt(props.from),
                seconds: 0,
                isRunning: true,
                isFinished: false
            }
        });
    } else {
        this.setState((prevState, props) => {
            return {
              isRunning: !prevState.isRunning
            }
        });
    }
  };

  render() {
    return (
        <div className="four" onClick={this.switchTimer.bind(this)}>
            <div className="bounce">
                <BouncingDoggo
                    duration={1000}
                    start={-80}
                    end={0}
                    isRunning={this.state.isRunning}
                    >
                    { value => <Ball y={value} /> }
                </BouncingDoggo>
            </div>
            <Counter 
            minutes={this.state.minutes} 
            seconds={this.state.seconds}
            isRunning={this.state.isRunning}/>
        </div>
    );
  }
}
  
export default CounterRender;
