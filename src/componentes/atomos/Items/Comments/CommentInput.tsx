import React from "react";
import { styleParent } from "../../../../utils/types";
import TextButton from "../textButton/TextButton";

export default function CommentInput() {
  function resize(e: React.FormEvent): void {
    const target = e.target as HTMLTextAreaElement;
    target.style.height = "auto"; // Resetea la altura
    target.style.height = target.scrollHeight + "px";
  }

  return (
    <div style={style.main}>
      <img
        style={style.img}
        src="https://th.bing.com/th/id/OIP.Q66rsd6YgaG5Vt0Xvi_xywHaHa?rs=1&pid=ImgDetMain"
      />
      <div style={{ width: "100%" }}>
        <textarea style={style.textArea} onInput={resize}></textarea>
        <TextButton text="Confrimar" color="orange" styleProp={{float:"right",}}/>
      </div>
    </div>
  );
}

const style: styleParent = {
  main: {
    width: "100%",
    display: "flex",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: 10,
  },
  textArea: {
    background: "none",
    border: "none",
    resize: "none",
    maxLines:1,
    //borderBottom:"5px solid black",
    width: "100%",
    height: "52px",
    margin: "0",
    outline: "none",
    scrollbarWidth: "none",
    borderBottom: "2px solid #fff6",
    fontSize:"100%",
    color: "white",
  },
};
