import React from 'react';
import PropTypes from 'prop-types';

import './LaunchDescriptionEntry.sass';

class LaunchDescriptionEntry extends React.Component {
    static propTypes = {
        descriptionTitle: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        descriptionDetailsList: PropTypes.object,
    }

    render() {
        let descriptionDetailsList = this.props.descriptionDetailsList;
        return (
            <div>
                <div className="description__title">
                    <h5>{this.props.descriptionTitle}</h5>
                </div>
                <div className="description__body">
                    {descriptionDetailsList &&
                        <div className="description__details">
                            {Object.keys(descriptionDetailsList).map(function(key, i) {
                                return <div className="description__details__entry" key={i}>
                                    <span className="description__details__entry__key">{key}: </span>
                                    <span>{descriptionDetailsList[key]}</span>
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
