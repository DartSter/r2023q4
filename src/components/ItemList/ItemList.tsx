import { IPokemonItem } from '../../utils/fetchPokemonList';
import './ItemList.css';

const ItemList = ({ listData }: { listData: IPokemonItem[] | never[] }) => {
  return (
    <div className="list">
      <h2 className="list-header">Pokemon List</h2>
      <div className="list-field">
        {listData &&
          listData.length > 0 &&
          listData.map((item: IPokemonItem) => (
            <div key={item.name} className="list-item">
              <div className="list-name">Name: {item.name}</div>
              <div>URL: {item.url}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemList;
