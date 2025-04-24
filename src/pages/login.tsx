import { HiOutlineMail } from "react-icons/hi";
import InputUser from "../componentes/atomos/Items/InputUser/inputUser";
import { styleParent } from "../utils/types";
import { colors } from "../utils/constants";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IconB } from "../componentes/atomos/Items/IconB/IconB";
import TextButton from "../componentes/atomos/Items/textButton/TextButton";
import { validateInput } from "../utils/functions";
import { BiLockAlt } from "react-icons/bi";
import Cookies from "../utils/Cookies";
import Service from "../services/Service";
import Session from "../utils/Session";

type TvalidateLogin = {
  condition: boolean;
  email: HTMLInputElement;
  password: HTMLInputElement;
};

export default function Login() {
  async function login() {
    const validation = validateInputs();
    if (validation.condition) {
      const recived = await Service.login(
        validation.email.value,
        validation.password.value
      );
      if (recived.success) {
        Session.set("token", recived.token!);
        saveCookies(recived.token!);
        location.href = "/";
      } else {
        Service.serverValidation(recived.message as any, validation);
      }
    }
  }
  function saveCookies(token: string) {
    const save = (document.querySelector("#save") as HTMLInputElement).checked;
    if (save) Cookies.set("token", token);
  }
  function validateInputs(): TvalidateLogin {
    const docuRegister: HTMLDivElement = document.querySelector("#login")!;
    const email: HTMLInputElement = docuRegister.querySelector("#email")!;
    const password: HTMLInputElement = docuRegister.querySelector("#password")!;
    let condition = true;
    condition = validateInput(email, "email") && condition;
    condition = validateInput(password, "password") && condition;
    return { condition: condition, email, password };
  }
  return (
    <div id="login" style={{ display: "flex", height: "85vh" }}>
      <div style={style.main}>
        <h1>Bienvenido de nuevo</h1>
        <p>
          ¿No tienes cuenta?{" "}
          <a style={style.a} href="/register">
            Regístrate
          </a>
        </p>
        <InputUser
          id="email"
          type="email"
          placeholder="Correo electrónico"
          icon={<HiOutlineMail />}
        />
        <InputUser
          id="password"
          type="password"
          placeholder="Contraseña"
          icon={<BiLockAlt />}
        />
        <p style={{ display: "flex", alignItems: "center" }}>
          <input id="save" style={{ marginRight: 5 }} type="checkbox" />
          Recordame
          <a style={{ ...style.a, marginLeft: 30 }} href="">
            ¿Olvidaste tu contraseña?
          </a>
        </p>
        <TextButton
          text="Iniciar sesión"
          color="orange"
          styleProp={style.button}
          onclick={login}
        />
        <p>Continuar con </p>
        <div>
          <IconB
            bg="blue"
            hover
            text="Facebook"
            style={{ ...style.icon, color: "white" }}
          >
            <FaFacebookF style={{ fontSize: "200%" }} />
          </IconB>
          <IconB bg="white" hover text="Google" style={style.icon}>
            <AiOutlineGoogle style={{ fontSize: "200%" }} />
          </IconB>
        </div>
      </div>
      {/* En el futuro añadir una foto con los distintas portadas de peliculas que cambiaran */}
      <div></div>
    </div>
  );
}

const style: styleParent = {
  main: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    height: "500px",
    justifyContent: "space-between",
    maxHeight: "800px",
    padding: 20,
    marginBlock: "auto",
  },
  a: {
    color: colors.main.green,
    textDecoration: "none",
  },
  button: {
    borderRadius: 5,
    width: 300,
    height: "50px",
    marginTop: 10,
    marginBottom: 4,
  },
  icon: {
    borderRadius: 5,
    width: 130,
    height: 50,
    color: "#000",
    marginInline: 20,
  },
};
