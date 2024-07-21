import { Dispatch, SetStateAction, FC} from "react";

interface InputProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchInput:  FC<InputProps> = ({ searchValue, setSearchValue }: InputProps) => {
  return (
      <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search"
          autoFocus
      />
  )
}
export default SearchInput