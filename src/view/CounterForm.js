import React from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

import './CounterForm.sass';

import CounterRender from './CounterRender';

class Home extends React.Component {
  state = {
    from: 0,
    to: 0,
    classNames: ["wrapper"],
  };

  handleFrom(value) {
    if (value <= 59) {
        this.setState({from: value});
    }
  };

  handleTo(value) {
    if (value <= 60) {
        this.setState({to: value});
    }
  };

  setBackgroundOnFinish() {
    this.setState({classNames: ["wrapper", "success"].join(' ')});
  };

  render() {
    return (
      <div className={this.state.classNames}>
        <div className="one">
            <label for="from">Start (in minutes): </label>
            <NumericInput id="from" min={0} max={60} value={this.state.from} 
             onChange={this.handleFrom.bind(this)}/>
        </div>
        <div className="two">
            <label for="to">End (in minutes): </label>
            <NumericInput id="to" min={0} max={60} value={this.state.to} 
             onChange={this.handleTo.bind(this)}/>
        </div>
        {this.state.from < this.state.to 
        ? <CounterRender from={this.state.from} to={this.state.to} 
           onSuccess={this.setBackgroundOnFinish.bind(this)}/>
        : 'Use this form to render a counter :)'
        }
      </div>
    );
  }
}

export default Home;
