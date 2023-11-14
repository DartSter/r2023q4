import { ChangeEvent, useEffect, useState } from 'react';
import SearchString from '../SearchString/SearchString';
import SearchResult from '../SearchResult/SearchResult';
import { IPokemon, fetchPokemonData } from '../../utils/fetchPokemonData';
import { fetchPokemonList } from '../../utils/fetchPokemonList';
import ItemList from '../ItemList/ItemList';
import './searchComponent.css';
export const SearchComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState<IPokemon[] | []>([]);
  const [itemList, setItemList] = useState<[]>([]);

  useEffect(() => {
    const savedSearchInput = localStorage.getItem('searchInput');
    if (savedSearchInput) {
      setSearchInput(savedSearchInput);
    }
  }, []);

  useEffect(() => {
    if (searchInput) {
      updateSearchResult();
    } else {
      getItemList();
    }
  }, [searchInput]);

  const getItemList = async () => {
    try {
      const data = await fetchPokemonList();
      setItemList(data);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const updateSearchResult = async () => {
    try {
      const data = await fetchPokemonData(searchInput);
      setSearchResults([data]);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const handleSearchClick = async () => {
    try {
      setSearchResults([]);
      localStorage.setItem('searchInput', '');
      if (!searchInput) return;
      localStorage.setItem('searchInput', searchInput);
      const data = await fetchPokemonData(searchInput);
      setSearchResults([data]);
    } catch (error) {
      console.error('error:', error);
    }
  };

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="search-wrapper">
      <h1>Pockesearch</h1>
      <SearchString
        onSearchInputChange={handleSearchInputChange}
        onSearchClick={handleSearchClick}
        searchInput={searchInput}
      />
      {searchResults.length > 0 ? (
        <SearchResult searchResults={searchResults} />
      ) : (
        <ItemList listData={itemList} />
      )}
    </div>
  );
};
