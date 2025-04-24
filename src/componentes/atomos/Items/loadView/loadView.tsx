import { colors } from "../../../../utils/constants"
import { styleParent } from "../../../../utils/types"
import Particles from "./particle/Particles"
import VideoRoll from "./videoRoll/VideoRoll"

export default function LoadView() {
    return (
        <div style={style.container} >
            <VideoRoll />
            <Particles number={100} />
        </div>
    )
}




const style: styleParent = {
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: colors.background.dark,
        position: "fixed",
        zIndex: 1000,
        top: 0,
    }
}