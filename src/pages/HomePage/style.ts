import styled from "styled-components";

const HomePageStyled = styled.div`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;
`;

const MainStyled = styled.main`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (max-width: 1456px) {
    padding: 0 16px;
  }
`;

const FormContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 580px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const CountriesContainerStyled = styled.section`
  display: grid;
  grid-template-columns: auto auto auto auto;
  place-items: center;

  gap: 80px;
  margin-bottom: 64px;

  @media screen and (max-width: 1456px) {
    column-gap: 0;
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: auto auto auto;
  }

  @media screen and (max-width: 980px) {
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 680px) {
    grid-template-columns: auto;
  }
`;

export {
  FormContainerStyled,
  HomePageStyled,
  MainStyled,
  CountriesContainerStyled,
};
