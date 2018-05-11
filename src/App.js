import { hot } from 'react-hot-loader';
import * as React from 'react';
import { launch, launches, launchPad, rocket } from './assets/ExampleLaunch';

import './styles/theme.sass';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchPad={launchPad}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    debugger
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main>
        {this.activeViewComponent}
      </main>
    );
  }
}

export default hot(module)(App);
