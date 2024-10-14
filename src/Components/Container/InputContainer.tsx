import styled from "styled-components";


 export const InputContainer = styled.label`
  background-color: var(--color-bg);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: var(--radii);
  box-shadow: var(--shadow);
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;