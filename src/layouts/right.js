import React, {Component} from 'react';
import '../assests/css/Right.css';
import Personal from '../components/personal';

class Right extends Component {

    constructor(props) {
      super(props);
      this.state = {
        profileArray: []
      };
    }

    addData(data) {   
      let sortedProfileArray = [];
      let fetchPersonalData=[]; 
      for (let i = 0; i < data.length; i++) {
        fetchPersonalData.push(data[i]);
      }
      console.log("adding", fetchPersonalData, fetchPersonalData.length);
      sortedProfileArray = this.sortData(data);
      console.log("sortedProfileArray=", sortedProfileArray, sortedProfileArray.length);

      this.setState({
        profileArray: sortedProfileArray,
      })
      return sortedProfileArray; 
    }

    sortData(data) {
      let array = [];
      let namelist=[], emaillist=[], photolist=[];
      let i, switching, shouldSwitch, dir, switchcount = 0;        
  
      for (let i = 0; i < data.length; i++) {
        namelist.push(data[i]["first_name"] + " " + data[i]["last_name"]);
        emaillist.push(data[i]["email"]);
        photolist.push(data[i]["avatar"]);
      }
  
      switching = true;
      dir = "desc";
      
      while (switching) {
        switching = false;  
        for (i = 0; i < (namelist.length - 1); i++) {
          shouldSwitch = false;
          if (dir == "asc") {
            if (namelist[i].toLowerCase() > namelist[i + 1].toLowerCase()) {
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (namelist[i].toLowerCase() < namelist[i + 1].toLowerCase()) {
              shouldSwitch= true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          
          let strname = namelist[i];
          namelist[i] = namelist[i+1];
          namelist[i+1] = strname;
  
          let stremail = emaillist[i];
          emaillist[i] = emaillist[i+1];
          emaillist[i+1] = stremail;
  
          let strphoto = photolist[i];
          photolist[i] = photolist[i+1];
          photolist[i+1] = strphoto;
  
          switching = true;
          switchcount ++;
        } else {
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }      
      }
      for (let i = 0; i < namelist.length; i++) {
        let id_personal = "personal" + parseInt(i + 1);
        let id_username = "username" + parseInt(i + 1);
        let id_email0 = "useremail0_" + parseInt(i + 1);
        let id_email2 = "useremail2_" + parseInt(i + 1);
        let id_photo = "userphoto" + parseInt(i + 1);
        let name = namelist[i], email = emaillist[i], photo = photolist[i];
        array.push(<Personal 
          name={name} 
          email={email}
          photo={photo} 
          id_personal={id_personal}
          id_username={id_username}
          id_email0={id_email0}
          id_email2={id_email2}
          id_photo={id_photo}
        />);
      }
      return array;        
    }

    componentDidMount() {
      let prepareData = [];
      fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
          for(let i = 0; i< data["data"].length; i++) {
            prepareData.push(data["data"][i]);
          }
        })
        .then(
          fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => {
              for(let i = 0; i< data["data"].length; i++) {
                prepareData.push(data["data"][i]);
              }
              this.addData(prepareData);
            })
        ).catch(error => console.error(error));
    }

    render() {
      return (
        <div className="Right" id='rightwin'>            
          <div className="right_description">
            <h3 className="right_title">
                Profile list
            </h3>
            <p>
              Laudem et via procedat oratio quaerimus igitur, quid et accurate disserendum et dolorem? At magnum periculum adiit in oculis quidem exercitus quid ex ea voluptate et.
            </p>
          </div>
          <div className="User_Profile" id="user_profile">
            {this.state.profileArray}        
          </div>
        </div>
      );
    }
}

export default Right;