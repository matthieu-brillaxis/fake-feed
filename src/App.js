import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './button';
import Textarea from './textarea';
import PostContainer from './postContainer';
import Post from './post';


class App extends Component {

constructor() {
  super();
  this.state = {
    text : "",
    posts : [],
    id : 0
  };
}

onChange = (e) => {
  this.setState({ text : e.target.value })
}

onClick = (e) => {
  const newPost = this.state.posts;
  const id = this.state.id + 1;
  newPost.push({"id" : id, "content" : this.state.text});
  this.setState({ posts : newPost});
  this.setState({id : id});
}

deletePost = (id) => {
  this.setState(prevState => ({
    posts: prevState.posts.filter(el => el.id != id )
  }));
}

render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button label="Un Bouton" func={this.onClick}/>
        <Textarea func={this.onChange} />
        <PostContainer deletePost={this.deletePost} posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
