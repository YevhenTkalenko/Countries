import styled from "styled-components";
import CountriesList from "../CountriesList/CountriesList";
import { Country_Interface_Short } from "../Types/Country_Types";
import { useEffect, useState } from "react";
import Controls from "../Controls/Controls";

const HomeTitle = styled.h2`
  font-weight: var(--fw-bold);
  font-size: 30px;
  text-align: center;
  margin: 2rem 0 1rem;
`;

interface Props {
  isLoading: boolean;
  isError: boolean;
  allCountries: Country_Interface_Short[];
}

const HomePage = ({ isLoading, isError, allCountries }: Props) => {
  const [filteredCountries, setFilteredCountries] =
    useState<Country_Interface_Short[]>(allCountries);

  useEffect(() => {
    if (allCountries.length > 0) {
      setFilteredCountries(allCountries);
    }
  }, [allCountries]);

  const handleSearch = (search: string, region: string) => {
    let data = [...allCountries];

    if (search) {
      data = data.filter((c) =>
        c.name.common.toLocaleLowerCase().includes(search)
      );
    }

    if (region) {
      data = data.filter((r) => r.region.includes(region));
    }

    setFilteredCountries(data);
  };

  return (
    <>
      <Controls handleSearch={handleSearch} />
      <HomeTitle>Countries List</HomeTitle>
      <hr />
      <CountriesList
        filteredCountries={filteredCountries}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
};
export default HomePage;
