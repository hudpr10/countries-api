import styled from "styled-components";

const HeaderStyled = styled.header`
  padding: 24px 0;
  background-color: ${({ theme }) => theme.elementsBackground};
  box-shadow: var(--shadow);
  margin-bottom: 32px;
  transition: 200ms;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1440px;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.color};
  }

  button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 133px;
    white-space: nowrap;

    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.color};
    font-size: 1rem;
    border-radius: 4px;

    cursor: pointer;
    transition: 200ms;
    padding: 8px 0 8px 8px;

    &:hover {
      opacity: 0.7;
    }
  }

  @media screen and (max-width: 1456px) {
    // Adicionando respiro nas laterais em dispositivos menores
    padding: 24px 16px;
  }

  @media screen and (max-width: 450px) {
    h1 {
      font-size: 1rem;
    }
  }
`;

export { HeaderStyled };
