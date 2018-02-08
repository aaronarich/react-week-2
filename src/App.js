import React, { Component } from "react";
import loader from "./images/loader.svg";

// This is the Header Component
const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy</h1>
  </div>
);

const UserHint = ({ loading, hintText }) => (
  <div className="user-hint">
    {loading ? (
      <img className="block mx-autos" src={loader} alt="Loading Indicator" />
    ) : (
      hintText
    )}
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      hintText: ""
    };
  }

  searchGiphy = async searchTerm => {
    try {
      const response = await fetch(
        "https://api.giphy.com/v1/gifs/search?api_key=C2p6jvcOM1cGL0Sip4JoF979vsaeC1LF&q=dog&limit=25&offset=0&rating=G&lang=en"
      );
      const data = await response.json();

      console.log(data);

    } catch (error) {}
  };

  // Quick function that logs key presses to console
  handleChange = event => {
    const { value } = event.target;
    this.setState((prevState, props) => ({
      ...prevState,
      searchTerm: value,
      hintText: value.length > 2 ? `Hit enter to search for ${value}` : ""
    }));
    if (value.length > 2) {
      console.log(event.target.value);
    }
  };

  // This function checks to make sure the input is more than 2 characters, then pushes input to an Alert upon pressing Enter
  handleKeyPress = event => {
    const { value } = event.target;

    if (value.length > 2 && event.key === "Enter") {
      this.searchGiphy(value);
    }
  };

  // This renders the Search Bar Input
  render() {
    const { searchTerm } = this.state;
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
            value={searchTerm}
          />
        </div>
        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
