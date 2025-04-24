import { colors } from "../../../../utils/constants";
import { styleParent } from "../../../../utils/types";
import React from "react";

<<<<<<< HEAD
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
=======
export default function InputUser({icon,name,placeholder}:{icon:React.ReactElement,name?:string,placeholder?:string}) {
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
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

<<<<<<< HEAD
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
=======
  return (
    <div style={style.main}>
        {icon}
      <input
        onFocus={inputFocus}
        onBlur={inputBlur}
        style={style.input}
        type="text"
        name={name}
        placeholder={placeholder}
      />
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
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
<<<<<<< HEAD
    margin: 6,
=======
    margin: 5,
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
    border: "1px solid #fff3",
    borderRadius: 10,
    alignItems: "center",
    boxShadow: "inset 0px 0px 10px 1px rgba(0, 0, 0, 0.5)",
    color: "#fff9",
<<<<<<< HEAD
    position:"relative",
=======
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
  },
  input: {
    background: "none",
    border: "none",
    flex: 1,
    outline: "none",
    caretColor: colors.main.orange,
  },
<<<<<<< HEAD
  p:{
    margin:0,
    textAlign:"left",
    textIndent:5,
    color:"red",
    fontSize:"50%",
    position:"absolute",
    transform:"translateY(-4px)",
  }
=======
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
};
