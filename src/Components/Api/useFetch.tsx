import axios from "axios";
import { useEffect, useState } from "react";
import { ALL_COUNTRIES } from "../Config/CountriesConfig";
import { Country_Interface_Short } from "../Types/Country_Types";

export const useFetch = () => {
  const [allCountries, setAllCountries] = useState<Country_Interface_Short[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const getAllCountries = async () => {
    try {
      setIsLoading(true);
      const responce = await axios.get(ALL_COUNTRIES);
      setAllCountries(responce.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, []);

  return { allCountries, isLoading, isError };
};
