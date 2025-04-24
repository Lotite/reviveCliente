<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import Index from "./pages";
import Movie from "./pages/movie";
import PageMedia from "./pages/pageMedia";
import Register from "./pages/register";
import Login from "./pages/login";
import { useRef, useEffect } from "react";
import Ruter from "./services/Ruter";
import IMG from "./pages/img";
import LoadView from "./componentes/atomos/Items/loadView/loadView";


function App() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      Ruter.redirectUser();
      hasRun.current = true;
    }
  }, []);

  

  return (
    <>
      {Ruter.choseHeader()}
=======
//https://www.shutterstock.com/shutterstock/videos/1100019003/preview/stock-footage-close-up-shot-of-a-man-training-a-woman-at-the-gym-unrecognized-coach-working-out-with-female.webm

import { Route, Routes, useLocation } from "react-router-dom";
import Index from "./pages";
import Movie from "./pages/movie";
import Header from "./componentes/templates/Header/Header";
import PageMedia from "./pages/pageMedia";
import HeaderLogin from "./componentes/templates/HeaderLogin/HeaderLogin";
import Register from "./pages/register";
import Login from "./pages/login";

// import VideoPlay from "./componentes/atomos/Videos/VideoPlayer/VideoPlayer";
// <VideoPlay
// title="conejo"
// type="movie"
// src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
// />
// import VideoLayaut from "./componentes/atomos/Videos/VideoLayaut/VideoLayaut";
{
  /* <VideoLayaut
        title="Jose"
        type="series"
        description="Pelicula chula"
        duration={200}
        contuning={100}
        verticalPoster="https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg"
      /> */
}
//https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

function App() {
  const location = useLocation();
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
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/index" element={<Index />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/media" element={<PageMedia />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/img" element={<IMG />} />
        <Route path="/load" element={<LoadView/>} />
=======
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
      </Routes>
    </>
  );
}

export default App;
