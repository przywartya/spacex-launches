import React from 'react';

const getPosition = (elapsedTime, h, k) => {
    const a = (4 * k) / Math.pow(h * 2, 2);
    const ypos = a * Math.pow((((elapsedTime + h) % (h * 2)) - h), 2);
    return ypos;
};

class BouncingDoggo extends React.Component {
    state = {
        beginning: Date.now(),
    }

    componentWillMount() {
        this.setState({ interval: setInterval(this.updateValue, 20) });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    updateValue = () => {
        const {
            props: {
                duration,
                start,
                end,
                isRunning,
            },
            state: {
                beginning,
            },
        } = this;
        if (isRunning) {
            const time = Date.now() - beginning;
            const value = start + getPosition(time, duration / 2, end - start);
            this.setState({ value });
        }
    };

    render() {
        const renderedChildren = this.props.children(this.state.value);
        return renderedChildren && React.Children.only(renderedChildren);
    }
}

export default BouncingDoggo;