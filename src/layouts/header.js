import React, {Component} from 'react';
import '../assests/css/Header.css';
import Photo from '../components/photo';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menubtn_display: "none",
          isToggleOn: true,
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        if(this.state.isToggleOn) {
            this.setState(state => ({
                menubtn_display: "block"
            }));
        } else {
            this.setState(state => ({
                menubtn_display: "none"
            }));
        }
    }

    render() {

        const menubtn_style = {
            display: this.state.menubtn_display,
        }

        return (
          <div>
              <div className="menu_desktop">
                <a href="#">Browse</a>
                <a href="#">How it works</a>
                <a href="#">Help</a>
                <a href="#">About</a>
              </div>
              <div className="menu_mobile">
                <div className="menulogo" onClick={this.toggleMenu}>
                    <img src={require('../assests/svg/menu.svg')} />
                </div>
                <div className="menubtn" style = {menubtn_style}>
                    <a href="#">Browse</a> <br />
                    <a href="#">How it works</a> <br />
                    <a href="#">Help</a> <br />
                    <a href="#">About</a>
                </div>
              </div>
              <div className="alarm">
                <div className="alarmimg">
                <img src={require('../assests/svg/alarm.svg')} />
                </div>
                <div className="alarmcnt">
                    <p id="almcnt">2</p>
                </div>
              </div>
              <Photo />
          </div>
        );
    }
}

export default Header;