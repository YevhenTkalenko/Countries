import ModeSwither from "../ModeSwither/ModeSwither";
import Title from "../Title/Title";
import "./HeaderWrapper.css";

const HeaderWrapper = () => {
  return (
    <div className="header__wrapper">
      <Title />
      <ModeSwither />
    </div>
  );
};
export default HeaderWrapper;
