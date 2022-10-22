import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: var(--color-gray-3);
  padding: 16px 22px;
  border: 2px solid transparent;
  outline: none;
  border-radius: var(--radius-1);
  width: 100%;
  max-width: 348px;
  box-sizing: border-box;
  transition-duration: 0.2s;

  &::placeholder {
    color: var(--color-gray-2);
  }

  &:hover {
    background-color: var(--color-gray-4);
  }

  &:focus {
    border-color: var(--color-brand-2);
  }
`;
