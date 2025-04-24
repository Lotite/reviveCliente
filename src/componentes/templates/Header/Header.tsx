import { BiFilm } from "react-icons/bi"; 
import { BsTv } from "react-icons/bs";
import { BiHomeAlt } from "react-icons/bi";
import { colors } from "../../../utils/constants";
import IconHeader from "./IconHeader";
import SearchEngine from "./SearchEngine";
import UserIcon from "./userIcon";
import { styleParent } from "../../../utils/types";
import {  useNavigate } from "react-router-dom";




export default function Header() {
  const navigate = useNavigate();
  return (
    <header style={style.main}>
      <h1 style={style.h1}>REVIVE</h1>
      <div style={style.body}>
        <IconHeader colorHover="orange" onclick={()=>{ navigate("/", { replace: true }); }} >
          <BiHomeAlt style={style.icon} />
          <span>Inicio</span>
        </IconHeader>
        <IconHeader colorHover="green" onclick={()=>{ navigate("/movie", { replace: true }); }} >
          <BiFilm style={style.icon}/>
          <span>Peliculas</span>
        </IconHeader>
        <IconHeader colorHover="blue">
          <BsTv style={style.icon} />
          <span>Series</span>
        </IconHeader>
      </div>
      <SearchEngine />
      <UserIcon/>
    </header>
  );
}

const style: styleParent = {
  main: {
    height: 70,
    background: colors.background.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingInline:100,
    paddingTop:8,
    zIndex: 20,
    position: "fixed",
    width: "100vw",

  },
  body: {
    display: "flex",
    width:500,
    alignItems: "center",
    justifyContent:"space-between",
    marginBottom: 15,
    marginInline:100,
  },
  h1: {
    color: colors.main.green,
    fontWeight: 700,
    fontSize: 30,
    fontFamily: " Arial, Helvetica, sans-serif",
    flex: 1,
  },
  icon: { fontSize: 30, color: colors.text.white },
};
