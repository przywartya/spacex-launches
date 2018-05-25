import { hot } from 'react-hot-loader';
import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'mobx-react';
import { observer, inject } from 'mobx-react';

import './styles/theme.sass';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';


@inject('mainStore')
@observer
class App extends React.Component {
  static propTypes = {
    mainStore: PropTypes.object,
  };

  get activeViewComponent() {
    switch (this.props.mainStore.activeViewName) {
      case 'list':
        return (
          <LaunchesList />
        );
      case 'details':
        return (
          <LaunchDetails />
        );
      default: return null;
    }
  }

  render() {
    return (
      <main>
        <div>
          {this.activeViewComponent}
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
