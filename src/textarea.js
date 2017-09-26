import React, { Component } from 'react';

class Textarea extends Component {
    render() {
        return (
            <textarea onChange={this.props.func} ></textarea>
        )
    }
}

export default Textarea;