import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDetails.sass';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LaunchLabel from '../components/Launch/LaunchLabel';
import RocketMenu from '../components/Launch/RocketMenu';
import LaunchDescriptionEntry from '../components/Launch/LaunchDescriptionEntry';
import { observer, inject } from 'mobx-react';


@inject('mainStore')
@observer
class LaunchDetails extends React.Component {
  static propTypes = {
    mainStore: PropTypes.object,
  };

  render() {
    const launch = this.props.mainStore.launchState.launch;
    const launchPad = this.props.mainStore.launchState.launchPad;
    const rocket = this.props.mainStore.launchState.rocket;
    let descriptionLaunchPad = {
      "NAME": launchPad["full_name"].toUpperCase(),
      "LOCATION": launchPad["location"]["name"].toUpperCase(),
    };
    let descriptionEntryRocket = {
      "NAME": rocket["name"].toUpperCase(),
      "COMPANY": rocket["company"].toUpperCase(),
      "DIAMETER (m)": rocket["diameter"]["meters"],
      "MASS (kg)": rocket["mass"]["kg"],
      "FIRST FLIGHT": rocket["first_flight"].toUpperCase(),
      "COUNTRY": rocket["country"].toUpperCase(),
      "SUCCESS RATE (%)": rocket["success_rate_pct"],
      "COST PER LAUNCH ($)": rocket["cost_per_launch"]
    };
    return (
      <div>
        <div className="launch-details-navbar">
          <Navbar onBackClick={this.props.mainStore.handleBackClick}/>
        </div>
        <div className="launch-details-body">
          <div className="layout">
            <div className="layout__left">
              <LaunchLabel launch={launch}/>
            </div>
            <div className="layout__right">
              {launch.details ?
              <LaunchDescriptionEntry
              descriptionTitle="DETAILS"
              description={launch.details} /> : null}
              <LaunchDescriptionEntry
              descriptionTitle="ROCKET"
              description={rocket.description}
              descriptionDetailsList={descriptionEntryRocket}
              />
              <LaunchDescriptionEntry
              descriptionTitle="LAUNCH PAD"
              description={launchPad.details}
              descriptionDetailsList={descriptionLaunchPad}
              />
            </div>
          </div>
        </div>
        <RocketMenu launch={launch}/>
        <div className="launch-details-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchDetails;
