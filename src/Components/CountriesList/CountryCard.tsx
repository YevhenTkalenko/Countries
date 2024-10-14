import styled from "styled-components";
import "./CountryCard.css";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  box-shadow: var(--shadow);
  cursor: pointer;
  overflow: hidden;
`;

interface Props {
  img: string;
  capital: string;
  name: string;
  region: string;
  population: number;
}

const CountryCard = ({ img, name, region, capital, population }: Props) => {
  const navigate = useNavigate();

  const goToDetails = (name: string) => {
    navigate(`/details/${name}`);
  };

  return (
    <Wrapper onClick={() => goToDetails(name)}>
      <img src={img} alt="flag" className="card__img" />
      <div className="card__body">
        <h3 className="card__title">{name}</h3>
        <ul className="card__list">
          <li className="card__item">
            <p>
              <span>Capital: </span>
              {capital}
            </p>
            <p>
              <span>Population: </span>
              {population}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};
export default CountryCard;
