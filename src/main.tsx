import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import GlobalStyle from "./globalStyle";
import HomePage from "./pages/HomePage";
import CountryPage from "./pages/CountryPage";
import NotFoundPage from "./pages/NotFoundPage";

import { Provider } from "react-redux";
import store from "./redux/store";

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
  {
    path: "*",
    element: (
      <>
        <GlobalStyle />
        <NotFoundPage />
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
