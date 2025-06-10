import SearchInput from "../../components/SearchInput";
import SelectInput from "../../components/SelectInput";
import Header from "../../components/Header";
import CountryCard from "../../components/CountryCard";
import {
  FormContainerStyled,
  HomePageStyled,
  MainStyled,
  CountriesContainerStyled,
} from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import type { CountryResponseType } from "../../types";

const HomePage = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const [countriesData, setCountriesData] = useState<
    CountryResponseType[] | undefined
  >();
  const [countriesOnDisplay, setCountriesOnDisplay] = useState<
    CountryResponseType[] | undefined
  >(countriesData);

  const [inputSearch, setInputSearch] = useState("");
  const [selectValue, setSelectValue] = useState("");

  // Pegar todos os países
  useEffect(() => {
    async function getAll() {
      const response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,flags,population,region,cca2"
      );
      const json = await response.json();
      const ordened = json.sort(
        (a: CountryResponseType, b: CountryResponseType) =>
          a.name.common.localeCompare(b.name.common)
      );

      setCountriesData(ordened);
    }

    getAll();
  }, [setCountriesData]);

  // Realizando Filtragens com o **Input de Texto e com Select**
  useEffect(() => {
    setCountriesOnDisplay(
      countriesData?.filter((country) => {
        const countryName = country.name.common.toLowerCase();

        if (selectValue === "") {
          return countryName.includes(inputSearch.toLowerCase());
        } else {
          return (
            countryName.includes(inputSearch.toLowerCase()) &&
            country.region === selectValue
          );
        }
      })
    );
  }, [countriesData, inputSearch, selectValue]);

  return (
    <HomePageStyled theme={darkMode ? darkTheme : lightTheme}>
      <Header />
      <MainStyled>
        <FormContainerStyled>
          <SearchInput
            placeholder="Procure um país..."
            value={inputSearch}
            setValue={(value) => setInputSearch(value)}
          />
          <SelectInput
            value={selectValue}
            setValue={(value) => setSelectValue(value)}
          />
        </FormContainerStyled>
        <CountriesContainerStyled>
          {countriesOnDisplay !== undefined
            ? countriesOnDisplay.map((data, index) => (
                <CountryCard key={index} data={data} />
              ))
            : "NAO"}
        </CountriesContainerStyled>
      </MainStyled>
    </HomePageStyled>
  );
};

export default HomePage;
