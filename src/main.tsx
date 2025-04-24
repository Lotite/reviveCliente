import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import Cookies from "./utils/Cookies.tsx";



Cookies.load();
=======
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>

      <App/>
    </BrowserRouter>
  </StrictMode>
);
<<<<<<< HEAD

//window.addEventListener('load', () => { alert('hola'); });
=======
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
