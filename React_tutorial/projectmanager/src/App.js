import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business website',
          category: 'Web Design'
        },
        {
          title: 'Social app',
          category: 'Mobile Development'
        },
        {
          title: 'E-commerce Shopping Cart',
          category: 'Web Development'
        },
      ]
      }
    }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
