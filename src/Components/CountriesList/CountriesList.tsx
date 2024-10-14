import React from "react";
import styled from "styled-components";
import { useFetch } from "../Api/useFetch";
import CountryCard from "./CountryCard";
import { Country_Interface_Short } from "../Types/Country_Types";

const Wrapper = styled.section`
  width: 100%;
  padding: 2rem 0;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

interface Props {
  isLoading: boolean;
  isError: boolean;
  filteredCountries: Country_Interface_Short[];
}

const CountriesList = ({ isLoading, isError, filteredCountries }: Props) => {
  if (isError) {
    return <div>Sorry, something went wrong</div>;
  }

  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        filteredCountries.map(
          ({ flags, name, region, capital, population }) => (
            <React.Fragment key={name.common}>
              <CountryCard
                capital={capital[0]}
                region={region}
                img={flags.png}
                name={name.common}
                population={population}
              />
            </React.Fragment>
          )
        )
      )}
    </Wrapper>
  );
};
export default CountriesList;
