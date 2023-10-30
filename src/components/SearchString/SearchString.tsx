import { ChangeEvent, Component } from 'react';
import './SearchString.css';
export default class SearchString extends Component<{
  searchInput: string;
  onSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}> {
  render() {
    return (
      <div className="search-string">
        <input
          type="text"
          placeholder="input pokemon name"
          value={this.props.searchInput}
          onChange={this.props.onSearchInputChange}
        />
        <button type="button" onClick={this.props.onSearchClick}>
          Search
        </button>
      </div>
    );
  }
}
