import { ChevronLeft } from "lucide-react";
import { useNavigate, type To } from "react-router";
import { BackButtonStyled } from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { darkTheme, lightTheme } from "../../themes/themes";

type BackButtonProps = {
  path: To | number;
};

const BackButton = ({ path }: BackButtonProps) => {
  const navigate = useNavigate();

  const { darkMode } = useSelector((state: RootState) => state.theme);

  return (
    <BackButtonStyled
      onClick={() =>
        typeof path === "number" ? navigate(path) : navigate(path)
      }
      theme={darkMode ? darkTheme : lightTheme}
    >
      <ChevronLeft /> Voltar
    </BackButtonStyled>
  );
};

export default BackButton;
