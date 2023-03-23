import { configureStore } from "@reduxjs/toolkit";
import { ConfigProvider } from "antd";
import "antd/dist/reset.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { customTheme } from "./components/Library";
import reducer from "./reducers/rootReducer";
import Routes from "./routes";

const store = configureStore({ reducer });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//TODO: Remove StrictMode

root.render(
  <Provider store={store}>
    <ConfigProvider theme={customTheme}>
      <Routes />
    </ConfigProvider>
  </Provider>
);
