import React, {Component} from 'react';
import '../assests/css/Left.css';
import '../assests/css/Canvas.css';
import Header from './header';
import Footer from './footer';
import { init } from '../script/script';

class Left extends Component {

    constructor(props) {
        super(props);
        this.state = {
          width: 50,
        };
        this.openGoogle = this.openGoogle.bind(this);
    }
    
    componentDidMount() {
        init();
    }

    openGoogle() {
      window.open(
        'http://google.com',
        '_blank'
      );
    }

    render() {
        return (
          <div className="Left" id='leftwin'>
            <Header />
            <h3 className="lefttitle">
                Welcome! Thanks for joining us.
            </h3>
            <div className="circlelogo">
                <img src={require('../assests/svg/circle.svg')} />
            </div>
            <div className="Pattern">
                <img src={require('../assests/svg/pattern.svg')} />
            </div>
            <div className="leftbtn">
                <button onClick={this.openGoogle}>Set up your account</button>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Left;