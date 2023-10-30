import { Component } from 'react';
import './SearchResult.css';
export default class SearchResult extends Component {
  render() {
    return (
      <div className="search-result">
        <h2 className="result-header">Result</h2>
        <div className="result-field"></div>
      </div>
    );
  }
}
