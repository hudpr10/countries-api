import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./globalStyle";
import { Provider } from "react-redux";
import store from "./redux/store";
import CountryPage from "./pages/CountryPage";

import { createBrowserRouter, RouterProvider } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <GlobalStyle />
        <HomePage />
      </>
    ),
  },
  {
    path: "/country",
    element: (
      <>
        <GlobalStyle />
        <CountryPage />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
