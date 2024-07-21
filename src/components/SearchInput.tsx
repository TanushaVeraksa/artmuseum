import { Dispatch, SetStateAction, FC} from "react";
import Input from "../styles/Input";
import search  from '../assets/search.svg';

interface InputProps {
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
}

const SearchInput:  FC<InputProps> = ({ searchValue, setSearchValue }: InputProps) => {
  return (
      <Input
          type="text"
          image={search}
          value={searchValue}
          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setSearchValue(e.target.value)}
          placeholder="Search Art, Artist, Work..."
          autoFocus
      />
  )
}
export default SearchInput