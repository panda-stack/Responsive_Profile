import React, {Component} from 'react';
import '../assests/css/Photo.css';

class Photo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
        this.clickInput = this.clickInput.bind(this);
    }
    clickInput() {
      console.log('Input Clicked');
    }

    render() {
        const photo_style = {
          cursor: "pointer",
        }
        return (
          <div className="photo" id="photo">
              <div id="uploading_input" onClick={this.clickInput}>
                <label htmlFor="file" style={photo_style}>
                  <div className="photoimg" id="uploadimg">
                    <img src={require('../assests/img/photo.jpg')} id="output" />
                  </div>
                </label>
              </div>
              <div className="photoname">
                <p>Angelo Plessas</p>
              </div>
          </div>
        );
    }
}

export default Photo;