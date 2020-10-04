import React, { Component } from "react";
import { CardList } from "./Component/Card-list/card-list.compoent";
import { SearchBox } from "./Component/Search-box/search-box.component";
// import logo from './logo.svg';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      employees: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ employees: users }));
  }

  render() {
    const { employees, searchField } = this.state;
    const filterEmployees = employees.filter((employee) =>
      employee.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <SearchBox
          type="search"
          placeholder="enter Monster name"
          changedHandler={(f) => this.setState({ searchField: f.target.value })}
        />

        <CardList employees={filterEmployees}></CardList>

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        {/* </header> */}

      </div>
    );
  }
}

export default App;
