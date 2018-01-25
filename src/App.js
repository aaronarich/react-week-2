import React, { Component } from "react";

// This is the Header Component
const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy</h1>
  </div>
);

class App extends Component {
  // Quick function that logs key presses to console
  handleChange = event => {
    const { value } = event.target;
    if (value.length > 2) {
      console.log(event.target.value);
    }
  };

  // This function checks to make sure the input is more than 2 characters, then pushes input to an Alert upon pressing Enter
  handleKeyPress = event => {
    const { value } = event.target;

    if (value.length > 2 && event.key === "Enter") {
      alert(`search for ${value}`);
    }
  };

  // This renders the Search Bar Input
  render() {
    return (
      <div className="page">
        <Header />
        <div className="search grid">
          {/* stack of GIFs */}
          <input
            className="input grid-item"
            placeholder="Type Something"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </div>
    );
  }
}

export default App;
