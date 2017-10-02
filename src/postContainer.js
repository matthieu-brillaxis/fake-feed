import React, { Component } from 'react';
import Post from './post';

class PostContainer extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.posts.map((post) =>{
                        return <Post key={post.id} id={post.id} content={post.content} deletePost={this.props.deletePost} />
                    })
                }
            </ul>
        )
    }
}

export default PostContainer;