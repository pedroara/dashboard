import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import reducer from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";
import { ConfigProvider } from "antd";
import theme from "./components/Library/Theme";
import "antd/dist/reset.css";
import Routes from "./routes";

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//TODO: Remove StrictMode

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <Routes />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);
