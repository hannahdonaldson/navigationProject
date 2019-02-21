import React, { Component } from 'react';
import { NavLink } from "react-router-dom"


import Counter from './counter'

// import Home from "./pages/home";
// import About from "./pages/about";
// import Contact from "./pages/contact";
// import Blog from "./pages/blog";

export default class App extends Component {
  constructor(props) {
    super(props);
}

  render() {
    return (
      <div className='app'>
        <h1>HEYYYYYYYY I have been printed</h1> 
        <Counter />
        <NavLink exact to ="/">Home</NavLink>
        <NavLink to ="/about-me">About</NavLink>
        <NavLink to ="/contact">Contact</NavLink>
        <NavLink to ="/blog">Blog</NavLink>
      </div>
    );
  }
}
