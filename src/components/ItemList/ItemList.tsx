import { Component } from 'react';
import { IPokemonItem } from '../../utils/fetchPokemonList';
import './ItemList.css';
export default class ItemList extends Component<{
  listData: IPokemonItem[] | never[];
}> {
  render() {
    return (
      <div className="list">
        <h2 className="list-header">Pokemon List</h2>
        <div className="list-field">
          {this.props.listData &&
            this.props.listData.length > 0 &&
            this.props.listData.map((item) => (
              <div key={item.name} className="list-item">
                <div className="list-name">Name: {item.name}</div>
                <div>URL: {item.url}</div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}
