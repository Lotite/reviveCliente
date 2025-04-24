import { API_URL } from "../utils/constants";
import Cookies from "../utils/Cookies";
import { inputMessage } from "../utils/functions";
import Session from "../utils/Session";
import { response, TinfoHerader} from "../utils/types";
import Ruter from "./Ruter";


export default class Service {
  static async apiRequest(location: string, json?: object) {
    let responseJson;
    try {
      const response = await fetch(API_URL + location, {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${Session.get("token")}`
        },
        body: JSON.stringify(json),
      });
      responseJson = await response.json();
    } catch {
      alert("Error al procesar la respuesta del servidor:");
    }
    return responseJson as response;
  }

  static async login(email: string, pass: string): Promise<response> {
    return (await this.apiRequest("login", {
      email: email,
      password: pass,
    })) as response;
  }

  static async register(
    name: string,
    email: string,
    pass1: string,
    pass2: string
  ): Promise<response> {
    const data = {
      name: name,
      email: email,
      password: pass1,
      password_confirmation: pass2,
    };
    return (await this.apiRequest("register", data)) as response;
  }

  static async getHeaderInfo():Promise<TinfoHerader> {
     const response = await this.apiRequest("headerInfo");
     return response.payload as TinfoHerader;
  }

  static async validateToken(): Promise<boolean> {
    const response = (await this.apiRequest("session")) as response;
    if (response.success) {
      Session.set("token", response.token!);
      return true;
    }
      this.closeSession();
      return false;
  }

  static async closeSession() {
    console.log("t:",Session.get("token"));
    if(Session.get("token")!==null) {
      await this.apiRequest("closeSession");
      Cookies.clear();
    }
    Ruter.toLogin();
  }

  static async  userExist(){
    const data = { user: Session.get("user") };
    const response = await this.apiRequest("userExist",data)
    if(!response.payload) this.closeSession();
  }

  static  serverValidation(
    datas: {name: Array<string>,email: Array<string>,password: Array<string>,password_confirmation: Array<string>},
    inputsElemenets : any
  ) {
    const inputs: Array<keyof typeof datas> = ["name", "email","password", "password_confirmation"];
    inputs.forEach((input) => {
      if (datas[input] && datas[input].length > 0) {
        const mensajes = datas[input].join(", ");
        inputMessage(inputsElemenets[input], mensajes);
      }
    });
  }

  static async getContentMedia(id: number,tipe:"poster"|"backdrop"|"video") {
    const response = await fetch(API_URL + `content/${id}/${tipe}`, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${Session.get("token")}`
      }
    });
    return response;
  }


}
