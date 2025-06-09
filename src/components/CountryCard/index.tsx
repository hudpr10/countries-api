import { useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../../themes/themes";
import { CardStyled } from "./style";
import type { RootState } from "../../redux/store";
import type { CountryResponseType } from "../../types";

type DataType = {
  data: CountryResponseType;
};

const CountryCard = ({ data }: DataType) => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  return (
    <CardStyled theme={darkMode ? darkTheme : lightTheme}>
      <img src={data.flags.svg} alt={data.flags.alt} />
      <footer>
        <h2>{data.name.common}</h2>
        <span>
          <strong>População: </strong>
          {data.population}
        </span>
        <span>
          <strong>Região: </strong>
          {data.region}
        </span>
        <span>
          <strong>Capital: </strong>
          {data.capital[0]}
        </span>
      </footer>
    </CardStyled>
  );
};

export default CountryCard;
