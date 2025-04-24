import { AiOutlineUser } from "react-icons/ai";
import { colors } from "../../../utils/constants";
import { styleParent, visible } from "../../../utils/types";
import  { useEffect, useState } from "react";
import MenuUser from "./MenuUser";

export default function UserIcon() {
  const [color, setColor] = useState<"white" | "black">("white");
  const background = { white: "", black: "#fff" };
  const [menuView, setMenuView] = useState<visible>("");
  

  useEffect(()=>{
    document.addEventListener("click",()=>{
      if(menuView == "visible") setMenuView("hidden")
    })
  })
  
function clickIcon() {
  setTimeout(() => {
    setMenuView(menuView == "visible" ? "hidden" : "visible");
    setColor("black");
  }, 100);
}

  const style: styleParent = {
    main: {
      border: "3px solid " + colors.text[color],
      borderRadius: "50%",
      marginBottom: 10,
      width: 40,
      height: 40,
      minHeight: 40,
      minWidth: 40,
      display: "flex",
      justifyContent: "center",
      backgroundColor: background[color],
      alignContent: "center",
      overflow: "hidden",
      transition: "300ms color ease-in, 300ms background-color ease-in",
    },
    icon: {
      fontSize: 30,
      color: colors.text[color],
      marginTop: 10,
      transition: "300ms color ease-in",
    },
  };
  return (
    <div style={{ position: "relative" }}>
      <div
        style={style.main}
        onClick={clickIcon}
        onMouseEnter={() => {
          setColor("black");
        }}
        onMouseLeave={() => {
          setColor("white");
        }}
      >
        <AiOutlineUser style={style.icon} />
      </div>
      <MenuUser view={menuView} />
    </div>
  );
}
