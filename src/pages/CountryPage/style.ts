import styled from "styled-components";

const CountryPageStyled = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const MainStyled = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;

  button {
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
  }

  button:hover {
    box-shadow: var(--hover-shadow);
    opacity: 0.7;
  }

  @media screen and (max-width: 1456px) {
    padding: 0 16px;
  }
`;

export { CountryPageStyled, MainStyled };
