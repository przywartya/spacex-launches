import React from 'react';
import PropTypes from 'prop-types';

import isPast from 'date-fns/is_past';
import parse from 'date-fns/parse';
import { format } from 'date-fns';

import Countdown from 'react-countdown-now';

import './LaunchLabel.sass';

class LaunchLabel extends React.Component {
    static propTypes = {
        launch: PropTypes.object.isRequired,
    }
    render() {
        let launchDate = this.props.launch["launch_date_utc"];
        let launchDateString = format(parse(launchDate), "DD MMMM YYYY").toUpperCase();
        let coreSerial = this.props.launch['rocket']['first_stage']['cores'][0]['core_serial'];
        let payloadId = this.props.launch['rocket']['second_stage']['payloads'][0]['payload_id'];
        let missionPatch = this.props.launch.links['mission_patch'];
        return (
            <div className="launch-label">
                <div>
                    <h5>{launchDateString}</h5>
                </div>
                <div>
                    <h1>{payloadId} {coreSerial}</h1>
                    {!isPast(launchDate) &&
                        <Countdown 
                        date={launchDate} 
                        renderer={
                            props => 
                            <p>
                                {props.days} DAYS &nbsp;
                                {props.hours} HRS &nbsp;
                                {props.minutes} MINS &nbsp;
                                {props.seconds} SECS TO START
                            </p>
                        }/>
                    }
                </div>
                <div>
                    <img src={missionPatch} width="256px"/>
                </div>
            </div>
        );
    }
}

export default LaunchLabel;
