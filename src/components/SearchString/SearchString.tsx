import './SearchString.css';

interface SearchStringProps {
  searchInput: string;
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSearchClick: () => void;
}

const SearchString: React.FC<SearchStringProps> = ({
  searchInput,
  onSearchInputChange,
  onSearchClick,
}: SearchStringProps) => {
  return (
    <div className="search-string">
      <input
        type="text"
        placeholder="input pokemon name or id"
        value={searchInput}
        onChange={onSearchInputChange}
      />
      <button type="button" onClick={onSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchString;
