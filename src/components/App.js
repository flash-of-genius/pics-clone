import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSeachSubmit(term) {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: { query: term },
        headers: {
          Authorization:
            "Client-ID X-O-k78uah8ifc4EGVo-LV0f5zHoZdWVVHhToxNrQt8",
        },
      })
      .then((response) => console.log(response.data.results));
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSeachSubmit} />
      </div>
    );
  }
}

export default App;
