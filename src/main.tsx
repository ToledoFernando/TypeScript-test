import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Store } from "./store/store";
import "./main.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
