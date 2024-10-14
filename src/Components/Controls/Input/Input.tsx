import "./Input.css";

interface Props {
  value: string;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, handleChangeInput }: Props) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => handleChangeInput(e)}
        type="search"
        placeholder="Search for your country..."
        className="country__input"
      />
    </>
  );
};
export default Input;
