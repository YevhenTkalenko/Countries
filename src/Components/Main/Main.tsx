import styled from "styled-components";
import { Container } from "../Container/Container";
import React from "react";

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};
export default Main;
