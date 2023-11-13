import React from 'react';
import { IPokemon } from '../../utils/fetchPokemonData';
import './SearchResult.css';

interface SearchResultProps {
  searchResults: IPokemon[] | undefined;
}

const SearchResult: React.FC<SearchResultProps> = ({
  searchResults,
}: SearchResultProps) => {
  return (
    <div className="search-result">
      <h2 className="result-header">Result</h2>
      <div className="result-field">
        {searchResults && searchResults[0] && (
          <div className="result">
            <div className="result-name">Name: {searchResults[0].name}</div>
            <div>Id: {searchResults[0].id}</div>
            <div>Height: {searchResults[0].height}</div>
            <div className="abilities">
              {searchResults[0].ability.map((item) => (
                <div key={item.ability.name} className="ability">
                  <div key={item.ability.name} className="ability-name">
                    Ability: {item.ability.name}
                  </div>
                  <div key={item.ability.url}>
                    Ability url: {item.ability.url}
                  </div>
                  <div>Is hide: {item.is_hidden ? 'true' : 'false'}</div>
                  <div>Slot: {item.slot}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResult;
