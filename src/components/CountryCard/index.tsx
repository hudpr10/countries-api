import { CardStyled } from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";

import type { CountryResponseType } from "../../types";
import REGEX from "../../regex";

import { useNavigate, useSearchParams } from "react-router";

type DataType = {
  data: CountryResponseType;
};

const CountryCard = ({ data }: DataType) => {
  const { darkMode } = useSelector((state: RootState) => state.theme);
  const [searchParams] = useSearchParams({
    q: data.cca2.toLowerCase(),
  });

  const navigate = useNavigate();
  const detailedPageNavigate = () => {
    navigate({
      pathname: "/country",
      search: searchParams.toString(),
    });
  };

  return (
    <CardStyled
      theme={darkMode ? darkTheme : lightTheme}
      onClick={detailedPageNavigate}
    >
      <img src={data.flags.svg} alt={data.flags.alt} />
      <footer>
        <h2>{data.name.common}</h2>
        <span>
          <strong>População: </strong>
          {data.population === 0
            ? "Nenhum Habitante..."
            : data.population.toString().replace(REGEX, ".")}
        </span>
        <span>
          <strong>Região: </strong>
          {data.region}
        </span>
        <span>
          <strong>Capital: </strong>
          {data.capital[0] ?? "Sem Informações..."}
        </span>
      </footer>
    </CardStyled>
  );
};

export default CountryCard;
