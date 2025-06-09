import styled from "styled-components";

const InputContainerStyled = styled.div`
  display: flex;
  align-items: center;

  box-shadow: var(--shadow);
  width: min-content;

  gap: 8px;
  border-radius: 4px;
  padding: 12px 16px;

  background-color: ${({ theme }) => theme.elementsBackground};
  transition: 200ms;

  input {
    font-size: 1rem;
    border: none;
    width: 250px;
    outline: none;
    background-color: transparent;
    color: ${({ theme }) => theme.color};
  }

  input::placeholder {
    color: ${({ theme }) => theme.placeholder};
  }
`;

export { InputContainerStyled };
