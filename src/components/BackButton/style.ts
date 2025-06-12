import styled from "styled-components";

const BackButtonStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: min-content;
  padding: 8px 24px 8px 16px;

  font-size: 1rem;

  border-radius: 4px;
  border: none;
  box-shadow: var(--shadow);

  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.elementsBackground};
  cursor: pointer;
  transition: 200ms;

  margin-bottom: 16px;

  &:hover {
    box-shadow: var(--hover-shadow);
    opacity: 0.7;
  }
`;

export { BackButtonStyled };
