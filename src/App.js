import { hot } from 'react-hot-loader';
import * as React from 'react';
import { launch, launchPad, rocket } from './assets/ExampleLaunch';
import LaunchDetails from './view/LaunchDetails';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <main>
        <LaunchDetails
          launch={launch}
          launchPad={launchPad}
          rocket={rocket}
        />
      </main>
    );
  }
}

export default hot(module)(App);
