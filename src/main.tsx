import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import Cookies from "./utils/Cookies.tsx";

Cookies.load();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </StrictMode>
);

//window.addEventListener('load', () => { alert('hola'); });
