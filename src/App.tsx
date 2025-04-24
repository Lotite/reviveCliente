import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages";
import Movie from "./pages/movie";
import Header from "./componentes/templates/Header/Header";
import PageMedia from "./pages/pageMedia";
import HeaderLogin from "./componentes/templates/HeaderLogin/HeaderLogin";
import Register from "./pages/register";
import Login from "./pages/login";
import Ruter from "./services/Ruter";
import { useEffect, useRef } from "react";

function App() {
  const location = useLocation();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      Ruter.redirectUser();
      hasRun.current = true;
    }
  }, []);

  return (
    <>
      {location.pathname === "/register" || location.pathname === "/login" ? (
        <>
          <HeaderLogin />
          <div style={{ padding: 45 }}></div>
        </>
      ) : (
        <>
          <Header />
          <div style={{ padding: 70 }}></div>
        </>
      )}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/media" element={<PageMedia />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
