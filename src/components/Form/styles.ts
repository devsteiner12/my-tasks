import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 50px;
  background-color: white;
  border-radius: var(--radius-1);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 55px;

  h2 {
    font-size: var(--sz-title-1);
    font-weight: 500;
  }

  button {
    color: var(--color-gray-3);
    padding: 16px 0;
    border: none;
    outline: none;
    background-color: var(--color-brand-1);
    transition-duration: 0.2s;
    border-radius: var(--radius-1);
    width: 100%;
    max-width: 348px;
    align-self: center;
    cursor: pointer;

    &:hover {
      background-color: var(--color-brand-2);
    }
  }

  .input-select__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  @media screen and (min-width: 678px) {
    button {
      max-width: 100%;
    }

    .input-select__container {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;
