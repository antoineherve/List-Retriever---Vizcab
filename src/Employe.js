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
        <div className="info">
          <h2 className="e_name">{employe.name}</h2>
          <h3 className="e_title">• {employe.job_title}</h3>
        </div>
        <p className="e_detail">{employe.name} travaille pour <strong>{employe.company_name}</strong> depuis {employe.experience_in_job} an(s). </p>
        <h4 className="e_departement">Département: {employe.department}</h4>
      </div>
    );
  }
}

export default Employe;
