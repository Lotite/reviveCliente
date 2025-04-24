import Cookies from "./Cookies";

export default class Session {
    private static attributes: { [key: string]: string | number | boolean } = {};

    static set(attribute: string, value: string | number | boolean) {
        this.attributes[attribute] = value;
        //Actalizar las cookies si ya existia ese dato.
        if(Cookies.get(attribute)) 
            Cookies.set(attribute, value);
        sessionStorage.removeItem(attribute);
        sessionStorage.setItem(attribute, JSON.stringify(value));
    }

    static get(attribute: string) {
        return this.attributes[attribute] || JSON.parse(sessionStorage.getItem(attribute) || 'null');
    }



    static clear() {
        this.attributes = {};
        sessionStorage.clear();
    }
}
