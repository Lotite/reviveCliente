import { colors } from "../../../utils/constants"
import { styleParent } from "../../../utils/types"

export default function HeaderLogin(){
    return <header style={style.main}>
      <h1 style={style.h1}>REVIVE</h1>
    </header>
}

const style : styleParent = {
  main: {
    height: 70,
    background: colors.background.medium,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingInline:100,
    paddingTop:8,
    zIndex: 20,
    position: "fixed",
    width: "100vw",
  },
  h1: {
    color: colors.main.green,
    fontWeight: 700,
    fontSize: 30,
    fontFamily: " Arial, Helvetica, sans-serif",
    flex: 1,
  },
}