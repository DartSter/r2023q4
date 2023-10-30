import { Component } from 'react';
import SearchString from '../SearchString/SearchString';
import './searchComponent.css';
export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <h1>PockeSearch</h1>
        <SearchString />
        <div className="search-result">
          <h2 className="result-header">Result</h2>
          <div className="result-field"></div>
        </div>
      </div>
    );
  }
}
