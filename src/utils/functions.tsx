<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { tInput } from "./types";

/**
 * La funcion devuelve el tiempo en segundos a formato tiempo de video ejemplo 120s = 02:00 | 36000s = 01:00:00
 * @param {string|number} time - El tiempo puede ser una cadena o un número.
 */

export function strTime(time: string | number): string {
  if (typeof time === "string") {
    time = parseInt(time);
  }
  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor((time % 3600) / 60);
  const seconds: number = Math.floor(time % 60);

  return `${hours > 0 ? String(hours).padStart(2, "0") + ":" : ""}${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
=======
export function strTime(time: string | number): string {
  if (typeof time === "string") {
    time = parseInt(time)
  }
const hours:number = Math.floor(time / 3600);
const minutes:number = Math.floor((time % 3600) / 60);
const seconds :number = Math.floor(time % 60);

return `${hours > 0 ? String(hours).padStart(2, '0') + ':' : ''}${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
}

export function strTimeVideo(time: string | number): string {
  if (typeof time === "string") {
<<<<<<< HEAD
    time = parseInt(time);
  }
  const hours: number = Math.floor(time / 3600);
  const minutes: number = Math.floor((time % 3600) / 60);

  return `${hours > 0 ? hours + "h" : ""} ${minutes > 0 ? minutes : "0"}min `;
}

export function changeBackground(
  e: React.MouseEvent<HTMLElement | SVGElement>,
  color: string
) {
=======
    time = parseInt(time)
  }
const hours:number = Math.floor(time / 3600);
const minutes:number = Math.floor((time % 3600) / 60);

return `${hours > 0 ? hours + "h" : ""} ${minutes > 0 ? minutes  : "0"}min `
}


export function changeBackground(e: React.MouseEvent<HTMLElement | SVGElement>, color: string) {
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
  const target = e.target as HTMLElement | SVGElement | null;
  if (target) {
    (target as HTMLElement).style.backgroundColor = color;
  }
}

<<<<<<< HEAD
export function blockClick(time: number, fun: CallableFunction) {
  setTimeout(fun, time);
}

function validate(value: string, type: tInput) {
  const patterns = {
    name: /^[a-zA-Z\s]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    password: /^.{8,}$/,
  };
  return patterns[type].test(value);
}

export function validateInput(input: HTMLInputElement, type: tInput) {
  const message = {
    name: "un nombre",
    email: "un correo",
    password: "una contraseña, debe tener min 8 caracteres",
  };

  const value: string = input.value;
  if (validate(value, type)) {
    clearInputMessage(input);
    return true;
  } else {
    inputMessage(
      input,
      value != ""
        ? "No cumple con el formato de " + message[type]
        : "Tienes que llenar el campo"
    );
    return false;
  }
}

export function inputMessage(input: HTMLInputElement, message: string) {
  const p = input.parentElement!.parentElement!.querySelector("p");
  const padre = input.parentElement;
  padre!.style.border = "2px solid red";
  p!.innerText = message;
}

export function clearInputMessage(input: HTMLInputElement) {
  const p = input.parentElement!.parentElement!.querySelector("p");
    const padre = input.parentElement;
  padre!.style.border = "1px solid #fff3";
  p!.innerText = "";
}



export function useNavigateTo(location: string) {
  const navigate = useNavigate();
  navigate(location, { replace: true });
}


export function randomInt(num1:number,num2?:number):number{
  if(num2==undefined){
    return Math.floor(Math.random() *  num1)
  }else{
    return Math.floor(Math.random() * (num2 - num1 + 1)) + num1
  }
}
=======
export function blockClick(time:number,fun : CallableFunction ) {
  setTimeout(fun,time)
}
>>>>>>> 8113783ac86e178234d8bd6d99f42effc53d42bb
