import { Component } from 'react';
import SearchString from '../SearchString/SearchString';
import './searchComponent.css';
import SearchResult from '../SearchResult/SearchResult';
export default class SearchComponent extends Component {
  render() {
    return (
      <div className="search-wrapper">
        <h1>PockeSearch</h1>
        <SearchString />
        <SearchResult />
      </div>
    );
  }
}
