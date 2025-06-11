import styled from "styled-components";

const CountryDetailedContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 64px;

  /* Imagem */
  img {
    object-fit: cover;
    border-radius: 8px;
    width: 40%;
    height: 400px;

    @media screen and (max-width: 1456px) {
      width: 45%;
    }
  }

  /* Titulo mais Detalhes */
  main {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 50%;
  }

  h2 {
    font-size: 2rem;
    color: ${({ theme }) => theme.color};
  }

  /* Listas */
  div {
    display: flex;
    gap: 60px;
  }

  ul {
    color: ${({ theme }) => theme.color};
    display: flex;
    flex-direction: column;
    gap: 8px;
    list-style: none;
  }

  li {
    font-size: 0.9rem;
  }

  /* Fronteiras */
  span {
    margin-top: 20px;
    color: ${({ theme }) => theme.color};
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    font-size: 0.9rem;
  }

  a {
    cursor: pointer;
    padding: 4px 24px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.elementsBackground};
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    box-shadow: var(--shadow);
  }

  a:hover {
    box-shadow: var(--hover-shadow);
    opacity: 0.6;
  }

  @media screen and (max-width: 780px) {
    flex-direction: column;
    gap: 24px;
    align-items: start;

    main {
      width: 100%;
    }

    img {
      width: 100%;
      height: 300px;
    }
  }

  @media screen and (max-width: 400px) {
    div {
      flex-direction: column;
      gap: 24px;
    }
  }
`;

export { CountryDetailedContainer };
