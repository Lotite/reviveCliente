import { colors } from "../../../../../utils/constants"
import { randomInt } from "../../../../../utils/functions"
import { styleParent } from "../../../../../utils/types"
import FrameRoll from "./FrameRoll";

export default function VideoRoll(){
    return (
        <div style={style.container}>
            <div style={style.border}></div>
            <div style={style.frameContainer}>
                <FrameRoll color={color} position={1}/>
                <FrameRoll color={color} position={1}/>
                <FrameRoll color={color} position={1}/>
                <FrameRoll color={color} position={1}/>
            </div>
            <div style={style.border}></div>
            </div>
    )
}

const color = Object.values(colors.main)[randomInt(3)];

const style: styleParent = {
    container:{
        width: "60%",
        maxWidth:500,
        minWidth: 300,
        aspectRatio: "11/3",
        marginInline: "auto",
        marginTop: 100,
        borderRadius: "10px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
    },
    border:{
        width: "100%",
        height: "12%",
        backgroundColor: color,
    },
    frameContainer:{
        flexGrow: 1,
        display: "block",
    }
}