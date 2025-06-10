import { useEffect, useState } from "react";
import type { CountryDetailedType } from "../../types";
import { CountryDetailedContainer } from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { darkTheme, lightTheme } from "../../themes/themes";
import REGEX from "../../regex";

type CountryDetailsProps = {
  data: CountryDetailedType;
};

const CountryDetails = ({ data }: CountryDetailsProps) => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const [nativeName, setNativeName] = useState<string>();
  const [currencies, setCurrencies] = useState<string>();
  const [languages, setLanguages] = useState<string>();

  useEffect(() => {
    if (data.name.nativeName) {
      const nativeNameShort = Object.keys(data.name.nativeName);
      const nativeNameList = nativeNameShort.map(
        (nativeName) => data.name.nativeName![nativeName].common
      );

      setNativeName(nativeNameList.join(", "));
    } else {
      setNativeName("Sem dados...");
    }

    if (data.currencies) {
      const currenciesShort = Object.keys(data.currencies);
      const currenciesList = currenciesShort.map(
        (currency) => data.currencies![currency].name
      );

      setCurrencies(currenciesList.join(", "));
    } else {
      setCurrencies("Sem dados...");
    }

    if (data.languages) {
      const languagesShort = Object.keys(data.languages);
      const languagesList = languagesShort.map(
        (language) => data.languages![language]
      );

      setLanguages(languagesList.join(", "));
    } else {
      setLanguages("Sem dados...");
    }
  }, [data]);

  return (
    <CountryDetailedContainer theme={darkMode ? darkTheme : lightTheme}>
      <img src={data.flags.svg} alt={data.flags.alt} />
      <main>
        <h2>{data.name.common}</h2>
        <div>
          <ul>
            <li>
              <strong>Nome Nativo: </strong>
              {nativeName}
            </li>
            <li>
              <strong>População: </strong>
              {data.population === 0
                ? "Nenhum Habitante..."
                : data.population.toString().replace(REGEX, ".")}
            </li>
            <li>
              <strong>Região: </strong>
              {data.region}
            </li>
            <li>
              <strong>Sub-região: </strong>
              {data.subregion ? data.subregion : "Sem dados..."}
            </li>
            <li>
              <strong>Capital: </strong>
              {data.capital?.join(", ")}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Domínio: </strong>
              {data.tld}
            </li>
            <li>
              <strong>Moedas: </strong>
              {currencies}
            </li>
            <li>
              <strong>Idiomas: </strong>
              {languages}
            </li>
          </ul>
        </div>
        {data.borders ? (
          <span>
            Fronteiras:{" "}
            {data.borders.map((border, index) => (
              <a key={index} href={`/country/${border.toLowerCase()}`}>
                {border}
              </a>
            ))}
          </span>
        ) : null}
      </main>
    </CountryDetailedContainer>
  );
};

export default CountryDetails;
