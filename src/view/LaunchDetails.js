import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDetails.sass';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import LaunchLabel from '../components/Launch/LaunchLabel';
import RocketMenu from '../components/Launch/RocketMenu';
import LaunchDescriptionEntry from '../components/Launch/LaunchDescriptionEntry';

class LaunchDetails extends React.Component {
  static propTypes = {
    rocket: PropTypes.object.isRequired,
    launch: PropTypes.object.isRequired,
    launchPad: PropTypes.object.isRequired,
  }

  render() {
    let descriptionEntryLaunchPad = [
      {"NAME": this.props.launchPad["full_name"].toUpperCase()},
      {"LOCATION": this.props.launchPad["location"]["name"].toUpperCase()}
    ]
    let descriptionEntryRocket = [
      {"NAME": this.props.rocket["name"].toUpperCase()},
      {"COMPANY": this.props.rocket["company"].toUpperCase()},
      {"DIAMETER (m)": this.props.rocket["diameter"]["meters"]},
      {"MASS (kg)": this.props.rocket["mass"]["kg"]},
      {"FIRST FLIGHT": this.props.rocket["first_flight"].toUpperCase()},
      {"COUNTRY": this.props.rocket["country"].toUpperCase()},
      {"SUCCESS RATE (%)": this.props.rocket["success_rate_pct"]},
      {"COST PER LAUNCH ($)": this.props.rocket["cost_per_launch"]},
    ]
    return (
      <div>
        <div className="launch-details-navbar">
          <Navbar/>
        </div>
        <div className="launch-details-body">
          <div className="layout">
            <div className="layout__left">
              <LaunchLabel launch={this.props.launch}/>
            </div>
            <div className="layout__right">
              <LaunchDescriptionEntry
              descriptionTitle="DETAILS"
              description={this.props.launch.details}
              />
              <LaunchDescriptionEntry
              descriptionTitle="ROCKET"
              description={this.props.rocket.description}
              descriptionDetailsList={descriptionEntryRocket}
              />
              <LaunchDescriptionEntry
              descriptionTitle="LAUNCH PAD"
              description={this.props.launchPad.details}
              descriptionDetailsList={descriptionEntryLaunchPad}
              />
            </div>
          </div>
        </div>
        <RocketMenu launch={this.props.launch}/>
        <div className="launch-details-footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default LaunchDetails;
