import { BsPlay } from "react-icons/bs";
import { playerVideo, styleParent } from "../../../../utils/types";
import { IconB } from "../../Items/IconB/IconB";
import { useState } from "react";
import TextButton from "../../Items/textButton/TextButton";

export default function VideoLayautSearch({
  verticalPoster,
  title,
  type,
}: playerVideo) {
  const [opacidad, setOpacidad] = useState<number>(0);

  return (
    <div
      style={style.main}
      onMouseEnter={() => {
        setOpacidad(1);
      }}
      onMouseLeave={() => {
        setOpacidad(0);
      }}
    >
      <img src={verticalPoster} alt={title}></img>
      <TextButton text="Serie" color="blue" styleProp={style.text} />
      <IconB
        style={{ ...style.icon, opacity: opacidad }}
        bg="blue"
        hover={true}
      >
        <BsPlay />
      </IconB>
    </div>
  );
}

const style: styleParent = {
  main: {
    width: "200px",
    height: "300px",
    margin: "10px",
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: 10,
    fontSize: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    position: "absolute",
    top:10,
    left:10,
  }
};
