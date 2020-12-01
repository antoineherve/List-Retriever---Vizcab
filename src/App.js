import React, { Component } from 'react';
import Employe from './Employe';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: null,
    };
  }
 
  componentDidMount() {
    fetch("https://my.api.mockaroo.com/employee.json?key=53b1b110")
      .then(response => response.json())
      .then(data => this.setState({employees: data}));
  }
 
  render() {
    const employees = this.state.employees;

    if (employees === null) {
      return <p>Loading ...</p>;
    }
 
    return (
      <div id="page">
        <div id="liste">
          {employees.map(employee =>
            <Employe employe={employee}>
            </Employe>
          )}
        </div>
      </div>
    );
  }

}
 
export default App;