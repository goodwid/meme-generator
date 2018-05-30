import React, { Component } from 'react';
import dom2image from 'dom-to-image';
import fileSaver from 'file-saver';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'header',
      footer: 'footer',
    };
    this.handleChange = this.handleChange.bind(this)
    
  }
  handleChange(item) {
    return ({ target }) => {
      const state = {}
      state[item] = target.value;
      this.setState(state);
    };
  }

  render() {
    const { header, footer } = this.state;
  
    return (
      <main>
        <h1>Welcome to David's meme generator!</h1>
        header:
        <br/>
        <input
          value={header}
          onChange={this.handleChange('header')}
        />
        <br/>
        <hr/>
        footer:
        <br/>
        <input
          value={footer}
          onChange={this.handleChange('footer')}
        />
        <br/>
        <hr/>
        <div className="output">
          {header}
        </div>
      </main> 
    );
  }
}