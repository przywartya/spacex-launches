import { hot } from 'react-hot-loader';
import * as React from 'react';
import { launch, launchPad, rocket } from './assets/ExampleLaunch';

import './styles/theme.sass';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      launches: []
    };
    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  async componentDidMount() {
    const launches = await this.fetchLaunchesList();
    this.setState({
      launches: launches
    });
  }

  get activeViewComponent() {
    const { launches, viewName } = this.state;
    debugger
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
    this.setState({ viewName: 'list' });
  }

  async fetchLaunchesList() {
    try {
      const URL = "https://api.spacexdata.com/v2/launches";
      const fetchResult = fetch(URL);
      const response = await fetchResult;
      return await response.json();
    } catch(e) {
      throw Error(e);
    }
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
