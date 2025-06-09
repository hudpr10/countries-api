import { Search } from "lucide-react";
import { InputContainerStyled } from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

type SearchInputProps = {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput = ({ placeholder, value, setValue }: SearchInputProps) => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  return (
    <InputContainerStyled theme={darkMode ? darkTheme : lightTheme}>
      <Search color={darkMode ? darkTheme.color : lightTheme.color} />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputContainerStyled>
  );
};

export default SearchInput;
