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
    ['handleChange', 'handleUpload', 'handleExport'].forEach(f => {
      this[f] = this[f].bind(this);
    });
  }
  
  handleChange(item) {
    return ({ target }) => {
      const state = {};
      state[item] = target.value;
      this.setState(state);
    };
  }

  handleUpload({ target }) {
    const reader = new FileReader();
    reader.readAsDataURL(target.files[0]);

    reader.onload = () => {
      this.setState({ image: reader.result });
    };
  }

  handleExport() {
    dom2image.toBlob(this.imageExport)
      .then (blob => {
        fileSaver.saveAs(blob, 'david-meme.png');
      });
  }

  render() {
    const { header, footer, image } = this.state;
  
    return (
      <main>
        <h1>Welcome to Davids meme generator!</h1>
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
        <section>
          <div>
            <label>
              Image source:
              <input onChange={this.handleChange('image')}/>
            </label>
          </div>
          <div>
            <label>
              Image Upload:
              <input
                type="file"
                onChange={this.handleUpload}
              />
            </label>
          </div>
          <div>
            <button onClick = {this.handleExport}>
              Export
            </button>
          </div>
        </section>
        <div className="image-container"
          ref={node => this.imageExport = node}>
          <h1>{header}</h1>
          {/* <h1>{footer}</h1> */}
          <img src={image} />
        </div>

      </main> 
    );
  }
}