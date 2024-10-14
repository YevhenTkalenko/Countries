import { useState } from "react";
import axios from "axios";
import { searchByCountry } from "../Config/CountriesConfig";

export const useSingleFetch = () => {
  const [singleCountry, setSingleCountry] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getOneCountry = async (name: string) => {
    try {
      setIsLoading(true);
      const responce = await axios.get(`${searchByCountry(name)}`);
      setSingleCountry(responce.data);
      setIsLoading(false);
    } catch (error) {
      throw new Error("Error");
    } finally {
      setIsLoading(false);
    }
  };

  return { singleCountry, getOneCountry, isLoading };
};
