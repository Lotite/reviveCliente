import Header from "../componentes/templates/Header/Header";
import HeaderLogin from "../componentes/templates/HeaderLogin/HeaderLogin";
import Service from "./Service";

export default class Ruter{


    static async redirectUser(){
      const isRegisted = await Service.validateToken();
        if (!isRegisted) {
          this.toLogin();
        } else{
          this.toIndex();
        }
      }
  

        public static  toLogin(){
          const url = location.pathname;
          if(url != "/login" && url != "/register"){
            location.href = "/login";
          }
        }

        public static  toIndex(){
          const url = location.pathname;
          if(url == "/login" || url == "/register"){
            location.href = "/";
          }
        }

        static choseHeader(){
          return (
            location.pathname === "/register" || location.pathname === "/login" ? (
              <>
                <HeaderLogin />
                <div style={{ padding: 45 }}></div>
              </>
            ) : (
              <>
                <Header />
                <div style={{ padding: 70 }}></div>
              </>
            )
          );
        }
}