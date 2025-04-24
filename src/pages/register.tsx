import { BiLockAlt } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { styleParent } from "../utils/types";
import { colors } from "../utils/constants";
import InputUser from "../componentes/atomos/Items/InputUser/inputUser";
import TextButton from "../componentes/atomos/Items/textButton/TextButton";
import { IconB } from "../componentes/atomos/Items/IconB/IconB";
import {
  clearInputMessage,
  inputMessage,
  validateInput,
} from "../utils/functions";
import Service from "../services/Service";

type TvalidateRegister = {
  condition: boolean;
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
  password_confirmation: HTMLInputElement;
};

export default function Register() {
  async function createUser() {
    const validation = validateInputs();
    if (validation.condition) {
      const { name, email, password, password_confirmation } = {
        name: validation.name.value,
        email: validation.email.value,
        password: validation.password.value,
        password_confirmation: validation.password_confirmation.value,
      };

      const recived = await Service.register(
        name,
        email,
        password,
        password_confirmation
      );
      if (recived.success) {
        location.href = "/login";
      } else {
        Service.serverValidation(recived.message as any, validation);
      }
    }
  }

  function validateInputs(): TvalidateRegister {
    const docuRegister: HTMLDivElement = document.querySelector("#register")!;
    const name: HTMLInputElement = docuRegister.querySelector("#name")!;
    const email: HTMLInputElement = docuRegister.querySelector("#email")!;
    const password: HTMLInputElement = docuRegister.querySelector("#password")!;
    const password_confirmation: HTMLInputElement = docuRegister.querySelector(
      "#password_confirmation"
    )!;

    let condition = true;

    condition = validateInput(name, "name") && condition;
    condition = validateInput(email, "email") && condition;
    condition = validateInput(password, "password") && condition;

    if (password.value !== password_confirmation.value) {
      condition = false;
      inputMessage(password_confirmation, "Las contraseñas no coinciden");
    } else {
      clearInputMessage(password_confirmation);
    }

    return { condition: condition, name, email, password, password_confirmation };
  }

  return (
    <div id="register" style={{ display: "flex", height: "85vh" }}>
      <div style={style.main}>
        <h1>Crear cuenta</h1>
        <p style={{ color: colors.text.medium }}>
          Ya tienes una cuenta?{" "}
          <a style={style.a} href="/login">
            Inicia sesión
          </a>
        </p>
        <InputUser placeholder="Nombre del usuario" id="name" icon={<AiOutlineUser />} />
        <InputUser placeholder="Correo electronico" type="email" id="email" icon={<HiOutlineMail />} />
        <InputUser placeholder="Contraseña" type="password" id="password" icon={<BiLockAlt />} />
        <InputUser placeholder="Confirmar contraseña" type="password" id="password_confirmation" icon={<BiLockAlt />} />
        <TextButton text="Crear Cuenta" color="orange" styleProp={style.button} onclick={createUser} />
        <p>Registrar por</p>
        <div>
          <IconB bg="blue" hover text="Facebook" style={{ ...style.icon, color: "white" }}>
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
    height: "100%",
    justifyContent: "space-between",
    maxHeight: "800px",
    padding: 20,
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
