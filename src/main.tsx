import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";
import CountryPage from "./pages/CountryPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <CountryPage />
    </Provider>
  </StrictMode>
);
