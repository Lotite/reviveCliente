import { playerVideo, styleParent } from "../../../../utils/types";
import { IconB } from "../../Items/IconB/IconB";
import { FiPlay } from "react-icons/fi";
import { strTimeVideo } from "../../../../utils/functions";
import TextButton from "../../Items/textButton/TextButton";
import { useState } from "react";
import { colors } from "../../../../utils/constants";
import {  useNavigate } from "react-router-dom";

const VideoLayaut = ({
  verticalPoster,
  title,
  description,
  duration,
  year,
  director,
  generos,
}: playerVideo) => {
  const [opacidad, setOpacidad] = useState<number>(0);
  const navigate = useNavigate();
  
  return (
    <div
      style={style.main}
      onMouseEnter={(e) => {
        e.currentTarget.style.minWidth = "550px";
        e.currentTarget.style.zIndex = "10";
        setOpacidad(1);
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.minWidth = "200px";
        e.currentTarget.style.zIndex = "0";
        setOpacidad(0);
      }}
    >
      <div style={{ ...style.hijos, position: "relative", zIndex: 10 }}>
        <img src={verticalPoster} alt={title}></img>
        <TextButton
          color="blue"
          text="Serie"
          styleProp={{ position: "absolute", top: 10, left: 10 }}
        />
      </div>
      <IconB bg="blue" onClick={()=>{navigate("/media",{ replace: true })}} style={{ ...style.icono, opacity: opacidad }}>
        <FiPlay className="mx-auto d-flex" />
      </IconB>
      {
        //Contenido de la tarjeta
      }
      <div style={{ ...style.hijos, ...style.info }}>
        <h1>Pelicula</h1>
        <div style={style.scroll}>
        <p
          style={{
            bottom: "0",
            position: "sticky",
            wordBreak: "break-word",
            marginTop: 0,
          }}
        >
          {description}
        </p>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li style={{color:colors.main.blue , fontWeight:"bold",}}>Duration: {strTimeVideo(String(duration))}</li>
          <li style={{color:colors.main.green , fontWeight:"bold"}}>Año: {year}</li>
          <li style={{color:colors.main.orange , fontWeight:"bold"}}>Director: {director}</li>
          <li style={{color:colors.main.white , fontWeight:"bold"}}>Generos: {generos}</li>
        </ul>
      </div>
    </div>
  );
};

const style: styleParent = {
  main: {
    height: "300px",
    width: "200px",
    minWidth: "200px",
    transition: "all 0.3s ease-in-out",
    position: "relative",
    display: "flex",
    borderRadius: "10px",
    overflow: "hidden",
    color: "white",
    marginInline: 30,
    boxSizing: "border-box",
  },
  hijos: { height: "300px", width: "200px" },
  info: {
    width: "350px",
    minWidth: "350px",
    backgroundColor: "rgba(26, 26, 26, 0.88)",
    float: "right",
    padding: "10px",
    paddingBottom: "0",
    boxSizing: "border-box",
  },
  icono: {
    fontSize: "30px",
    position: "absolute",
    left: 140,
    bottom: 5,
    margin: 6,
    zIndex: 10,
    padding: 5,
    paddingLeft: 10,
  },
  scroll:{
    height: "7.5em", overflow: "auto",
    scrollbarWidth: "none",
  }
};

export default VideoLayaut;
