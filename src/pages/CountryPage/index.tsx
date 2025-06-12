import Header from "../../components/Header";
import CountryDetails from "../../components/CountryDetails";
import Loading from "../../components/Loading";

import { CountryPageStyled, MainStyled } from "./style";
import { darkTheme, lightTheme } from "../../themes/themes";

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";

import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { CountryDetailedType } from "../../types";
import BackButton from "../../components/BackButton";

const CountryPage = () => {
  // Darkmode que vem do REDUX
  const { darkMode } = useSelector((state: RootState) => state.theme);

  // UseNavigate para voltar a página
  const navigate = useNavigate();

  // UseState que vai receber os dados
  const [countryData, setCountryData] = useState<
    CountryDetailedType | undefined
  >();

  // Queryparams dinamico para a consulta
  const [searchParams] = useSearchParams();
  const countryCode = searchParams.get("q");

  // Consulta na API
  useEffect(() => {
    async function getCountry() {
      const response = await fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}?fields=name,capital,flags,population,region,subregion,tld,currencies,borders,languages`
      );
      const json = await response.json();

      if (json.message) {
        navigate("/not-found");
      } else {
        setCountryData(json);
      }
    }

    getCountry();
  }, [countryCode, navigate]);

  return (
    <CountryPageStyled theme={darkMode ? darkTheme : lightTheme}>
      <Header />
      <MainStyled theme={darkMode ? darkTheme : lightTheme}>
        <BackButton path={-1} />
        {countryData ? <CountryDetails data={countryData} /> : <Loading />}
      </MainStyled>
    </CountryPageStyled>
  );
};

export default CountryPage;
