import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  state = { images: [] };
  onSeachSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID X-O-k78uah8ifc4EGVo-LV0f5zHoZdWVVHhToxNrQt8",
      },
    });
    this.setState({ images: response.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSeachSubmit} />
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
