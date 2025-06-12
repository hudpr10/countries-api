import Header from "../../components/Header";
import BackButton from "../../components/BackButton";

import { NotFoundPageStyled, Center } from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

const NotFoundPage = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  return (
    <NotFoundPageStyled theme={darkMode ? darkTheme : lightTheme}>
      <Header />
      <h2>Ops... página não encontrada.</h2>
      <p> Parece que essa página não existe clique abaixo para retornar!</p>
      <Center>
        <BackButton path="/" />
      </Center>
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
