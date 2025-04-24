import { colors } from "../../../../utils/constants";
import { styleParent } from "../../../../utils/types";
import React from "react";

export default function InputUser({
  icon,
  id,
  placeholder,
  type = "text",
}: {
  icon: React.ReactElement;
  id?: string;
  placeholder?: string;
  type?: "text" | "password" | "email";
}) {
  function inputFocus(e: React.FocusEvent) {
    if (e.target.parentElement) {
      e.target.parentElement.style.border = "2px solid " + colors.main.green;
    }
  }

  function inputBlur(e: React.FocusEvent) {
    if (e.target.parentElement) {
      e.target.parentElement.style.border = "1px solid #fff3";
    }
  }

  function inputClick(e: React.MouseEvent) {
    e.currentTarget.querySelector("input")?.focus();
  }

  return (
    <div>
      <div style={style.main} onClick={inputClick}>
        {icon}
        <input
          onFocus={inputFocus}
          onBlur={inputBlur}
          style={style.input}
          type={type}
          id={id}
          placeholder={placeholder}
        />
      </div>
      <p style={style.p}></p>
    </div>
  );
}

const style: styleParent = {
  main: {
    maxWidth: 500,
    minWidth: 300,
    backgroundColor: colors.background.medium,
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
    margin: 6,
    border: "1px solid #fff3",
    borderRadius: 10,
    alignItems: "center",
    boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5)",
    color: "#fff9",
    position:"relative",
  },
  input: {
    background: "none",
    border: "none",
    flex: 1,
    outline: "none",
    caretColor: colors.main.orange,
  },
  p:{
    margin:0,
    textAlign:"left",
    textIndent:5,
    color:"red",
    fontSize:"50%",
    position:"absolute",
    transform:"translateY(-4px)",
  }
};
