import { Component } from 'react';
import './SearchResult.css';
import { IPokemon } from '../../utils/fetchPokemonData';
export default class SearchResult extends Component<{
  searchResults: IPokemon[] | undefined;
}> {
  render() {
    return (
      <div className="search-result">
        <h2 className="result-header">Result</h2>
        <div className="result-field">
          {this.props.searchResults && this.props.searchResults[0] && (
            <div>
              <div>Name: {this.props.searchResults[0].name}</div>
              <div>Id: {this.props.searchResults[0].id}</div>
              <div>Height: {this.props.searchResults[0].height}</div>
              <div className="abilities">
                {this.props.searchResults[0].ability.map((item) => (
                  <div key={item.ability.name}>
                    <div key={item.ability.name}>
                      Ability:{item.ability.name}
                    </div>
                    <div key={item.ability.url}>
                      Ability url:{item.ability.url}
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
  }
}
