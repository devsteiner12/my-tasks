import styled from "styled-components";

export const StyledSelect = styled.select`
  background-color: var(--color-gray-3);
  padding: 16px 22px;
  border: 2px solid transparent;
  outline: none;
  border-radius: var(--radius-1);
  width: 100%;
  max-width: 348px;
  box-sizing: border-box;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--color-gray-4);
  }

  &:focus {
    border-color: var(--color-brand-2);
  }
`;
