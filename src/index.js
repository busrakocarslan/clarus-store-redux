import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // reduxta storu sarmalamak için
import { store } from "./redux/store";
import ThemeContextProvider from "./context/themeContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <Provider store={store}>
          {" "}
          {/*sarmalama işlemi tamamlandı. değer atandı */}
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeContextProvider>
  </React.StrictMode>
);
