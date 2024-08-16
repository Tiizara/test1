import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import "./index.module.sass";
import { Provider } from "react-redux";
import { store } from './store/store.ts';

const setupStore = store();

createRoot(document.getElementById("root")!).render(
  <Provider store={setupStore}>
    <App />
  </Provider>
);
