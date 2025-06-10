import styled from "styled-components";

const SelectStyled = styled.select`
  padding: 12px 16px;
  border: none;
  border-radius: 4px;

  box-shadow: var(--shadow);

  font-size: 1rem;
  width: 210px;

  background-color: ${({ theme }) => theme.elementsBackground};
  color: ${({ theme }) => theme.color};
  transition: 200ms;
`;

export { SelectStyled };
