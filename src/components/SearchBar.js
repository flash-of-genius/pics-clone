import React from "react";

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }
  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            {/* alternate event handler syntax */}
            {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
