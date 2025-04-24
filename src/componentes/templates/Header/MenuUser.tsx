import { FiLogOut } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFilm } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { styleParent, TinfoHerader, visible } from "../../../utils/types";
import { colors } from "../../../utils/constants";
import { changeBackground } from "../../../utils/functions";
import Service from "../../../services/Service";
import { useEffect, useState, useRef } from "react";

export default function MenuUser({ view = "" }: { view: visible }) {
  const [infoHeader, setInfoHeader] = useState<TinfoHerader>({name:"",email:""});
  const fetchHeaderInfoRef = useRef(false);

  useEffect(() => {
    if (fetchHeaderInfoRef.current) return;
    fetchHeaderInfoRef.current = true;

    const fetchHeaderInfo = async () => {
      const headerInfo = await Service.getHeaderInfo();
      setInfoHeader(headerInfo);
    };
    fetchHeaderInfo();
  }, []);

  const funHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    changeBackground(e, colors.hover.white);
    (e.target as HTMLElement).style.cursor = "pointer";
  };

  const notHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    changeBackground(e, colors.hover.none);
    (e.target as HTMLElement).style.cursor = "default";
  };

  return (
    <div className={"hiddenView " + view} id="menuUser" style={style.main}>
      <p style={style.p}>{infoHeader.name}</p>
      <p style={{ ...style.email, ...style.p }}>{infoHeader.email}</p>
      <hr style={style.hr} />
      <div onMouseEnter={funHover} onMouseLeave={notHover} style={style.div}>
        <AiOutlineUser style={style.icon} />
        Perfil
      </div>
      <div onMouseEnter={funHover} onMouseLeave={notHover}>
        <FiFilm style={style.icon} />
        Mi Lista
      </div>
      <div onMouseEnter={funHover} onMouseLeave={notHover}>
        <IoSettingsOutline style={style.icon} />
        Ajustes
      </div>
      <hr style={style.hr} />
      <div
        onMouseEnter={funHover}
        onMouseLeave={notHover}
        onClick={() => Service.closeSession()}
      >
        <FiLogOut style={style.icon} />
        Cerrar sesión
      </div>
    </div>
  );
}

const style: styleParent = {
  main: {
    width: 230,
    height: 210,
    background: colors.text.white,
    borderRadius: 10,
    boxSizing: "border-box",
    fontWeight: "600",
    paddingBlock: 10,
    textIndent: 10,
    position: "absolute",
    right: 20,
    top: 35,
    zIndex: 20,
    color: "black",
  },
  p: { marginBottom: 2 },
  email: { fontWeight: "200" },
  hr: { marginBlock: 2 },
  icon: {
    fontSize: 30,
    margin: "2 20 2 2",
  },
  div: { position: "relative", overflow: "hidden" },
};
