import { ChangeEvent, Component } from 'react';
import SearchString from '../SearchString/SearchString';
import SearchResult from '../SearchResult/SearchResult';
import './searchComponent.css';
export default class SearchComponent extends Component {
  state = {
    searchInput: '',
    searchResults: [],
  };

  componentDidMount() {
    const savedSearchInput = localStorage.getItem('searchInput');
    if (savedSearchInput) {
      this.setState({ searchInput: savedSearchInput });
      this.handleSearchClick();
    }
  }

  handleSearchClick = () => {
    localStorage.setItem('searchInput', this.state.searchInput);
  };

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.target.value });
  };

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
