import { colors } from "../../../../utils/constants";
import { tColor } from "../../../../utils/types";
import "./css.css";

/**
 * @description Boton para iconos
 * @param {children} añade hijos al boton preferible solo imagenes e iconos
 * @returns
 */

export function IconB({
  children,
  style,
  onClick,
  color,
  bg,
  text,
  hover,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  color?: tColor;
  bg?: tColor;
  text?: string;
  hover?: boolean;
}): JSX.Element {
  const styles: React.CSSProperties = {
    width: 40,
    height: 40,
    color: color ? colors.main[color] : "white",
    backgroundColor: bg ? colors.main[bg] : "",
    borderRadius: "100%",
    justifyContent: "space-around",
    alignItems:"center",
    float: "left",
    display: "flex",
    flexDirection: "row",
    transition: "all 0.3s ease-in-out",
    ...style,
  };

  return (
    <button
      onMouseDown={(e) => {
        e.stopPropagation();
      }}
      onClick={(e) => {
        e.stopPropagation();
        if (onClick) {
          onClick(e);
        }
      }}

      onMouseEnter={(e) => {
        if (hover) {
          e.currentTarget.style.backgroundColor = colors.hover.botton;
        }
      }}
      onMouseLeave={(e) => {
        if (hover) {
          e.currentTarget.style.backgroundColor = bg ? colors.main[bg] : "";
        }
      }}

      style={styles}
    >
      {children}
      {text}
    </button>
  );
}
