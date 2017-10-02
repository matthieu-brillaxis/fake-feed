import React, { Component } from 'react';
import Button from './button';

class Post extends Component {
    render() {
        return (
            <li id={this.props.id}>{this.props.content}<Button label="X" func={this.props.deletePost.bind(this, this.props.id)} /></li>
        )
    }
}

export default Post;