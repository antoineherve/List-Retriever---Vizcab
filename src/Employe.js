import React, { Component } from 'react';
import './App.css';

class Employe extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }
 
  render() {
    const employe = this.props.employe;
 
    return (
      <div className="employe">
          <h2 className="e_name">{employe.name}</h2>
      </div>
    );
  }
}

export default Employe;
