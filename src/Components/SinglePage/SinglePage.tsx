import styled from "styled-components";
import { Country_Interface_Full } from "../Types/Country_Types";

import { useEffect, useState } from "react";
import axios from "axios";
import { filterByCode } from "../Config/CountriesConfig";
import { Button } from "../Pages/DetailsPage";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section``;

const InfoImage = styled.img``;

const InfoTitle = styled.h1``;

const ListGroupe = styled.div``;

const List = styled.ul``;

const ListItem = styled.li``;

interface Props {
  country: Country_Interface_Full;
}

const SinglePage = ({ country }: Props) => {
  const [neighbors, setNeighbors] = useState<string[]>([]);
  const navigate = useNavigate();

  const redirectToNeighbors = (name: string) => {
    navigate(`/details/${name}`);
  };

  const getNeighbors = async () => {
    if (!country.borders) return;

    try {
      const response = await axios.get(filterByCode(country.borders));
      setNeighbors(response.data.map((el: any) => el.name.common));
    } catch (error) {
      throw new Error("Произошла ошибка");
    }
  };

  useEffect(() => {
    getNeighbors();
  }, [country]);

  return (
    <Wrapper>
      <InfoImage src={country.flags.png} alt={country.name.common} />
      <div>
        <InfoTitle>{country.name.common}</InfoTitle>
        <ListGroupe>
          <List>
            <ListItem>Population: {country.population}</ListItem>
            <ListItem>Region: {country.region}</ListItem>
            <ListItem>Capital: {country.capital}</ListItem>
          </List>
          <List>
            <ListItem>
              {neighbors.length === 0
                ? "Loading"
                : neighbors.map((el) => (
                    <span key={el}>
                      <Button onClick={() => redirectToNeighbors(el)}>
                        {el}
                      </Button>
                    </span>
                  ))}
            </ListItem>
          </List>
        </ListGroupe>
      </div>
    </Wrapper>
  );
};
export default SinglePage;
