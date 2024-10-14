import { Container } from "../Container/Container";
import "./Header.css";
import HeaderWrapper from "./HeaderWrapper/HeaderWrapper";

interface Props {}
const Header = (props: Props) => {
  return (
    <header className="header__container">
      <Container>
        <HeaderWrapper />
      </Container>
    </header>
  );
};
export default Header;
