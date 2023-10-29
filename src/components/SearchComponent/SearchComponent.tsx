import { Component } from 'react';
import './searchComponent.css';
export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <h1>PockeSearch</h1>
        <div className="search-string">
          <input
            type="text"
            placeholder="input pokemon name"
            pattern="[A-Za-z]+"
          />
          <button>Search</button>
        </div>
        <div className="search-result">
          <h2 className="result-header">Result</h2>
          <div className="result-field"></div>
        </div>
      </div>
    );
  }
}
