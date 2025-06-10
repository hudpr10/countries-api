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
`;

const FormContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CountriesContainerStyled = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  justify-content: start;

  margin-bottom: 64px;
`;

export {
  FormContainerStyled,
  HomePageStyled,
  MainStyled,
  CountriesContainerStyled,
};
