import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value, // Brackets make that object a string
    });
  }

  handleChange(event) {
    const {name, value} = event.target // Synthetic event
    this.setState({
        [name]: value
    })
}

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="First Name"
          onChange={this.handleChange}
        />
        <br />
        <input
          type="text"
          value={this.state.lastName} // forces the state to be the SSOT
          name="lastName"
          placeholder="Last Name"
          onChange={this.handleChange}
        />{" "}
        // This now overwrites the first Name, give name property to inputs
        <h1>
          {this.state.firstName} {this.state.lastName}
        </h1>
      </form>
    );
  }
}

export default App;


// In react, text area is a self closing tag
<textarea value="Some text"/>
// Checkboxes
// <input type="checkbox"/>
