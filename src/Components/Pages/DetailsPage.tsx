import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Country_Interface_Full } from "../Types/Country_Types";
import axios from "axios";
import { searchByCountry } from "../Config/CountriesConfig";
import styled from "styled-components";
import { IoArrowBack } from "react-icons/io5";
import SinglePage from "../SinglePage/SinglePage";

export const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 2.5;
  border-radius: var(--radii);
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--colors-text);
  cursor: pointer;
`;

interface Props {}
const DetailsPage = (props: Props) => {
  const param = useParams();
  const navigate = useNavigate();

  const [country, setCountry] = useState<Country_Interface_Full>();

  const getCountry = async () => {
    const responce = await axios.get(searchByCountry(param.name!));
    setCountry(responce.data[0]);
  };

  useEffect(() => {
    getCountry();
  }, [param.name]);

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack />
        Back
      </Button>
      {country && <SinglePage country={country} />}
      DetailsPage: {param.name}
    </div>
  );
};
export default DetailsPage;
