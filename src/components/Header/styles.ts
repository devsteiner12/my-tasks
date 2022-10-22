import styled from "styled-components";
import search from "../../assets/search.svg";

export const StyledHeader = styled.header`
  height: 80px;
  background-color: white;
  box-shadow: var(--shadow);

  .container {
    height: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  margin-left: 20px;

  button {
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: center;
    height: 47px;
    width: 50px;
    border: 2px solid transparent;
    outline: none;
    border-radius: var(--radius-1);
    margin-left: -53px;
    background-color: var(--color-gray-3);
    cursor: pointer;

    &:focus {
      border-color: var(--color-brand-2);
    }
  }
`;
