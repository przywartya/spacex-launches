import React from 'react';
import PropTypes from 'prop-types';

import Countdown from 'react-countdown-now';
import parse from 'date-fns/parse';
import { format } from 'date-fns';

import './LaunchDetails.sass';
import ArrowPointer from '../assets/arrow_pointer.svg';
import Logo from '../assets/space_x_logo_bw_centered.svg';

class LaunchDetails extends React.Component {
  static propTypes = {
    rocket: PropTypes.object.isRequired,
    launch: PropTypes.object.isRequired,
    launchPad: PropTypes.object.isRequired,
  }

  state = {
  };

  render() {
    let launchDate = this.props.launch["launch_date_utc"]
    let launchDateString = format(parse(launchDate), "DD MMMM YYYY").toUpperCase();
    return (
      <div className="launch-details">
        <div className="launch-details__navbar">
          <div className="navbar__go-back">
            <ArrowPointer/>
            <div className="arrow"></div>
            <h5>GO BACK</h5>
          </div>
          <div className="navbar__logo">
            <Logo width="256px"/>  
          </div>
          <div className="right"></div>
        </div>
        <div className="launch-details__body">
          <div className="body-column-left">
            <div>
              <h5>{launchDateString}</h5>
            </div>
            <div>
              <h1>IRIDIUM NEXT 5 LAUNCH</h1>
              <Countdown date={launchDate} 
              renderer={
                props => 
                  <p>
                    {props.days} DAYS {props.hours} HRS {props.minutes} MINS {props.seconds} SECS TO START
                  </p>
              }/>
            </div>
            <div>
              <img src={this.props.launch.links['mission_patch']} width="256px"/>
            </div>
          </div>
          <div className="body-column-right">
              <div className="description-title">
                <h5>DETAILS</h5>
              </div>
              <div className="description-body">
                <p>
                  {this.props.launch["details"]}
                </p>
              </div>
              <div className="description-title">
                <h5>ROCKET</h5>
              </div>
              <div className="description-body">
                <div className="description-details">
                  <div className="details-left">
                    <div>
                      <span className="detail-key">NAME: </span>
                      <span className="detail-value">{this.props.rocket["name"].toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="detail-key">COMPANY: </span>
                      <span className="detail-value">{this.props.rocket["company"].toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="detail-key">DIAMETER: </span>
                      <span className="detail-value">{this.props.rocket["diameter"]["meters"]}M</span>
                    </div>
                    <div>
                      <span className="detail-key">MASS: </span>
                      <span className="detail-value">{this.props.rocket["mass"]["kg"]}KG</span>
                    </div>
                  </div>
                  <div className="details-right">
                    <div>
                      <span className="detail-key">FIRST FLIGHT: </span>
                      <span className="detail-value">{this.props.rocket["first_flight"].toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="detail-key">COUNTRY: </span>
                      <span className="detail-value">{this.props.rocket["country"].toUpperCase()}</span>
                    </div>
                    <div>
                      <span className="detail-key">SUCCESS RATE: </span>
                      <span className="detail-value">{this.props.rocket["success_rate_pct"]}%</span>
                    </div>
                    <div>
                      <span className="detail-key">COST PER LAUNCH: </span>
                      <span className="detail-value">${this.props.rocket["cost_per_launch"]}</span>
                    </div>
                  </div>
                </div>
                <p>
                  {this.props.rocket["description"]}
                </p>
              </div>
              <div className="description-title">
                <h5>LAUNCH PAD</h5>
              </div>
              <div className="description-body">
              <div className="description-details">
                  <div className="details-left">
                    <div>
                      <span className="detail-key">NAME: </span>
                      <span className="detail-value">{this.props.launchPad["full_name"].toUpperCase()}</span>
                    </div>
                  </div>
                  <div className="details-right">
                    <div>
                      <span className="detail-key">LOCATION: </span>
                      <span className="detail-value">{this.props.launchPad["location"]["name"].toUpperCase()},<br/>{this.props.launchPad["location"]["region"].toUpperCase()}</span>
                    </div>
                  </div>
                </div>
                <p>
                  {this.props.launchPad["details"]}
                </p>
              </div>
          </div>
        </div>
        <div className="rocket-menu" style={{backgroundImage: `url(${require('../assets/rocket.png')})`}}>
          <img src={require('../assets/rocket.png')}/>
          <div className="rocket-menu-title">
              <h2>MISSION LINKS</h2>
          </div>
          <div className="rocket-menu-body">
              <a href={this.props.launch.links['reddit_launch']}>REDDIT CAMPAIGN</a>
              <a href={this.props.launch.links['presskit']}>PRESSKIT</a>
              <a href={this.props.launch.links['video_link']}>MISSION VIDEO</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LaunchDetails;
