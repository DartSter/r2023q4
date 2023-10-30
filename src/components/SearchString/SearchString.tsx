import React, { Component } from 'react';
import './SearchString.css';
export default class SearchString extends Component {
  render() {
    return (
      <div className="search-string">
        <input type="text" placeholder="input pokemon name" />
        <button type="button">Search</button>
      </div>
    );
  }
}
