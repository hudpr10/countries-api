import { useEffect, useState } from "react";
import type { CountryDetailedType, NameType } from "../../types";
import { CountryDetailedContainer } from "./style";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { darkTheme, lightTheme } from "../../themes/themes";
import REGEX from "../../regex";

type CountryDetailsProps = {
  data: CountryDetailedType;
};

type NeighborsType = {
  name: NameType;
  cca3: string;
};

const CountryDetails = ({ data }: CountryDetailsProps) => {
  // Darkmode do Redux
  const { darkMode } = useSelector((state: RootState) => state.theme);

  // Dados que precisam de modificação antes de serem exibidos
  const [nativeName, setNativeName] = useState<string>();
  const [currencies, setCurrencies] = useState<string>();
  const [languages, setLanguages] = useState<string>();
  const [neighbors, setNeighbors] = useState<NeighborsType[] | []>();

  // Trabalhando com os dados
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

  // Requisição na API para pegar o nome dos países vizinhos
  useEffect(() => {
    async function getNeighbors(neighbors: string) {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha?codes=${neighbors}&fields=name,cca3`
      );
      const json = await response.json();

      if (json !== undefined) {
        setNeighbors(json);
      }
    }

    if (data.borders?.length !== 0 && data.borders !== undefined) {
      const neighborsCountries = data.borders?.join(",");
      getNeighbors(neighborsCountries);
    } else {
      setNeighbors([]);
    }
  }, [data.borders]);

  return (
    <CountryDetailedContainer theme={darkMode ? darkTheme : lightTheme}>
      <img src={data.flags.svg} alt={data.flags.alt} />
      <main>
        <h2>{data.name.common}</h2>
        <div>
          <ul>
            <li>
              <strong>Nome Nativo: </strong>
              {nativeName ? nativeName : "Sem dados..."}
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
              {data.capital?.length !== 0
                ? data.capital?.join(", ")
                : "Sem dados..."}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Domínio: </strong>
              {data.tld.join(" | ")}
            </li>
            <li>
              <strong>Moedas: </strong>
              {currencies ? currencies : "Sem dados..."}
            </li>
            <li>
              <strong>Idiomas: </strong>
              {languages ? languages : "Sem dados..."}
            </li>
          </ul>
        </div>
        {data.borders?.length !== 0 ? (
          <span>
            Fronteiras:{" "}
            {neighbors
              ? neighbors.map((neighbor, index) => (
                  <a
                    key={index}
                    href={`/country?q=${neighbor.cca3.toLowerCase()}`}
                  >
                    {neighbor.name.common}
                  </a>
                ))
              : null}
          </span>
        ) : null}
      </main>
    </CountryDetailedContainer>
  );
};

export default CountryDetails;
