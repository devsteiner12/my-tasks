import styled from "styled-components";

export const StyledContainer = styled.section`
  padding: 50px;
  background-color: white;
  margin-top: 25px;
  border-radius: var(--radius-1);
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: var(--sz-title-1);
    font-weight: 500;
  }
`;
