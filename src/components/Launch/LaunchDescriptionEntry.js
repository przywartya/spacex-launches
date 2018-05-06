import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDescriptionEntry.sass';

class LaunchDescriptionEntry extends React.Component {
    static propTypes = {
        descriptionTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionDetailsList: PropTypes.array,
    }

    render() {
        return (
            <div>
                <div className="description__title">
                    <h5>{this.props.descriptionTitle}</h5>
                </div>
                <div className="description__body">
                    {this.props.descriptionDetailsList &&
                        <div className="description__details">
                            {this.props.descriptionDetailsList.map(function (entry, i) {
                                return <div className="description__details__entry" key={i}>
                                    <span className="description__details__entry__key">{Object.keys(entry)[0]}: </span>
                                    <span>{entry[Object.keys(entry)[0]]}</span>
                                </div>;
                            })}
                        </div>
                    }
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default LaunchDescriptionEntry;
