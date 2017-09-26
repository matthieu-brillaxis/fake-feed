import React, { Component } from 'react';
import Post from'./post';
class PostContainer extends Component {
    render() {
        return (
            <ul>
                {
                    Object.keys(this.props.posts).map(function(key) {
                    return <li>{this.props.posts[key]}</li>
                    }.bind(this))
                }
            </ul>
        )
    }
}

export default PostContainer;