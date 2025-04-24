import Ruter from "../services/Ruter";
import Service from "../services/Service";
import Session from "./Session";

export default class Cookies {
  private static attributes: { [key: string]: string | number | boolean } = {};


  static load() {
    const cookiesArray = document.cookie.split("; ");
    cookiesArray.forEach((cookie) => {
      const [key, value] = cookie.split("=");
      this.attributes[key] = value;
      Session.set(key,value)
    });
    if(this.attributes.user){
      alert("Hola");
      Service.userExist();
    }
  }

  static set(attribute: string, value: string | number | boolean) {
    this.attributes[attribute] = value;
    const expires = new Date(Date.now() + 1000 * 3600 * 24 * 7).toUTCString(); // 1 semana
    document.cookie = `${attribute}=${value};path=/;expires=${expires};`;
  }

  static get(attribute: string) {
    return this.attributes[attribute];
  }
  static clear(){
    this.attributes = {};
    Session.clear();
    document.cookie.split("; ").forEach((cookie) => {
      const key = cookie.split("=")[0];
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    });
    Ruter.toLogin();
  }

}
