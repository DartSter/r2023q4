import { ChangeEvent, Component } from 'react';
import SearchString from '../SearchString/SearchString';
import SearchResult from '../SearchResult/SearchResult';
import { fetchPokemonData } from '../../utils/fetchPokemonData';
import './searchComponent.css';
export default class SearchComponent extends Component {
  state = {
    searchInput: '',
    searchResults: [],
    itemList: [],
  };

  componentDidMount() {
    const savedSearchInput = localStorage.getItem('searchInput');
    if (savedSearchInput) {
      this.setState({ searchInput: savedSearchInput });
      this.handleSearchClick();
    }
  }

  handleSearchClick = async () => {
    try {
      const searchInput = this.state.searchInput;
      localStorage.setItem('searchInput', searchInput);
      const data = await fetchPokemonData(searchInput);
      this.setState({ searchResults: [data] });
    } catch (error) {
      console.error('error:', error);
    }
  };

  handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchInput: event.target.value });
  };

  render() {
    return (
      <div className="search-wrapper">
        <h1>PockeSearch</h1>
        <SearchString
          searchInput={this.state.searchInput}
          onSearchInputChange={this.handleSearchInputChange}
          onSearchClick={this.handleSearchClick}
        />
        <SearchResult searchResults={this.state.searchResults} />
      </div>
    );
  }
}
