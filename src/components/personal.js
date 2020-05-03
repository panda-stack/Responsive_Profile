import React, {Component} from 'react';
import '../assests/css/Personal.css';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
    }

    render() {
        return (
          <div className="Personal" id={this.props.id_personal}>
              <div className="user_photo">
                <img src={this.props.photo} id={this.props.id_photo}/>
              </div>
              <div className="user_name">
                  <p className="name" id={this.props.id_username}>{this.props.name}</p>
                  <p className="email0" id={this.props.id_email0}>{this.props.email}</p>
              </div>
              <div className="user_email">
                  <p className="email1">User email address</p>
                  <p className="email2" id={this.props.id_email2}>{this.props.email}</p>
              </div>
          </div>
        );
    }
}

export default Personal;