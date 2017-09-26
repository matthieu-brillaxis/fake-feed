import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button type ="button" onClick={this.props.func}>{this.props.label}</button>
        )
    }
}

export default Button;