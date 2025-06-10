import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { CountryPageStyled, MainStyled } from "./style";
import type { CountryDetailedType } from "../../types";
import CountryDetails from "../../components/CountryDetails";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { darkTheme, lightTheme } from "../../themes/themes";
import { ChevronLeft } from "lucide-react";

const CountryPage = () => {
  const { darkMode } = useSelector((state: RootState) => state.theme);

  const [countryData, setCountryData] = useState<
    CountryDetailedType | undefined
  >();

  useEffect(() => {
    async function getCountry() {
      const response = await fetch(
        "https://restcountries.com/v3.1/alpha/br?fields=name,capital,flags,population,region,subregion,tld,currencies,borders,languages"
      );
      const json = await response.json();

      setCountryData(json);
    }

    getCountry();
  }, []);

  return (
    <CountryPageStyled theme={darkMode ? darkTheme : lightTheme}>
      <Header />
      <MainStyled theme={darkMode ? darkTheme : lightTheme}>
        <button>
          <ChevronLeft /> Voltar
        </button>
        {countryData ? <CountryDetails data={countryData} /> : null}
      </MainStyled>
    </CountryPageStyled>
  );
};

export default CountryPage;
