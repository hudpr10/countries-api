import styled from "styled-components";

const NotFoundPageStyled = styled.main`
  background-color: ${({ theme }) => theme.background};
  min-height: 100vh;

  h2 {
    color: ${({ theme }) => theme.color};
    text-align: center;
    font-size: 1.5rem;
  }

  p {
    color: ${({ theme }) => theme.color};
    text-align: center;
  }
`;

const Center = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
`;

export { NotFoundPageStyled, Center };
