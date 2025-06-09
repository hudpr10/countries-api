import { Moon, Sun } from "lucide-react";
import { HeaderStyled } from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../redux/theme/slice";
import type { RootState } from "../../redux/store";

const Header = () => {
  const dispatch = useDispatch();
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const handleClick = () => {
    dispatch(changeTheme());
    localStorage.setItem("darkMode", JSON.stringify(!darkMode));
  };

  return (
    <HeaderStyled theme={darkMode ? darkTheme : lightTheme}>
      <nav>
        <h1>Em que parte do mundo?</h1>
        <button onClick={() => handleClick()}>
          {darkMode ? (
            <>
              <Sun color={darkTheme.color} />
              Modo Claro
            </>
          ) : (
            <>
              <Moon color={lightTheme.color} />
              Modo Escuro
            </>
          )}
        </button>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
