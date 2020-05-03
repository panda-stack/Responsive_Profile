import React from 'react';
import Left from './layouts/left';
import Right from './layouts/right';

class App extends React.Component {
  render() {
    const divstyle = {
      overflow: "auto",
      width: "100%",
      height: "100%",
      position: "absolute",
    }
    return (
      <div style={divstyle}>
        <Left />
        <Right />
      </div>      
    );
  }
}

export default App;
