import styled, { css } from "styled-components";
import trash from "../../../assets/trash.svg";
const trashImg = trash;

interface iStyledTypeProps {
  types: string;
}

export const StyledCard = styled.li`
  background-color: var(--color-gray-3);
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: var(--radius-1);
  margin-bottom: 20px;
  transition-duration: 0.2s;

  &:hover {
    background-color: var(--color-gray-4);
  }

  button {
    width: 34px;
    height: 34px;
    background-color: var(--color-gray-4);
    background-image: url(${trashImg});
    background-size: 18px;
    background-position: center;
    background-repeat: no-repeat;
    outline: none;
    border: none;
    border-radius: var(--radius-1);
    cursor: pointer;
  }
`;

export const StyledTypeTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledType = styled.span<iStyledTypeProps>`
  display: block;
  width: 11px;
  height: 11px;
  border-radius: 50%;

  background-color: ${({ types }) => {
    if (types == "normal") {
      return css`
        #77e864
        `;
    } else if (types == "priority") {
      return css`
        #d6e340;
        `;
    }

    return css`
        #f58737;
    `;
  }};
`;
