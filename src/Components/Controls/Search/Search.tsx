import { IoSearch } from "react-icons/io5";
import Input from "../Input/Input";
import { InputContainer } from "../../Container/InputContainer";

interface Props {
  search: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ search, handleChangeInput }: Props) => {
  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} handleChangeInput={handleChangeInput} />
    </InputContainer>
  );
};
export default Search;
