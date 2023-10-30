import { ChangeEvent, Component } from 'react';
import SearchString from '../SearchString/SearchString';
import SearchResult from '../SearchResult/SearchResult';
import { fetchPokemonData } from '../../utils/fetchPokemonData';
import { fetchPokemonList } from '../../utils/fetchPokemonList';
import ItemList from '../ItemList/ItemList';
import './searchComponent.css';
export default class SearchComponent extends Component {
  state = {
    searchInput: '',
    searchResults: [],
    itemsList: [],
  };

  componentDidMount() {
    const savedSearchInput = localStorage.getItem('searchInput');
    if (savedSearchInput) {
      this.setState({ searchInput: savedSearchInput }, () => {
        this.updateSearchResult();
      });
    }
    if (!this.state.searchInput) {
      this.getItemList();
    }
  }

  getItemList = async () => {
    try {
      const data = await fetchPokemonList();
      this.setState({ itemsList: [...data] });
    } catch (error) {
      console.error('error:', error);
    }
  };

  updateSearchResult = async () => {
    try {
      const searchInput = this.state.searchInput;
      const data = await fetchPokemonData(searchInput);
      this.setState({ searchResults: [data] });
    } catch (error) {
      console.error('error:', error);
    }
  };

  handleSearchClick = async () => {
    try {
      this.setState({ searchResults: [] });
      if (!this.state.searchInput) return;
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
        {this.state.searchResults.length > 0 ? (
          <SearchResult searchResults={this.state.searchResults} />
        ) : (
          <ItemList listData={this.state.itemsList} />
        )}
      </div>
    );
  }
}
