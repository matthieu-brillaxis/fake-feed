import React, { Component } from 'react';
import logo from './logo.svg';
import FaBeer from 'react-icons/lib/fa/beer';
import './App.css';
import Button from './button';
import Textarea from './textarea';
import LoadingScreen from './loadingScreen';
import PostContainer from './postContainer';
import Post from './post';


class App extends Component {

constructor() {
  super();
  this.state = {
    text : "",
    posts : [],
    id : 0,
    opacity : 0
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
    posts: prevState.posts.filter(post => post.id !== id )
  }));
}

componentDidMount() {
  const ele = document.getElementById('loadingScreen')
  if(ele){
      ele.classList.add('available')
      setTimeout(() => {
        ele.outerHTML = '';
        this.setState({opacity : 1});
      }, 3000)
  }
}

render() {
  console.log("render");
    return (
      <div className="App">
        <LoadingScreen />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2><FaBeer /> Welcome to Beer-Land <FaBeer /></h2>
        </div>
        <div style={{opacity: this.state.opacity}} className="App-container">
          <p className="App-intro">
            List of post :
          </p>
          <Textarea func={this.onChange} />
          <Button label="Add" func={this.onClick}/>
          <PostContainer deletePost={this.deletePost} posts={this.state.posts}/>
        </div>
      </div>
    );
  }
}

export default App;
