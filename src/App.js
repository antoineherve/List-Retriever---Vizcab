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

    // Rendu avant chargement des données
    if (employees === null) {
      return (
        <div id="page">
          <h1 className="loading">Loading ...</h1>
        </div>
      );
    }
 
    // Rendu une fois les données chargées.
    return (
      <div id="page">
        <h1>Liste des employés</h1>
        <div id="liste">
          {employees.map(employee => // On parcourt le data reçu en state avec la fonction map, et pour chaque employé ajoutons le component maison Employe
            <Employe employe={employee}>
            </Employe>
          )}
        </div>
      </div>
    );
  }
}
 
export default App;