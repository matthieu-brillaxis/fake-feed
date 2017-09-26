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
    posts : []
  };
  this.onChange=this.onChange.bind(this);
  this.onClick=this.onClick.bind(this);
}

onChange(e) {
  this.setState({ text : e.target.value })
}

onClick(e) {
  const newPost = this.state.posts;
  newPost.push(this.state.text);
  this.setState({ posts : newPost});
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
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
