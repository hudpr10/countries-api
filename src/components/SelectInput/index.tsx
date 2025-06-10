import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../themes/themes";
import { SelectStyled } from "./style";
import type { RootState } from "../../redux/store";

type SelectInputProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SelectInput = ({ value, setValue }: SelectInputProps) => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  return (
    <SelectStyled
      theme={darkMode ? darkTheme : lightTheme}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      <option value="">Todos os Continentes</option>
      <option value="Africa">África</option>
      <option value="Americas">América</option>
      <option value="Antarctic">Antártida</option>
      <option value="Asia">Ásia</option>
      <option value="Europe">Europa</option>
      <option value="Oceania">Oceânia</option>
    </SelectStyled>
  );
};

export default SelectInput;
