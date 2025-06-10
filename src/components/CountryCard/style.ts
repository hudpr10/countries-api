import styled from "styled-components";

const CardStyled = styled.a`
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow);
  width: min-content;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.elementsBackground};
  transition: 200ms;

  cursor: pointer;
  text-decoration: none;

  &:hover {
    box-shadow: var(--hover-shadow);
    opacity: 0.6;
  }

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  footer {
    padding: 24px 16px 32px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color};
  }

  span {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.color};
  }
`;

export { CardStyled };
